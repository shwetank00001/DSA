function spaces(s){
    let count = 0;
    let newS = s.trim();
    for( let i=0; i<newS.length; i++){
        if(newS[i] === " "){
            console.log(newS[i]);
            count++;
        }
    }
    console.log(count)
}

spaces(" Shwetank Is a don!")