/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let list = [];
    var searchTree = function(node,list){
        if(node.left){
            searchTree(node.left,list);
        }
        list.push(node);
        if(node.right){
            searchTree(node.right,list);
        }
    }
    searchTree(root,list);
    let temp = [];
    for(let i = 0,len = list.length;i<len;i++){
        temp.push(list[i].val)
    }
    temp = temp.sort(function(a,b){
        return a - b;
    });
    for(let i = 0,len = list.length;i<len;i++){
        list[i].val = temp[i];
    }
    return root;
};