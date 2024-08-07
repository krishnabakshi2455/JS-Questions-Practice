function DimondPattern(num) {
    for (let row = 0; row < num; row++) {
        let str = ''
        // space
        for (let space = 2; space < num - row + 1; space++) str += ' '
        // stars
        for (let stars = 0; stars < 2 * row + 1; stars++) str += '*'
        console.log(str);
    }
    for (let row = 0; row < num; row++) {
        let str = ''
        // space 
        for (let space = 0; space < row; space++) str += ' '
        // stars
        for (let stars = 0; stars < 2 * num - (2 * row + 1); stars++)  str += '*'
        console.log(str);
    }
    return ''
}
console.log(DimondPattern(5));
