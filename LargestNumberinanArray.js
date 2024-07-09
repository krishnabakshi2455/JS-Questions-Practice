let arr = [2,3,5,6,9,5,5,6,66,3,5332,63,623]

function LargestinArray() {
    if (arr.length===0) {
        return undefined
    }
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
console.log(LargestinArray());