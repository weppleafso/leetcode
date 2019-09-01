var myPromise = function(resolver){
    this._state = 'pending';
    this._resolveCallBack = [];
    this._rejectCallBack = [];
    resolver(this._resolve.bind(this),this._reject.bind(this));
}

myPromise.prototype._resolve = function(result){
    if(this._state !== 'pending'){
        return;
    }
    this._result = result;
    this._state = 'fulfilled'
    for(let i = 0;i<this._resolveCallBack.length;i++){
        this._resolveCallBack[i](this._result);
    }
    this._resolveCallBack.length = 0;
}
myPromise.prototype._reject = function(result){
    if(this._state !== 'pending'){
        return;
    }
    this._result = result;
    this._state = 'rejected'
    for(let i = 0;i<this._rejectCallBack.length;i++){
        this._rejectCallBack[i](this._result);
    }
    this._rejectCallBack.length = 0;
}
myPromise.prototype.then = function(resolve,reject = null){
    if(this._state === 'pending'){
        resolve && this._resolveCallBack.push(resolve);
        reject && this._rejectCallBack.push(reject);
    }
    if(this._state === "fulfilled"){
        resolve && resolve(this._result);
    }
    if(this._state === "rejected"){
        reject && reject(this._result);
    }
    return this;
}
myPromise['all'] = function(list:any[]){
    
}
var test = new myPromise(function(resolve,reject){
    setTimeout(() => {
        resolve('aaa');
    }, 1000);
}).then(res=>{
    console.log(res);
});
setTimeout(() => {
    console.log(test._result);
    console.log(test._resolveCallBack);
}, 1500);