/*
Write a function to find the largest number in an array.

Example: Given [1, 5, 3, 9, 2], the function should return 9.


*/

function largestnumber(arr) {
    let constant = arr[0]

    arr.forEach(element => {
        if (element>constant) {
            constant = element
        }
    });
    return constant
}
console.log(largestnumber([1, 5, 3, 9, 2]));
