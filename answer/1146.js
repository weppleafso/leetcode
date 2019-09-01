/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
    this.list = [];
    this.snap_id = 0;
    this.list.push({});
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
    this.list[this.snap_id][index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
    let id = this.snap_id;
    this.list.push(Object.assign({}, this.list[id]));
    return this.snap_id++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
    let value = 0;
    let dict = this.list[snap_id];
    let temp = dict[index];
    if (temp != null) {
        value = temp;
    }
    return value;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */