/*
Write a function to capitalize the first letter of each word in a sentence.

Example: Given "hello world", the function should return "Hello World".

*/

function capitalize(params) {
    // return params.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice())

    let str1 = params.split(" ")
    
    let str2 = []

    str1.forEach(element => {
        // console.log(element[0].toUpperCase());
        str2.push(element[0].toUpperCase() + element.slice(1))
        
    });
    return str2.join(" ")
    
    
    

}

console.log(capitalize("hello world"));
