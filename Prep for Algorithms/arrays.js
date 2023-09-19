// Create an array named numbers containing five random numbers.

const numbers = [2,3,4,1,3,2]
// Add two more numbers to the end of the array.
numbers.push(9,8)
// numbers.push(8)

// console.log(numbers)

// Use a loop or array method to print all the numbers in the array.

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }



// Challenge 2: Objects


//     Create an object representing a student with the following properties:
//         name (string)
//         age (number)
//         grades (an array of numbers)

const student = {
    name: 'Hiro',
    age: 25,
    grade: [8,9,9,10,10],
    average: function () {
        const sum = this.grade.reduce((accumulator, currentValue) => accumulator + currentValue, 0 )
        const avg = sum / this.grade.length
        return avg
    },

    subjects: ['C sharp', 'JS', 'React'],

}


//     Add a method to the object that calculates the average grade of the student.

//     Add another property called subjects (an array of strings) that lists the subjects the student is studying.

//     Create a function that prints out the student's information, including name, age, average grade, and the list of subjects.


console.log(student.average())


