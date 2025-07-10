var topKFrequent = function(nums, k) {
    let freqObj = {};
    let n = nums.sort((x,y) => x-y)
    let i = 0
    // let right = n.length;

    for(let elements of n){
        freqObj[elements] =  (freqObj[elements] || 0 ) +1   // I did this because it was returning NaN since freq[ele]  = undefined so i used  ||0

    }

    const completeArr = Object.entries(freqObj);
    console.log(completeArr)
    const sortedArr = completeArr.sort((a,b) => b[1] -a[1]);
    console.log(sortedArr)
    const sortedArrSlice = completeArr.slice(0,k);

    const ele = sortedArrSlice.map(item => Number(item[0]))
    console.log(ele)

};

topKFrequent([4,1,-1,2,-1,2,3], 2)


    // const data = Object.keys(freqObj)
    // const ele = data.map(function(item){
    //     return Number(item)
    // })
    // console.log(ele)
    // const slicedData = ele.slice(0,k);
    // console.log(slicedData);