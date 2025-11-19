var isValid = function(s) {
    const newArr = s.split('');
    if(newArr.length % 2 === 0){
        for(let i = 0 ; i<newArr.length; i = i+ 2)
        console.log(newArr)
    }
    else {
        console.log("Errpr")
    }
};

isValid('()[]{}')

