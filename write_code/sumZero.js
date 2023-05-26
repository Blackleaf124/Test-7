numsArr = [0, 1, 2, 3, 4, 5, 6]

function sumZero (array) {
    for(i=0; i<array.length; i++)
        for(k=1; k<array.length; k++)
            if(array[i] + array[k] === 0){
                return true
            }
    return false
}

console.log(sumZero(numsArr));

//The runtime complexity quadratic and is represented as O(n^2)