let str1 = prompt("enter the first string")

let str2 = prompt("enter the second string")

function AnagramCheck() {
    let strcheck1 = []
    let strcheck2 = []

    for (let i = 0; i < str1.length; i++) {
        strcheck1.push(str1[i])
    }
    for (let i = 0; i < str2.length; i++) {
        strcheck2.push(str2[i])
    }
    if (strcheck1.sort().join(',') === strcheck2.sort().join(',')) {
        alert("Anagram")
    } else {
        alert("Not Anagram")
    }
}
console.log(AnagramCheck());