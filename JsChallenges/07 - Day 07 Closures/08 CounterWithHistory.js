function createCounterWithHistory(){
    let count = 0
    const history = [count]
    let currentIndex = 0

    function getCurrentCount(){
        return count
    }
    
    function increment(){
        count++
        history.splice(currentIndex + 1)
        history.push(count)
        currentIndex = history.length - 1
    }


    function decrement(){
        count--
        history.splice(currentIndex + 1)
        history.push(count)
        currentIndex = history.length - 1
    }



    function undo(){
        if(currentIndex > 0){
            currentIndex--
            count = history[currentIndex]
        }
    }

    function redo(){
        if(currentIndex < history.length - 1){
            currentIndex++
            count = history[currentIndex]
        }
    }



    return {
        getCurrentCount,
        increment,
        decrement,
        undo,
        redo
    };
}



const counter = createCounterWithHistory();

// Interact with the counter
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCurrentCount());

counter.decrement();
counter.decrement();
console.log(counter.getCurrentCount()); 
counter.undo()
console.log(counter.getCurrentCount()); 
counter.redo()
console.log(counter.getCurrentCount()); 
