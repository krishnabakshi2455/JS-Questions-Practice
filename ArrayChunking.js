

function chunkArray(arr, size) {

    // console.log(arr,'==========',size);
    let result = []
    let smallarr = []

    for (let i = 0; i < arr.length; i++) {
        smallarr.push(arr[i])
        if ((i + 1) % size == 0) {
            result.push(smallarr)
            smallarr=[]
        }

    }
    if (smallarr.length>0) {
        result.push(smallarr)
    }


    return result

}


console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
