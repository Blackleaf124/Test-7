function uniqueCharacters (string) {
    let array = string.split('')
    for(i=0; i<array.length; i++)
        if(array[i] === array[i + 1]){
            return false
        }
    return true
}

console.log(uniqueCharacters("Monday"))

//The runtime complexity is O(n)