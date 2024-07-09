

let Value = prompt("Enter The Palindrome")

// console.log(Value);
function PalindromeChecker(Value) {
    let reversearr = []
    let Original = Value

    for (let i = Value.length - 1; i >= 0; i--) {
        reversearr.push(Value[i])
    }
    let reversevalue = reversearr.join('')
    if (Original == reversevalue) {
        return "It is a Palindrome"
    } else {
        return "It is not a Palindrome"
    }

}
console.log(PalindromeChecker(Value));