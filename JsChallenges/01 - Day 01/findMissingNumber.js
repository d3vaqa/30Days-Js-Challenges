function findMissingNumber(array, n){
    const expectedSum = (n*(n + 1 )) / 2
    const actualSum = array.reduce((sum, num) => sum + num, 0)

    return expectedSum 
    console.log(expectedSums)

}

console.log(findMissingNumber([1, 2, 4, 5], 5))


const array = [1, 2, 4, 5]
const actualSum = array.reduce((sum, num) => sum + num, 0)

console.log(actualSum)
