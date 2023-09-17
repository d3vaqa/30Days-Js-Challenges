function FetchProduct(productID){
    const products = {
        1: "Laptop",
        2: "Phone",
        3: "Headphones",
    }
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const product = products[productID]

            if(product){
                resolve(`You bought a ${product}!`)
            }else{
                reject(`Product not found`)
            }

        }, 2000)
    })
}


const productID = 2
FetchProduct(productID)
.then((message) =>{
    console.log(message)
})
.catch((error) =>{
    console.error(error)
})

