function bubbleSort(array) {
    for(let i = array.length-1; i >= 0; i--){
        for(let j = 0; j < i; j++){
            if(array[j] > array[j+1]){
                let placeholder = array[j];
                array[j] = array[j+1];
                array[j+1] = placeholder;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;