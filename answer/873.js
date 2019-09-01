/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
    if(K === 0){
        return 1.0;
    }
    else if(N === 0){
        return 0.0
    }
    let list = [];
    list[0] = 0;
    let add = 0;
    let i = 1
    for(;i<=W&&i<K;i++){
        add += list[i-1];
        list[i] = 1/W + add/W;
    }
    for(;i<K;i++){
        add += list[i-1];
        add -= list[i - W - 1];
        list[i] = add/W;
    }
    let ret = 0;
    let j = K - W;
    if(j < 0){
        j = 0;
    }
    list[0] = 1;
    for(;j<K;j++){
        let rate = list[j];
        let range = W - N + j;
        if(range < 0){
            range = 0;
        } 
        ret += rate * range / W;
    }
    return 1 - ret;
};
//1 1/W
//2 1/W * 1/W + 1/W;
//3 list[2]/W + list[1]/W + 1/W;
//4 list[3]/W + list[2]/W + list[1]/W + 1/W

// W+1 list[1] * 1/W
console.log(new21Game(21,17,10));



// var new21Game = function(N, K, W) {
//     if(K === 0){
//         return 1.0;
//     }
//     else if(N === 0){
//         return 0.0
//     }
//     let getRate = function(count,rate,N,K,W){
//         let ret = 0;
//         let overW = 1/W;
//         for(let i = 1;i<=W;i++){
//             let add = count + i;
//             if(add >= K){
//                 if(add > N){
//                     ret += overW;
//                 }
//             }
//             else{
//                 ret += getRate(add,overW,N,K,W);
//             }
//         }
//         return ret * rate;
//     }
//     return 1 - getRate(0,1,N,K,W);
// };

//N 1 K 1 W 1 == 1
//N 2 K 1 W 1 == 0
//N 2 K 2 W 1 == 1
//N 2 K 2 W 2 == 1
//N 3 K 1 W 1 == 1
//N 3 K 2 W 1 == 1
//N 3 K 2 W 2 == 1;
//N 3 K 2 W 3 == 1 - 1/3 * 1/3;
//N 15 K 10 W 10