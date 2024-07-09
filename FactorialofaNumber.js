let num = parseFloat(prompt("enter the number"))

function FactorialOfANumber() {
   let collection = []
   for (let i = 1; i <= num; i++) {
    collection.push(i)
   }
    let end = 1
    collection.forEach((element)=>{
        end = end * element
    })
    let ans = `The factorial of ${num} is ${end}`
    return ans
}

console.log(FactorialOfANumber());