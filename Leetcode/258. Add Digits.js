var addDigits = function(num) {
    while (num < 10){
        const str = num.toString().split('');
        console.log(str);
        num = str.reduce((acc, curr) => {
            acc = acc + Number(curr);
            return acc;
        }, 0)
        console.log("ele", num)
    }

    console.log(num)
};

addDigits(38)