/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.dic = {};
    this.length = 0;
    this.list = [];
    this.totalDic = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.dic[val]) {
        return false;
    }
    this.dic[val] = true;
    let tempIndex = this.length;
    let index = this.totalDic[val];
    if (index == null) {
        this.list.push(val);
        let tempVal = this.list[tempIndex];
        this.totalDic[val] = tempIndex;
        if(tempVal != null){
            this.list[tempIndex] = val;
            this.list[this.list.length - 1] = tempVal;
            this.totalDic[tempVal] = this.list.length - 1;
        }
    }
    else{
        let tempVal = this.list[tempIndex];
        this.totalDic[val] = tempIndex;
        if(tempVal != null){
            this.list[tempIndex] = val;
            this.list[index] = tempVal;
            this.totalDic[tempVal] = index;
        }
    }
    this.length++;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if(!this.dic[val]){
        return false;
    }
    delete this.dic[val];
   
    let index = this.totalDic[val];
    let tempIndex = this.length - 1;
    let tempVal = this.list[tempIndex];
    this.totalDic[val] = tempIndex;
    if(tempVal != null){
        this.list[tempIndex] = val;
        this.list[index] = tempVal;
        this.totalDic[tempVal] = index;
    }
    this.length--;
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let len = Math.floor(Math.random() * this.length);
    if(len > this.length){
        return null;
    }
    return this.list[len];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet()
console.log(obj.insert(1));
// console.log(obj.insert(0));
console.log(obj.remove(1));
console.log(obj.insert(2));
console.log(obj.list);
console.log(obj.totalDic);
console.log(obj.length);
console.log(obj.getRandom());