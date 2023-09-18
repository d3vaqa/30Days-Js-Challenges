// calculate total costs

function calculateTotalCost(cart){
    return new Promise((resolve) =>{
        let totalCost = 0
        for (let item of cart){
            totalCost += item.price
        }
        resolve(totalCost)
    })
}




// Apply discount


function applyDiscountAsync(totalCost, threshol, discountAmount){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            if(totalCost > threshol){
                resolve(totalCost - discountAmount)
            }else{
                resolve(totalCost)
            }
        },1500)
    })
}


// Sample shopping 
const shoppingCart = [
    { name: "Toy 1", price: 10.99 },
    { name: "Toy 2", price: 8.99 },
    { name: "Toy 3", price: 12.99 },
  ];

// Define discount parameters
const discountThreshold = 30; // If total cost exceeds $30
const discountAmount = 5;     // Apply a $5 discount


calculateTotalCost(shoppingCart)
.then((totalCost) =>{
    console.log(`Total Cost: $${totalCost.toFixed(2)}`)
    return applyDiscountAsync(totalCost, discountThreshold, discountAmount);
})
.then((finalCost) =>{
    console.log(`Final Cost (with discount): $${finalCost.toFixed(2)}`);
})