/*
Implement a function to flatten a nested array of any depth.

Example: Given [1, [2, [3, [4]], 5]], the function should return [1, 2, 3, 4, 5].
*/

function flatten(params) {
    // return params.flat(Infinity)

    return params.reduce((acc,val)=>acc.concat(Array.isArray(val)?flatten(val):val),[])
    
}

console.log(flatten([1, [2, [3, [4]], 5]]));
