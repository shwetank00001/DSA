var maxProfit = function(arr) {
    let min = arr[0];
    let profit = 0;

    if(arr.length === 1){
        return 0
    }
    for(let i=1; i<arr.length-1 ; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        profit = Math.max(profit, arr[i] - min)
    }
    console.log(profit);


};

maxProfit([7,1,5,3,6,4])