const user = { name: 'John Doe', age: 34 };
//Destructuring allows you to assign a new variable name when extracting values. 
const {name: userName, age: userAge} = user;

console.log(userName)
console.log(name)