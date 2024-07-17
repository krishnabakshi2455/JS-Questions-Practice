Array.prototype.customFilter = function (arr, callback) {
    const filteredArray = [];
    for (const item of arr) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

const ages = [32,65,65,42,18,9,6,5,11,500,]
const result = ages.customFilter(ages, (age) => age <= 18);
console.log(result);
 