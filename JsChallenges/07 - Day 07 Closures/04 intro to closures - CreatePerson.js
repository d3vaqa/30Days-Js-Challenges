function createPerson(name, age){
    // private variables within the scope of createPerson function
    let _name = name
    let _age = age

    // public Methods that can access private variables
    return {
        getName: function(){
            return _name
        },
        getAge: function(){
            return _age
        },
        celebrateBirthday: function(){
            _age++
        },
        changeName: function(newName){
            _name = newName
            
        }
    }
}

// create a person object wiht privae data and methods
const person1 = createPerson('Hiro', 26)
console.log(person1.getName())
console.log(person1.getAge())

