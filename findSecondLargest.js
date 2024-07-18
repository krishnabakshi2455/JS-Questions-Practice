function findSecondLargest(arr) {
    let Largest = arr[0]
    let SecondLargest = arr[1];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > Largest) {
            SecondLargest = Largest
            Largest = arr[i]
        } else if (arr[i] > SecondLargest && arr[i] !== Largest) {
            SecondLargest = arr[i]
        }
    }
    return SecondLargest

}

console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7]));