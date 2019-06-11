/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.root = null;
    this.minVal = 9007199254740992;
};


var ListNode = function(val,pre){
    this.pre = pre;
    this.val = val;
    this.next = null;
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    let node = new ListNode(x,this.root);
    if(this.root){
        this.root.next = node;
    }
    node.pre = this.root;
    this.root = node;
    this.minVal = this.minVal > x ? x : this.minVal;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let node = this.root;
    this.root = this.root.pre;
    node.pre = null;
    let val = node.val;

    if (val === this.minVal) {
        let temp = this.root;
        this.minVal = 9007199254740992;
        while(temp){

            if(temp.val < this.minVal){
                this.minVal = temp.val;   
            }
            temp = temp.pre;
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if(this.root){
        return this.root.val;
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if(this.root){
        return this.minVal;
    }
    return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());
