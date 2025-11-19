const arr1 = [5,2,10,19,90,7181];
const arr2 = [7,9,10,30,19];

const arr3 = arr1.concat(arr2);

const arr4 = []
for(let i = 0; i< arr3.length; i++){
    console.log(arr3[i]);
    if(!arr4.includes(arr3[i])){
        arr4.push(arr3[i])
    }
}

console.log(arr4)



