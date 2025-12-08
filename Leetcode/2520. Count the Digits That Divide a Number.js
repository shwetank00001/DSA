var countDigits = function(nums) {
    const num = nums.toString()
    let count = 0;
    for(let i=0; i<num.length ;i++){
        console.log(num[i]);
        if(num % num[i] === 0){
            count++
        }
    }
    console.log(count)
};

countDigits("7")