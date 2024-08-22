let string = prompt("enter the string")
// let string = 'krishnak'

function DuplicateCharactersInStr(str) {
    let  multipletimes = [];
    let result =[]
    let restvalue = []
    let strarr = str.split("")
    // console.log(strarr);
    for (let i = 0; i < strarr.length; i++) {
        if (!multipletimes[strarr[i]] ) {
            multipletimes[strarr[i]] = true
            restvalue.push(strarr[i])
        }else{
            result.push(strarr[i])
        }
    }
    // console.log(strcheck);
    
    return result

}
console.log(DuplicateCharactersInStr(string));
