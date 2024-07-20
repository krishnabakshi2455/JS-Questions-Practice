function IntersectionOfarray(arr1, arr2) {

    let arr3 = []
    let arr4 = []

    for (let i = 0; i < arr1.length; i++) {

        if (arr2.includes(arr1[i])) {
            arr3.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            arr4.push(arr2[i])
        }
    }
    // console.log(arr3)
    // console.log(arr4)
    return arr3
}
console.log(IntersectionOfarray([1, 2, 3, 4, 5,10], [2, 3, 4, 7, 8, 9, 10]));