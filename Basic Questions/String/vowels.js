function countVowels(s){
    let vowels = "aeiouAEIOU";
    let count = 0
    for( let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            console.log(`Vowel Caught at index: ${i}=>`, s[i])
            count++;
        }
    }
    console.log(count)
}

countVowels("shwetank")