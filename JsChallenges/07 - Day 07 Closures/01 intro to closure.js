function  createFunction(){
    function multiplyByTwo(num){
        return num * 2
    }

    return multiplyByTwo
}


const generatedFunction = createFunction()
const result = generatedFunction(2)
console.log(result)

console.log(generatedFunction(5))