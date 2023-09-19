function fetchWeatherData(city){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const weatherData = {
                city: city, 
                temperature: Math.floor(Math.random() * 30 + 10)
            }
            resolve(weatherData)
        },2000
        )
        
    })
}



// function to display temperature
function displayTemperature(weatherData){
    console.log(`Temperature in ${weatherData.city}: ${weatherData.temperature}°C`);
    
}

// Simulated user input (city name)
const userInput = "Melbourne"; // You can change this to any city

// Fetch weather data and display the temperature

fetchWeatherData(userInput)

.then((weatherData) =>{
    displayTemperature(weatherData)
})
.catch((error)=>{
    console.log(error)
})

