let string = prompt('enter the string')

let vowels = ['a','e','i','o','u','A','E','I','O','U']

function RemoveVowels() {
    let arr = []
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
        if (vowels.includes(string[i])) {
            string.replace('')
            arr.push(string[i])
        }
        
    }
    let newstring = arr.join(',')
    return newstring
}
console.log(RemoveVowels());