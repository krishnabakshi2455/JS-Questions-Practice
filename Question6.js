/*
Write a function that returns true if all elements in an array are unique, and false otherwise.

Example: Given [1, 2, 3, 4], the function should return true. Given [1, 2, 2, 3], it should return false.
*/

function unique(params) {
    let uinq = []
    let duplicate = []

    for (let i = 0; i < params.length; i++) {

        if (params[i] === params[i + 1]) {
            duplicate.push(params[i])
        } else {
            uinq.push(params[i])
        }

    }
    console.log(uinq);
    console.log(duplicate);
    
    
    if (duplicate.length > 0) {
        return [false ,'this is not unique']
    } else {
        return [true, 'this is  unique']
    }

}

console.log(unique([1, 2, 3, 3]));
