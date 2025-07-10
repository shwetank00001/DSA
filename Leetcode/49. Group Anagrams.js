var groupAnagrams = function(arr) {
    let left = 0;
    let right = 1;
    arr.sort();
    console.log(arr.sort());
    const ele = arr.map(function(item){
        return item.split('').sort().join('');
    });
    console.log(ele.sort())

    const newArr = [];
    while(left< right){
        if(ele[left] === ele[right]){

        }

    }
    console.log(ele[0] === ele[2])

    
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])