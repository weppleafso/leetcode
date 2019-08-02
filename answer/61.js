/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(k === 0){
        return head;
    }
    let length = 0;
    let temp = head;
    let end = null;
    while(temp){
        length++;
        end = temp;
        temp = temp.next;
    }
    let index = length - k % length;
    if(index === 0){
        return head;
    }
    let pre = null;
    let cur = head;
    for(let i = 0;i<index;i++){
        pre = cur;
        cur = cur.next;
    }
    if(pre && cur){
        end.next = head;
        pre.next = null;
        head = cur;
    }
    return head;
};