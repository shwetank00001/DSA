var topKFrequent = function(n, k) {
    const arr = [];
    const nums = n.sort()

    for(let i = 0; i < nums.length; i++){
        if(!arr.includes(nums[i])){
            arr.push(nums[i])
        }
    }

    console.log(arr.slice(0,k));
};


topKFrequent([3,0,1,0], 2)


    // if(nums.length === 1){
    //     console.log(nums)
    // }