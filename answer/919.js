/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {
    this.root = root;
    this.insertNodes = [root];
    this.nextNodes = [];
    this.index = 0;
    while(true){
        let flag = false;
        for(var i =0;i<this.insertNodes.length;i++){
            let node = this.insertNodes[i];
            if(node.left){
                this.nextNodes.push(node.left);
            }
            if(node.right){
                this.nextNodes.push(node.right);
            }
            if(!node.left || !node.right){
                flag = true;
                break;
            }
        }
        if(flag){
            this.index = i;
            break;
        }
        else{
            this.insertNodes = this.nextNodes;
            this.nextNodes = [];
            this.index = 0;
        }
    }
    
    
    
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (v) {
    let node = this.insertNodes[this.index];
    if (node.left == null) {
        node.left = new TreeNode(v);
        this.nextNodes.push(node.left);
    }
    else if (node.right == null) {
        node.right = new TreeNode(v);
        this.nextNodes.push(node.right);
        this.index++;
    }
    if(this.index >= this.insertNodes.length){
        this.index = 0;
        this.insertNodes = this.nextNodes;
        this.nextNodes = [];
    }
    return node.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this.root;
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */