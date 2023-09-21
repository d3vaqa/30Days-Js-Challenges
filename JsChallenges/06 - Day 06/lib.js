
// sample quotes
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    }
];


const generateQuote = () =>{
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]

    document.getElementById("quoteText").textContent = randomQuote.text
    document.getElementById("quoteAuthor").textContent = "- " + randomQuote.author
}


document.getElementById('newQuote').addEventListener('click', generateQuote)

generateQuote()





function createFuntion(){
    function multiplyBy2(num){
        return num*2
    }

    return multiplyBy2
}



const generatedFunc = createFuntion()
const result = generatedFunc(2)