var twoSum = function(arr, tgt) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let newTarget = arr[left] + arr[right];

        if(newTarget === tgt){
            console.log([arr[left], arr[right]]);
            return
        }
        else if(newTarget < tgt){
            left++;
        }
        else if(tgt < newTarget){
            right--;
        }
    }
};

twoSum([2, 3, 5, 8, 11], 13)