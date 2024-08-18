function LeftDownTriangle(n) {
    
    for (let row = 0; row <=n; row++) {
        
        let str = ''

        for (let stars = 0; stars < n-row; stars++) {
            str +='*'
            
        }
        console.log(str);
        
        
    }
    return 'end'
}
console.log(LeftDownTriangle(5));
