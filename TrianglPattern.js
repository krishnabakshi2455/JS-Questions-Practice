let num = 5

for (let row = 0; row < num; row++) {
    let str = ''
    // space
    for (let space = 0; space < num - row + 1; space++) {
        str += ' '
    }
    //star
    for (let star = 0; star < 2 * row + 1; star++) {
        str += '*'
    }
    console.log(str);

}