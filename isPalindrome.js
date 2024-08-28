

function isPalindrome(string) {

    let str1 = string.split("").reverse().join("")
    let str2 = string.split("").join("")

//    console.log(str1);
//    console.log(str2);

    if (str1 == str2) {
        return 'Palindrome'
    } else {
        return 'not/Palindrome'
    }


    // return true
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));