const [a, b, ...arg] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arg);


function removeFirstTwo(list) {
  const [x,y, ...arr] = list;
//   return arr;
  console.log(arr)
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);