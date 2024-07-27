let num = 5;

for (let row = 1; row <= num; row++) {
    let str = '';

    for (let col = 1; col <= num - row + 1; col++) {
        str += '* '

    }
    console.log(str);


}
