/*
Write a function to check if a string is a palindrome.

Example: Given "racecar", the function should return true
*/

function palindrome(params) {
    
    let str = params;
    let str2 = []
    for (let i = params.length; i >=0 ; i--) {
        str2.push(params[i])
    }
    
    if (str === str2.join('')) {
        return true
    }else{
        return false
    }

    
    
    
}

console.log(palindrome("racecar"));
