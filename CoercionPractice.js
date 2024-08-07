// console.log("2" - 1);
// console.log("2" + 2);
// console.log("2" * 2);
// console.log("25" / 5);
// console.log("36" % 6);
// console.log("xyz" / 5); // xyz turn into NAN(not a number) and anything with NAN is NAN
// console.log(12 + null); // null converts into 0

// console.log("12" + null); // if the operator is + and one argument is string then the other will turn into string aswell
// console.log(10 + undefined); //undefind turn into NaN
// console.log("10" + undefined); // if the operator is + and one argument is string then the other will turn into string aswell

// console.log(undefined + null); //undefind turn into NaN


// console.log(null-false); // null truns into 0 and false turns into 0 aswell
// console.log(null + false); // null truns into 0 and false turns into 0 aswell
// console.log(true + false); // true turns into one false turn innto 0
// console.log(false - true); // true turns into one false turn innto 0
// console.log("5" * true);  // true turns into one and 5 string turns into 5 number

// let arr = [1, 2, 3, true, false]


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + 1);
//     // because true turn into 1 and false turns into 0
// }
// let obj1 = {
//     name: "John",
//     age: 30,
//     toString() {
//         return `My name is ${this.name} and I am ${this.age} years old`
//     },
//     valueOf() {
//         return this.age
//     }
// }
// console.log(obj1.toString());

// console.log(obj1 - "10");
// console.log(obj1 - "kb");

// let obj2={}

// console.log(obj2-100);
// Conversion Failure: For objects, the default conversion does not yield a meaningful numeric value.An empty object({}) doesn't have a meaningful numeric representation, so it cannot be converted to a number directly.

// Resulting NaN: Because the conversion of the object to a primitive numeric value fails, the subtraction operation results in NaN


// let obj3 = {
//     name: "John",
//     age: 30,
//     toString() {
//         return "krishna"
//     },
//     valueOf() {
//         return this.age
//     }
// }
// console.log(obj3 - "20");
// console.log(obj3-"krishna");


