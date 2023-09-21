function createPerson(firstName, lastName){
    // private variables 
    const _firstName = firstName
    const _lastName = lastName

    // private function for generating full name
    function getFullName(){
        return `${_firstName} ${_lastName}`
    }


    return {
        getFirstName: function(){
            return _firstName
        },
        getLastName: function(){
            return _lastName
        },
        getFullName: getFullName, // Expose the private function
        greet: function(){
            console.log(`Hello, my name is ${getFullName()}.`);
        },
    }

}


const person = createPerson('Hiro', 'Aqa')
const person2 = createPerson('Gull', 'Aqa')


console.log(person.getFirstName())
console.log(person.getLastName())
console.log(person.getFullName())
person.greet()



console.log(person2.getFirstName())
console.log(person2.getLastName())
console.log(person2.getFullName())
person2.greet()