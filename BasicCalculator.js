let first = parseFloat(prompt("enter the first number"))
let second = parseFloat(prompt("enter the second number"))
let operator = prompt("enter the sign")

function BasicCalculator(first, second, opera) {
    if (opera === "+") { return first + second }
    else if (opera === "-") { return first - second }
    else if (opera === "*") { return first * second }
    else if (opera === "/") { return first / second }
    else if (opera === "%") { return first % second }
}

console.log(BasicCalculator(first, second, operator));