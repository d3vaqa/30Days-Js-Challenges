// Challenge: Create a Temperature Converter

//     Create an object called temperatureConverter.

//     Inside temperatureConverter, have two properties: _celsius and _fahrenheit.

//     Implement "get" and "set" methods for both Celsius and Fahrenheit properties. These methods should allow you to get the temperature in Celsius or Fahrenheit and set the temperature in one scale to automatically update the other scale.

//     Use the following conversion formulas:
//         Celsius to Fahrenheit: F = (C * 9/5) + 32
//         Fahrenheit to Celsius: C = (F - 32) * 5/9

//     Make sure that when you set the temperature in either Celsius or Fahrenheit, it updates the other temperature scale as well.

//     Test your temperatureConverter by setting temperatures in one scale and getting them in the other.


const temperatureConverter = {
    _celsius: 0,
    _fahrenheit: 32,


    get celsius(){
        return this._celsius
    },



    set celsius(value){
        this._celsius = value
        this._fahrenheit = (value * 9 / 5 + 32)

    },




    get fahrenheit(){
        return this._fahrenheit
    },


    set fahrenheit( value){
        this._fahrenheit = value
        this.celsius = (value - 32 * 5/9)
    }



}



    // testing

temperatureConverter.celsius = 23;

console.log("Celsius:", temperatureConverter.celsius);
console.log("Fahrenheit:", temperatureConverter.fahrenheit);


temperatureConverter.fahrenheit = 80;


console.log("Celsius:", temperatureConverter.celsius);
console.log("Fahrenheit:", temperatureConverter.fahrenheit);


