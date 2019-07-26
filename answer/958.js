/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let list = [];
    list.push(root);
    let flagEnd = false;
    while(list.length > 0){
        let temp = [];
        for(let i = 0,len = list.length;i<len;i++){
            let node = list[i];
            if(node == null){
                flagEnd = true;
            }
            else{
                if(flagEnd){
                    return false;
                }
                temp.push(node.left);
                temp.push(node.right);
            }
        }
        list = temp;
    }
    return true;
};
