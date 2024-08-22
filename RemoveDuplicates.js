function RemoveDuplicate(arr) {
    let uniquevalue = []
    let result = []

    for (let i = 0; i < arr.length; i++) {
        {/*
The condition if (!uniquevalue[arr[i]]) checks if the current element arr[i] is not already in the uniquevalue array.

uniquevalue[arr[i]] = true; marks the element as encountered by setting uniquevalue[arr[i]] to true.

result.push(arr[i]); adds the unique element to the result array.
            */}
            

        if (!uniquevalue[arr[i]]) {
            uniquevalue[arr[i]] = true
            result.push(arr[i])
        }

    }
    return [result,uniquevalue]
}

const arr2 = [1, 2, 2, 2, 3, 4, 5, 4, 6, 6]
console.log(RemoveDuplicate(arr2));