function formatPhoneNumber(digits){

    if(digits.length !== 10 || !digits.every(digit => typeof digit === 'number')){
        return 'Invalid input'
    }

    const areaCode = digits.slice(0,3).join('')
    const firestThreeDigits = digits.slice(3,6).join('')
    const lastFourDigit = digits.slice(6).join('')


    return `(${areaCode}) ${firestThreeDigits} ${lastFourDigit}`
}


console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))