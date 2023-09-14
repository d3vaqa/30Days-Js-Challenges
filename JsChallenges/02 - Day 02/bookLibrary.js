const bookLibrary  = {
    _books: [],


    get books(){
        return this._books
    },

    set addBook(book){
        if(typeof book === 'object' && book.title && book.author && book.genre){
            this._books.push(book)
            console.log(`new Book Added: "${book.title}" by ${book.author}`)
        }else{
            console.log(`Invalid Book information`)
        }

    },


    // remove book by title

    set removeBook(title){
        const index = this._books.findIndex((book) => book.title === title)
            if (index !== -1){
                const removeBook = this._books.splice(index, 1)[0]
                console.log(`Removed book: "${removeBook.title}" by ${removeBook.author}`)
            }
            else{
                console.log('Book not found')
            }
    },


    // find books by author name

    set findBookByAuthor(author){
        const authorBooks = this._books.filter((book) => book.author === author)
        if(authorBooks.length > 0 ){
            console.log(`Books by ${author}` ,  authorBooks)
        }else{
            console.log(`No book found by`, author)
        }
    },


    set findBookByGenre(genre){
        genreBooks = this._books.filter((book) => book.genre === genre)
        if(genreBooks.length > 0 ){
            console.log(`Books in ${genre}` ,  genreBooks)
        }else{
            console.log(`No books found in the genre "${genre}".`);
        }
    },





}







// Adding Fantasy books
bookLibrary.addBook = { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' }
bookLibrary.addBook = { title: 'The Name of the Wind', author: 'Patrick Rothfuss', genre: 'Fantasy' }

// Adding Fiction books
bookLibrary.addBook = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' }
bookLibrary.addBook = { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' }

// Adding Dystopian books
bookLibrary.addBook = { title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian' }
bookLibrary.addBook = { title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Dystopian' }

// Adding Classic books
bookLibrary.addBook = { title: 'Moby-Dick', author: 'Herman Melville', genre: 'Classic' }
bookLibrary.addBook = { title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Classic' }


console.log(bookLibrary._books)

// find book by author

bookLibrary.findBookByAuthor = 'Aldous Huxley'
//find book by genre

bookLibrary.findBookByGenre = 'Classic';