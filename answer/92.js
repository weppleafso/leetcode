/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function(head, m, n) {
    let root = new ListNode();
    root.next = head;
    var reverse = function(node,len){
        if(len < 0){
            return node;
        }
        if(node == null){
            return head;
        }
        let head = node;
        let nextNode = node.next;
        if(nextNode == null){
            return head;
        }
        let nextnextNode = nextNode.next;
        for(let i = 0;i<len;i++){
            nextNode.next = node;
            node = nextNode;
            nextNode = nextnextNode;
            if(nextNode == null){
                break;
            }
            nextnextNode = nextNode.next;
        }
        head.next = nextNode;
        return node;
    }
    let node = root;
    let pre = root;
    for(let i = 1;i<m;i++){
        node = node.next;
    }
    let ret = reverse(node.next,n - m);
    node.next = ret;
    return root.next;
};

var createNode = function(list){
    let root = new ListNode();
    let node = root;
    for(let i = 0;i<list.length;i++){
        let newNode = new ListNode(list[i]);
        node.next = newNode;
        node = newNode;
        
    }
    return root.next;
}
var logNode = function(root){
    let str = '['
    while(root){
        next = root.next;
        if(next){
            str += root.val + ",";
        }
        else{
            str += root.val + "";
        }
        root = root.next;
       
        
    }
    str += ']'
    console.log(str);
}

let root = createNode([1,2,3,4,5]);
logNode(root);
root = reverseBetween(root,2,3);
logNode(root);
