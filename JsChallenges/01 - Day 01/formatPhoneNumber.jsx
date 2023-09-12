function formatPhoneNumber(numbers){
    if(numbers.length !== 10 || !numbers.every((number) => typeof number === 'number')){
        return "Invalid Input"
    }

    const areaCode = numbers.slice(0,3).join('')
    const firstThreeNumbers = numbers.slice(3,6).join('')
    const lastFourNumbers = numbers.slice(6).join('')


    return `(${areaCode}) ${firstThreeNumbers}-${lastFourNumbers}`
    
}


console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))