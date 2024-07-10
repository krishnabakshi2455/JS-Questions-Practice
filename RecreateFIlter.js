// Array.prototype.customfilter= function(callback){
//     const newArray = [];

//     for (let i = 0; i < this.length; i++) {

//         if (callback(this[i], i, this)) {
//             newArray.push(this[i])
//         }
//     }

//     return newArray
// };

// const numbers = [1,2,3,4,5,46,1,2,3]

// const iseven = (num)=> num % 3 === 0

// const evennumber = numbers.customfilter(isequal)

// console.log(evennumber);

function customFilter(arr, callback) {
    const filteredArray = [];
    for (const item of arr) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

// Example usage:
const ages = [32, 33, 16, 40];
const result = customFilter(ages, (age) => age >= 18);

console.log(result); 