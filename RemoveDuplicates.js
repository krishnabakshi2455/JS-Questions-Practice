function RemoveDuplicate(arr) {
    let uniquevalue = []
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (!uniquevalue[arr[i]]) {
            uniquevalue[arr[i]] = true
            result.push(arr[i])
        }
        
    }
    return result
}

const arr2 = [1,2,2,2,3,4,5,4,6,6]
console.log(RemoveDuplicate(arr2));