function palindrome(s){
    let left = 0;
    let right = s.length -1;

    while (left <= right) {
        if(s[left] === s[right]){
            left++;
            right--
        }
        else return false;
    }
    return true


}

console.log(palindrome("abcdcbfa"))