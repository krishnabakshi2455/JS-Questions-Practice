function Lefttrianglestarpattern(n) {
    let str=''
    for (let row = 0; row <= n; row++) {
        for (let col = 0; col <=row; col++) {
            str += '*'
            
        }
        console.log(str);
        
        
    }
    return 'end'
}
console.log(Lefttrianglestarpattern(5));
