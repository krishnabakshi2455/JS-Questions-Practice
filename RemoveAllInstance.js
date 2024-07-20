function removeallinstance(arr,value) {
    let arr2 = []
    let arr3 = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            arr2.push(arr[i])
        }else{
            arr3.push(arr[i])
        }
        
    }

    return [arr2,arr3]
    
}

console.log(removeallinstance([1,2,3,4,5,6],5));