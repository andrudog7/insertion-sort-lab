function findMinAndRemove(array){
    let min = array[0]
    for (let i = 0;i<array.length - 1;i++) {
        if (array[i] < min) {
            min = array[i]
            array.splice(i, 1)
        }
    }
    return min
}

function selectionSort(array){
    let finalArray = []
    finalArray.push(findMinAndRemove(array))
    return finalArray
}
