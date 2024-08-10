function Pattern11(n) {
    let start = 1 
    for (let row = 0; row <= n; row++) {
        if (row % 2 === 0) {
            start=1
        }else{
            start=0
        }
        for (let j = 0; j <=row; j++) {
           console.log(start);
           start = 1-start            
        }
        console.log();
        
        
    }
}
console.log(Pattern11(5));
