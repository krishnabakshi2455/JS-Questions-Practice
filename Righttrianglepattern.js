function Righttrianglepattern(n) {
    for (let row = 0; row < n; row++) {
      // space
      let str = ''
    for (let space = 0; space < n-row; space++) {
        str += ' '
    }    
    // stars
    for (let stars = 0; stars < row; stars++) {
        str += "*"
    }
    console.log(str);
    }
}
console.log(Righttrianglepattern(5));

