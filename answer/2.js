/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let add = 0;
    let ret = l1;
    let last = null;
    while(l1 && l2){
        let value = l1.val + l2.val + add;
        add = Math.floor(value / 10);
        value = value % 10;
        l1.val = value;
        last = l1;
        l1 = l1.next;
        l2 = l2.next;
    }
    let l = l1 || l2;
    last.next = l;
    while(l && add){
        let value = l.val  + add;
        add = Math.floor(value / 10);
        value = value % 10;
        l.val = value;
        last = l;
        l = l.next;
    }
    if(l == null && add === 1){
        let node = new ListNode(add);
        last.next = node;
    }
    return ret;
};