let arrayOfWords = ["hi", "hello"]

const findLongestWord = (array) => {
    count = 0
    for(i=0; i<array.length; i++){
        word = array[i].split('')
        if(word.length > count){
            count = word.length
        }
    }
    return count
}

console.log(findLongestWord(arrayOfWords))

//This function has a runtime complexity of O(n) because it only loops once so it will scale linearly.