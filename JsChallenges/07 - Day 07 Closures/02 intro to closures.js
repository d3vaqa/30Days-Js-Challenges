function outerFunction(x){
    function innerFunction(y){
        return x + y
    }

    // Return the inner function.
    return innerFunction
}

// Create two closures by invoking outerFunction with different values of x.
const closure1 = outerFunction(10)
const closure2 = outerFunction(5)

// Use the closures to add values to x.

const result1 = closure1(10)
const result2 = closure2(20)

console.log(result1)
console.log(result2)



// outerFunction is defined, which takes a parameter x. Inside outerFunction, there's an inner function innerFunction that takes a parameter y and returns the sum of x and y.

// outerFunction returns the innerFunction. This means that when you call outerFunction(x), it creates a closure where innerFunction still has access to the x value from its enclosing scope.

// Two closures (closure1 and closure2) are created by invoking outerFunction with different values for x. This means that closure1 "remembers" x as 10, and closure2 "remembers" x as 5.

// When you call closure1(3), it adds 3 to the x value it remembers (10) and returns 13. Similarly, when you call closure2(8), it adds 8 to the x value it remembers (5) and returns 13.