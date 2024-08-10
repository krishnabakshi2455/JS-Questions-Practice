function Pattern10(n) {
    for (let row = 0; row <= 2*n-1; row++) {
        // stars
        let str = ''
        if (row > n) {
            for (let stars = 0; stars <= 2 * n - row; stars++) {
                str += '*'
            }
        } else {
            for (let stars = 0; stars <= row; stars++) {
                str += '*'
            }
        }


        console.log(str)

    }
}
console.log(Pattern10(5));
