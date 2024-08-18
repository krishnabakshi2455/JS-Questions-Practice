function Righttrianglepatternprogram(n) {

    for (let row = 0; row <= n; row++) {
        // space 
        let str = "";
        for (let spaces = 0; spaces < n-row; spaces++) {
            str += ' '
        }
        console.log(str);

        // stars

        for (let stars = 0; stars < row; stars++) {
            str += '*'
        }
        console.log(str);


    }
    return 'end'
}
console.log(Righttrianglepatternprogram(5));

// function Righttrianglepatternprogram(n) {

//     for (let row = 0; row <= n; row++) {
//         // space 
//         let str = "";
//         for (let spaces = 0; spaces < row - 1; spaces++) {
//             str += ' '
//         }
//         console.log(str);

//         // stars

//         for (let stars = 0; stars < row; stars++) {
//             str += '*'
//         }
//         console.log(str);


//     }
//     return 'end'
// }
// console.log(Righttrianglepatternprogram(5));
