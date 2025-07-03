// other =  array of extra arguements
// ...other = spreading the extra arguements without [] brakcets

const details = (fname, lname, ...other) =>{
    console.log(fname + " "+ lname + " " + other);
    console.log(other)  
}

details("Shw", 'mish', 14, 3, 1999, ["This is an extra array"], JSON.stringify({lolObj:"hahaha"}))


const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log(total);
}

sum(6,9,4);