const arrayOfStr = (s) => {
    let ele = s.map(function(item){
        let count = 0;
        const newS = item.trim();

        for(let i=0; i<newS.length; i++){
            if(newS[i] === ' '){
                count++;
            }
        }
        return count;

    })
    console.log(ele);
}
arrayOfStr(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])