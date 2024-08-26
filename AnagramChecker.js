let string = prompt("enter the first string")
let string2 = prompt("enter the second string")

function AnagramChecker(str1, str2) {
    let str3 = str1.split("")
    let str4 = str2.split("").reverse()
    let uniquevalue = []
    // console.log(str3,str4);
    let imposter = []
    if (str3.length !== str4.length) return 'NOT AN Anagram because of length';

    for (let i = 0; i < str4.length; i++) {

        if (!str3.includes(str4[i]) ) imposter.push(str4[i])
    }

    if (imposter.length > 0) {
        return `NOT AN Anagram because of imposter ${imposter}`
    } else if (uniquevalue.length > 0) {
        return `NOT AN Anagram because of uniquevalue ${uniquevalue}`

    }else {
        return `AN Anagram ${str3} ======== ${str4}`
    }


}
console.log(AnagramChecker(string, string2));
