

function findMissingNumber(arr, find) {

    let result = []
    for (let i = 1; i <= find; i++) {
        // console.log(i);
        if (arr.indexOf(i) == -1) {
            result.push(i)
        }
    }
    return result

}

console.log(findMissingNumber([1, 2, 3, 4, 6, 5, 7, 8, 9, 10, ], 10));

