var isPalindrome = function(s) {
    const newStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseStr = newStr.split('').reverse().join('');
    if(newStr === reverseStr){
        console.log("true")
    }
    else console.log("false")
};

isPalindrome("A man, a plan, a canal: Panama")