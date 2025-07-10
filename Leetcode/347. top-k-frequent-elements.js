var topKFrequent = function(n, k) {
    const arr = [];
    const nums = n.sort();

    let left = 0;
    let right= nums.length -1;

    let arrSize = 0;

    if(left === right){
        arr.push(nums[left]);
    }
    while(arrSize <= k){
        while(left < right){
            if(nums[left] === nums[left+1]){
                    if(!arr.includes(nums[left])){
                        arr.push(nums[left]);
                    }
                    left++;
            }
            left++;
        }
        arrSize++;
    }

    console.log(arr);

};


topKFrequent([1,1,1,2,2,3,4], 3)


    // if(nums.length === 1){
    //     console.log(nums)
    // }