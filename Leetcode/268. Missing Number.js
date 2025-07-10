
var missingNumber = function (nums) {
    const a = nums.sort((x,y) => x-y);
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== i) {
            return i;
        }
    }

    return a.length;

};