/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let list = [];
    let index = 0;
    let deal = function(node){
        if(node.left == null && node.right == null){
            list.push(node.val);
            return;
        }
        node.left && deal(node.left);
        node.right && deal(node.right);
    }
    deal(root1);
    let deal2 = function(node){
        if(!node){
            return false;
        }
        if(node.left == null && node.right == null){
            return list[index++] !== node.val;
        }
        if(deal2(node.left)){
            return true;
        }
        if(deal2(node.right)){
            return true;
        }
        return false;
    }
   
    return !deal2(root2) && index == list.length;
};