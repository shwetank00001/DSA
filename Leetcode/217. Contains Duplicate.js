var containsDuplicate = function(nums) {
    for(let i = 0; i<nums.length -1; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                console.log("true", i, nums[i], j, nums[j]);
                return true
            }
        }
    }
    return false
};

containsDuplicate([1,2,22, 3,4, 22])