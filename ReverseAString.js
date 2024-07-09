let string = prompt("enter the string")

function ReverseAString() {
    let ReverseString = []
    for (let i = string.length - 1; i >= 0; i--) {
        ReverseString.push(string[i])
    }
    return ReverseString.join('')
}
console.log(ReverseAString());