#version 330 core
layout (location=0) in vec3 position;

struct DirectLight{
    vec3 direction;
    vec3 color;
};

uniform mat4x4 model;
uniform mat4x4 view;
uniform mat4x4 projection;

uniform float _AtmosphereThickness;
uniform vec3 _SkyTint;
uniform float _Exposure;
uniform float _SunSize;
uniform vec3 GroundTint;




uniform DirectLight light;

#define OUTER_RADIUS 1.025
#define kRAYLEIGH (mix(0.0, 0.0025, pow(_AtmosphereThickness,2.5)))
#define kMIE 0.0010
#define kSUN_BRIGHTNESS 50.0
#define kMAX_SCATTER 50.0
#define PI 3.14159265
#define samples 2.0



out vec3 skyColor;
out vec3 groudColor;
out vec3 rayDir;
out vec3 sunColor;

out vec3 krSum;
out vec3 kmSum;

float scaleAngle(float inCos)
{
    float x = 1.0 - inCos;
    return 0.25 * exp(-0.00287 + x * (0.459 + x * (3.83 + x * (-6.80 + x * 5.25))));
}

// Calculates the Rayleigh phase function
float getRayleighPhase(vec3 light, vec3 ray)
{
    float eyeCos = dot(light, ray);
    return 0.75 + 0.75*eyeCos*eyeCos;
}


void main(){
    
//    gl_Position = projection * view * model * vec4(position,1.0);
    
    const float innerRadius = 1.0;
    const float innerRadius2 = 1.0;
    const float outerRadius = OUTER_RADIUS;
    const float outerRadius2 = OUTER_RADIUS * OUTER_RADIUS;
    
    const vec3 kDefaultScatteringWavelength = vec3(0.65, 0.57, 0.475);
    const vec3 kVariableRangeForScatteringWavelength = vec3(0.15,0.15,0.15);
    
    
    const float simpleSundiskIntensityFactor = 27.0;
    
    const float kCameraHeight = 0.0001;
    
    const float kSunScale = 400.0 * kSUN_BRIGHTNESS;
    const float kKmESun = kMIE * kSUN_BRIGHTNESS;
    const float kKm4PI = 4 * kMIE * PI;
    const float kScale = 1.0 / (outerRadius - innerRadius);
    const float kScaleDepth = 0.25;
    const float kScaleOverScaleDepth = kScale / kScaleDepth;
    
    
    gl_Position = projection * view * model * vec4(position,1.0);
    
    vec3 skyTintInGammaSpace = _SkyTint;//支持非GAMMA空间后要调整
    vec3 scatteringWavelength = mix(kDefaultScatteringWavelength-kVariableRangeForScatteringWavelength,kDefaultScatteringWavelength+kVariableRangeForScatteringWavelength,vec3(1.0) - skyTintInGammaSpace);
//    vec3 scatteringWavelength = kDefaultScatteringWavelength - kVariableRangeForScatteringWavelength;
    vec3 invWavelength = 1.0 / pow(scatteringWavelength, vec3(4.0));
    
    float krESun = kRAYLEIGH * kSUN_BRIGHTNESS;
    float kr4PI = kRAYLEIGH * 4.0 * PI;
    vec3 cameraPos = vec3(0.0,innerRadius + kCameraHeight,0.0);
    vec3 eyeRay = normalize(vec3(model * vec4(position,1.0)));
    
    float far = 0.0;

    vec3 frontColor = vec3(0.0, 0.0, 0.0);
    if(eyeRay.y > 0.0f){
        far = sqrt(outerRadius2 + innerRadius2 * eyeRay.y * eyeRay.y - innerRadius2) - innerRadius * eyeRay.y;
        vec3 pos = cameraPos + far * eyeRay;
        float height = innerRadius + kCameraHeight;
        float depth = exp(kScaleOverScaleDepth * -kCameraHeight);
        float startAngle = dot(eyeRay,cameraPos)/height;
        float startOffset = depth * scaleAngle(startAngle);
        
        float sampleLength = far / samples;
        float sampleScaleLength = sampleLength * kScale;
        
        vec3 sampleRay = sampleLength * eyeRay;
        
        vec3 samplePoint = 0.5 * sampleRay + cameraPos;
        {
            float height = length(samplePoint);
            float depth = exp(kScaleOverScaleDepth * (innerRadius - height));
            float lightAngle = dot(-light.direction,samplePoint)/height;
            float cameraAngle = dot(eyeRay,samplePoint)/height;
            float scatter = startOffset + depth * (scaleAngle(lightAngle) - scaleAngle(cameraAngle));
            vec3 attenute = exp(-clamp(scatter,0,kMAX_SCATTER) * (invWavelength * kr4PI + kKm4PI));
            frontColor += attenute * (depth * sampleScaleLength);
            samplePoint += sampleRay;
        }
        {
            float height = length(samplePoint);
            float depth = exp(kScaleOverScaleDepth * (innerRadius - height));
            float lightAngle = dot(-light.direction,samplePoint)/height;
            float cameraAngle = dot(eyeRay,samplePoint)/height;
            float scatter = startOffset + depth * (scaleAngle(lightAngle) - scaleAngle(cameraAngle));
            vec3 attenute = exp(-clamp(scatter,0,kMAX_SCATTER) * (invWavelength * kr4PI + kKm4PI));
            frontColor += attenute * (depth * sampleScaleLength);
            samplePoint += sampleRay;
        }
        krSum = frontColor * (invWavelength * krESun);
        kmSum = frontColor * kKmESun;

    }
    else{
        far = (-kCameraHeight) / (min(-0.001, eyeRay.y));
        vec3 pos = cameraPos + far * eyeRay;
        float depth = exp((-kCameraHeight) * (1.0/kScaleDepth));
        float cameraAngle = dot(-eyeRay, pos);
        float lightAngle = dot(-light.direction,pos);
        float cameraScale = scaleAngle(cameraAngle);
        float lightScale = scaleAngle(lightAngle);
        float cameraOffset = depth*cameraScale;
        float temp = (lightScale + cameraScale);

        float sampleLength = far / samples;
        float scaledLength = sampleLength * kScale;
        vec3 sampleRay = eyeRay * sampleLength;
        vec3 samplePoint = cameraPos + sampleRay * 0.5;
        vec3 attenuate = vec3(0.0);
        {
            float height = length(samplePoint);
            float depth = exp(kScaleOverScaleDepth * (innerRadius - height));
            float scatter = depth*temp - cameraOffset;
            attenuate = exp(-clamp(scatter, 0.0, kMAX_SCATTER) * (invWavelength * kr4PI + kKm4PI));
            frontColor += attenuate * (depth * scaledLength);
            samplePoint += sampleRay;
        }
        krSum = frontColor * (invWavelength * krESun + kKmESun);
        kmSum = clamp(attenuate,0.0,1.0);
    }
//    u_GroundColor*u_GroundColor is gamma space convert to linear space

    
    groudColor = _Exposure * (krSum + GroundTint*GroundTint * kmSum);
    skyColor    = _Exposure * (krSum * getRayleighPhase(-light.direction, -eyeRay));
    rayDir      = -eyeRay;
    
    float lightColorIntensity = clamp(length(light.color), 0.25, 1.0);
    sunColor    = simpleSundiskIntensityFactor * clamp(kmSum * kSunScale,0.0,1.0) * light.color / lightColorIntensity;
}

