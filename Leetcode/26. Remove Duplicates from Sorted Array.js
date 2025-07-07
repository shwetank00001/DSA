var removeDuplicates = function(nums) {
    const expectedNums = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!expectedNums.includes(nums[i])) {
            expectedNums.push(nums[i]);
            count++;
        }
        // else expectedNums.push('_');

    }
    console.log(count, expectedNums.sort())

};


removeDuplicates([0,0,1,1,1,2,2,3,3,4])