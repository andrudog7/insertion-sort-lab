function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    for (let i = 0;i<array.length;i++) {
        if (array[i] < min) {
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function selectionSort(array){
    let finalArray = []
    while (array.length > 0) {
      finalArray.push(findMinAndRemove(array))
    }
    return finalArray
}
