var addDigits = function(nums) {
    let numsStr = nums.toString();
    // let l=0;
    // let r = numsStr.length-1 ;
    let sum =0 ;

    if(numsStr.length > 1){
        for (let i =0; i< numsStr.length; i++){
            sum = sum + Number(numsStr[i]);
        }
        return addDigits(sum);
    }
    return nums

};

addDigits(115)