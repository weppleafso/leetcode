/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) {
        return;
    }
    let dicS = {};
    let dicT = {};
    for (let i = 0, len = s.length; i < len; i++) {
        let chS = s[i];
        let chT = t[i];
        let ch_S = dicS[chS];
        if (ch_S) {
            if (ch_S !== chT) {
                return false;
            }
        }
        else {
            let ch_T = dicT[chT];
            if (!ch_T) {
                dicS[chS] = chT;
                dicS[chT] = chS;
            }
            else {
                return false;
            }

        }
    }
    return true;
};