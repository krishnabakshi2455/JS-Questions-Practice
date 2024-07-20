let string = prompt("enter the string ")

function NonReapeatingChar(str) {
    
    
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char
        }
    }
    
}

console.log(NonReapeatingChar(string));