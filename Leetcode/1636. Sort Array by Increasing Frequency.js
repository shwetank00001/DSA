var frequencySort = function(nums) {
    let freq = {}
    nums.sort((x,y) => x-y);
    for(let element of nums){
        freq[element] = (freq[element] || 0) + 1;
    }
    console.log(freq);
    const newArr = Object.entries(freq);
    console.log(newArr)
    const sortedArr = newArr.sort((x,y) => x[1] - y[1]);
    console.log(sortedArr);
    const ele = sortedArr.map(item => Number(item[0]))
    console.log(ele)
};

frequencySort([1,1,2,2,2,3])