var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right= 1;

    let arr= []
    
    while(right < s.length){
        if(s[left] !== s[right]){
            arr.push(s[left]);
            right++
        }
        else left++
    }
    console.log(arr)
};


lengthOfLongestSubstring("abcabcbb")