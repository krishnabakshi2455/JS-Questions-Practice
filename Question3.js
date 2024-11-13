/*
Create a function to remove all occurrences of a specified value from an array.

Example: Given [1, 2, 3, 4, 2, 5] and 2, the function should return [1, 3, 4, 5].

*/

function occurrences(params,params2) {
    let filteredarr = []

    params.forEach(element => {
        if (element !== params2) {
            filteredarr.push(element)
        }else{
            console.log("element is equal to constant");
        }  
    });
    return filteredarr
}

console.log(occurrences([1, 2, 3, 4, 2, 5],2));
