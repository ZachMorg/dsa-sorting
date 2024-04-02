function merge(array1, array2) {
    let resultArr = [];
    let index1 = 0;
    let index2 = 0;
    console.log(array1);
    console.log(array2);
    while(true){
        if(array1[index1] === undefined && array2[index2] === undefined){
            return resultArr;
        }
        if(array1[index1] < array2[index2] || array2[index2] === undefined){
            resultArr.push(array1[index1]);
            index1 += 1;
        }
        else if(array2[index2] < array1[index1] || array1[index1] === undefined){
            resultArr.push(array2[index2]);
            index2 += 1;
        }
        else{
            resultArr.push(array1[index1]);
            resultArr.push(array2[index2]);
            index1 += 1;
            index2 += 1;
        }
    }
}

function mergeSort(arr) {
    if(arr[0] === undefined){
        return [];
    }
    let resultArr = [];
    for(let element of arr){
        resultArr.push([element]);
    }
    console.log(resultArr);
    while(resultArr.length > 1){
        let iterations = 0;
        for(let subArr = 0; subArr < resultArr.length; subArr++){
            iterations++;
            if(resultArr[subArr + 1] !== undefined){
                resultArr.splice(subArr, 2, merge(resultArr[subArr], resultArr[subArr + 1]));
            }
            console.log(iterations);
        }
        console.log(resultArr);
    }
    return resultArr[0];
}

module.exports = { merge, mergeSort};