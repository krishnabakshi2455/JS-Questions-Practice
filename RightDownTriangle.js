function RightDownTriangle(n) {
    
    for (let row = 1; row <= n; row++) {
       // space
        let str = ''
        for (let space = 0; space < row-1; space++) {
           str += ' '
        }
        console.log(str);
        
        for (let stars = 0; stars < n-row; stars++) {
            str+='*'
        }
        console.log(str);
        
       // stars
        
    }
    return ' end'
}

console.log(RightDownTriangle(6));
