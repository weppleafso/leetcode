/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    let list = [];
    let stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        if (node) {
            list.push(node.val);
            for (let i = 0, len = node.children.length; i < len; i++) {
                if (node.children[i])
                    stack.push(node.children[i]);
            }
        }

    }
    let end = list.length - 1;
    let halfLen = list.length / 2;
    for (let i = 0; i < halfLen; i++) {
        let temp = list[i];
        list[i] = list[end - i];
        list[end - i] = temp;
    }
    return list;
};
var postorder = function (root) {
    let list = [];
    let deal = function(node){
        if(!node){
            return ;
        }
        for(let i = 0,len = node.children.length;i<len;i++){
            deal(node.children[i]);
        }
        list.push(node.val);
    }
    deal(root);
    return list;
};
