function makeTea(){
    const teaPromise = new Promise((resolve, reject) =>{
        setTimeout(()=> {
            // Simulate making tea
            const success = Math.random() > 0.5; // 50% chance of success
      
            if (success) {
              resolve("Tea is ready!"); // Yay, tea is ready!
            } else {
              reject("Tea making failed!"); // Oh no, something went wrong!
            } 
          }, 2000);
        
    
    })
    return teaPromise

}

// using the promise 

makeTea()
.then((message) =>{
    console.log(message)
})
.catch((error) => {
    console.error(error)
})