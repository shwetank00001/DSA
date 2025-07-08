var threeConsecutiveOdds = function(arr) {
    for(let i = 0; i< arr.length-2; i++){
        if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0){
            console.log("true", arr[i],arr[i+1],arr[i+2])
            return true
        }
    }
    console.log("false");
    return false
};

threeConsecutiveOdds([2,6,4,1]);