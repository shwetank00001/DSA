var checkIfPangram = function(sentence) {
    const set = new Set(sentence);
    if(set.size >= 26){
        console.log("true");
        return true
    }
    else console.log("false")

};

checkIfPangram("di")