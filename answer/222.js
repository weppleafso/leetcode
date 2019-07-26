/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(root == null){
        return 0;
    }
    let list = [root];
    let nextNodes = [];
    let count = 1;
    while(true){
        let flag = false;
        for(let i = 0,len = list.length;i<len;i++){
            let node = list[i];
            if(node.left){
                count++;
                nextNodes.push(node.left);
            }
            else{
                flag = true;
            }
            if(node.right){
                count++;
                nextNodes.push(node.right);
            }
            else{
                flag = true;
            }
        }
        if(flag){
            list = null;
            nextNodes = null;
            return count;
        }
        else{
            list = nextNodes;
            nextNodes = [];
        }
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};