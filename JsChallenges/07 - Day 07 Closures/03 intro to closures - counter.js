
function createCounter(){
    let count = 0;

    function increment(){
        count++
        return count
    }

    return increment
}

// Create two independent counters.
const counter1 = createCounter()
const counter2 = createCounter()

console.log(counter1())
console.log(counter1())
console.log(counter1())

console.log(counter2())
console.log(counter2())
console.log(counter2())
