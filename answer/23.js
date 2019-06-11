/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }
    let ret = null;
    let i = 0;
    let len = lists.length
    for (; i < len; i++) {
        ret = lists[i];
        if(ret){
            i++;
            let node = new ListNode(NaN);
            node.next = ret;
            ret = node;
            break;
        }
    }
    if(!ret){
        return null;
    }
    for(;i<len;i++){
        let list = lists[i];
        let pre = ret;
        let next = ret.next;
        while(list && next){
            let temp = list;
            if(next.val > temp.val){
                pre.next = temp;
                list = list.next;
                temp.next = next;
                pre = temp;
            }
            else{
                pre = next;
                next = next.next;
            }
        }
        if(next == null){
            pre.next = list;
        }
    }
    return ret.next;
};

var mergeKLists = function (lists) {
    
}