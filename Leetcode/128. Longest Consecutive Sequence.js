var longestConsecutive = function(nums) {
    nums.sort((x,y) => x-y);
    console.log(nums)

    let left = 0;
    let right  = left + 1;
    let newArr = [];

    
    while(right < nums.length ){

        if(nums[left] + nums[right] === 0){
            return 1
        }
        if(nums[right] - nums[left] === 1){
            if(!newArr.includes(nums[left])){
                newArr.push(nums[left]);
            }
            if(!newArr.includes(nums[right])){
                newArr.push(nums[right]);
            }
            left++;
            right++;
        }
        else {
            left++;
            right++
        }
    }


    if(nums.length === 1){
        return 1
    }
    else return newArr.length
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))