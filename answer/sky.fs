#version 330 core
struct DirectLight{
    vec3 direction;
    vec3 color;
};

const float MIE_G = -0.990;
const float MIE_G2 = 0.9801;

in vec3 skyColor;
in vec3 groudColor;
in vec3 rayDir;
in vec3 sunColor;

in vec3 krSum;
in vec3 kmSum;

uniform DirectLight light;
uniform float sunSize;


out vec4 outColor;


float getMiePhase2(float eyeCos, float eyeCos2) {
    float temp = 1.0 + MIE_G2 - 2.0 * MIE_G * eyeCos;
    temp = pow(temp, pow(sunSize,0.65) * 10.0);
    temp = max(temp,1.0e-4); // prevent division by zero, esp. in half precision
    temp = 1.5 * ((1.0 - MIE_G2) / (2.0 + MIE_G2)) * (1.0 + eyeCos2) / temp;
    return temp;
}

float getMiePhase(float costheta,float costheta2)
{
    return 1.5 * ((1.0 - MIE_G2)/(2.0 + MIE_G2)) * (1.0 + costheta2)/pow(1.0 + MIE_G2 -2.0 * MIE_G * costheta, 1.5);
}

float getRayleighPhase(float costheta2)
{
    return 0.75 + 0.75 * costheta2;
}

float calcSunAttenuation(vec3 lightPos, vec3 ray) {
    float cosAngle = dot(lightPos,ray) /length(ray);
    float spot = smoothstep(0.998, 0.999, cosAngle);
//    return clamp(cosAngle,0.000,0.002);
    vec3 delta = lightPos - ray;
    float dist = length(delta);

    spot += 1.0 - smoothstep(0.0, sunSize, dist);
    return spot * spot;
}



void main(){
    const float SKY_GROUND_THRESHOLD = 0.02;
    float y = rayDir.y / SKY_GROUND_THRESHOLD;
    float fCos = dot(-light.direction, rayDir) / length(rayDir);
    float fCos2 = fCos * fCos;
    vec3 color = mix(skyColor,groudColor,clamp(y,0.0f,1.0f));
    if(y < 0.0f){
        color += sunColor * calcSunAttenuation(-light.direction, -rayDir) ;
    }
    color = sqrt(color);
    outColor = vec4(color,color.b);
    
    
//    float fCos = dot(-light.direction, rayDir) / length(rayDir);
//    float fCos2 = fCos * fCos;
//    vec3 color = getRayleighPhase(fCos2) * krSum  + getMiePhase(fCos,fCos2)* kmSum;
//    outColor = vec4(color,color.b);
    
}
