var singleNumber = function(nums) {
    nums.sort();
    console.log(nums)
    let left = 0;
    let right = left+1;
    while(right <= nums.length){
        let found;
        if(nums[left] === nums[right]){
            console.log("value found", nums[left])
            left++;
        }
    }
};

singleNumber([4,1,2,1,2])