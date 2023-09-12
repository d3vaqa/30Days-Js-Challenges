function arrayIntersection(array1, array2){
    const result = []
    for(const element of array1){
        if(array2.includes(element)){
            result.push(element)
        }
    }


    return result
}

console.log(arrayIntersection([1,2,4,5,6], [6,3,2,5,7]))