/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    if(root == null){
        return new TreeNode(val);
    }
    if(root.val < val){
        let ret = new TreeNode(val);
        ret.left = root;
        return ret;
    }
    let list = [];
    list.push(root);
    while(list.length !== 0){
        let node = list.shift();
        if(node.right){
            list.push(node.right);
            if(node.right.val < val){
                let node2 = new TreeNode(val);
                node2.left = node.right;
                node.right = node2;
                break;
            }
        }
        else{
            node.right = new TreeNode(val);
            break;
        }
        if(node.left){
            list.push(node.left);
            if(node.left.val < val){
                let node2 = new TreeNode(val);
                node2.left = node.left;
                node.left = node2;
                break;
            }
        }
        else{
            node.left = new TreeNode(val);
            break;
        }
        
    }
    return root;
};