var isAnagram = function(s, t) {
    const sArr = s.split('').sort().join('')
    const tArr = t.split('').sort().join('');
    // console.log(sArr, tArr);
    if(sArr === tArr){
        return true
    }
    else return false
};

console.log(isAnagram("car", "rac"))