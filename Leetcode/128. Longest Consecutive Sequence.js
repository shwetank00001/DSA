var longestConsecutive = function(nums) {
   const newArr = nums.sort();
   let left = 0;
   let right = 1;
   const arr = [];
   while(left < right && right < newArr.length - 1){
    if(newArr[left] === newArr[right]){
        left++;
        right++;
    }
    if(newArr[right] = newArr[left] + 1 ){
        if(!arr.includes(newArr[right]) && !arr.includes(newArr[left]) ){
            arr.push(newArr[right])
            arr.push(newArr[left]);
        }
        left++;
        right++;
    } 

   }

   console.log(arr.sort((x,y) => x-y));
   
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))

//   0, 0, 1, 2, 3, 4, 5, 6, 7, 8