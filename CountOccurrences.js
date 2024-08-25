

function countOccurrences(arr) {
    let result = {}

    arr.forEach(element => {
        // console.log(element);
        if (result[element]) {
            result[element] +=1
        } else {
            result[element] = 1
            
        }
    });
    return result
    
}

console.log(countOccurrences(['a','b','c','a','b','b','c','a','c','c','f']));
