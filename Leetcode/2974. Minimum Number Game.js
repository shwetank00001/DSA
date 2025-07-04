var numberGame = function(nums) {
  let arr = [];
  let sort = nums.sort((a, b) => a - b);  // 2,3,4,5

  for (let i = 0; i < sort.length ; i+=2){
    arr.push(sort[i+1], sort[i]);
  }

  return arr
    
};

numberGame([5,4,2,3]

)