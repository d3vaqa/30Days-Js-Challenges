// Simulated function to fetch book data from an online bookstore's API

const fetchBookData = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const bookData = [
                { title: "Book 1", author: "Author 1" },
                { title: "Book 2", author: "Author 2" },
                { title: "Book 3", author: "Author 3" },
            ]
            resolve(bookData)
        }, 2000)
    })
}



// function to display the book title

const displayBookTitle = (books) =>{
    console.log(`Available Books:`)
    books.forEach(book => {
        console.log(`- ${book.title} by ${book.author}`)        
    })

}

// Fetch book data and display titles

fetchBookData()
.then((bookdata) =>{
    displayBookTitle(bookdata)
})
.catch((error) =>{
    console.log(error)
})
