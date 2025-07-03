const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

// how to destructure

const { johnDoe: { age, email }} = user;
console.log(age)

//how to assign new variables to the keys

const { johnDoe: { age: userAge, email: userEmai }} = user;



const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;

// Only change code above this line