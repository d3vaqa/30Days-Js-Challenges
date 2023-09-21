function createCounter(){
    let count = 0 // private variable within the closure

    return {
        increment: function(){
            count++
        },
        decrement: function(){
            count--
        },
        getCount: function(){
            return count
        },
    }
}

// Create a counter object

counter = createCounter()

// Use the counter methods to modify and retrieve the count
console.log(counter.getCount())
counter.increment()
counter.increment()
counter.increment()

console.log(counter.getCount())

counter.decrement()
counter.decrement()
counter.decrement()

console.log(counter.getCount())
