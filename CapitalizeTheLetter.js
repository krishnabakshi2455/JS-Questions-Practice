let string = prompt("enter the string")
let index = parseFloat(prompt("enter the index"))

function CapitalizeTheLetter(str, ind) {
    let arrstr = str.split("")
    let arr = []

    for (let i = 0; i < str.length; i++) {

        if (arrstr.length < ind) {
            alert("the index not found")
            break
        } else if (str[i] === arrstr[ind]){
            arr.push(str[i].toUpperCase())
        } else {
            arr.push(str[i])
        }
    }

    return arr
}
console.log(CapitalizeTheLetter(string, index));

