function HollowSquarepattern(n) {

    for (let row = 0; row <  n; row++) {
        for (let j = 0; j <= n; j++) {
            if (row === 0 || row === n - 1) {
                process.stdout.write("*");

            }
            else if (j === 0 || j === n - 1) {
                process.stdout.write("*");
            }
            else {
                process.stdout.write(" ");
            }
        }
        console.log()
    }
}

console.log(HollowSquarepattern(5));
