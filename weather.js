$(function () {

  let apiKey = "9361bd03ec7175e9eea92fdf7a717518"
  let url = "http://api.openweathermap.org/data/2.5/weather?q=London";

  $.get(url + "&appid=" + apiKey)
    .done((response) => {
      temperatureConversion(response.main.temp)
    })

  function temperatureConversion(kelvin) {
    //create celsius and fahrenheit
    let degreeCelsius = kelvin - 273.15
    let degreeCelsiusInt = Math.floor(degreeCelsius)
    let degreeFahrenheit = degreeCelsius * 1.8 + 32
    let degreeFahrenheitInt = Math.floor(degreeFahrenheit)

    $('#temp').html(`<p> ${degreeCelsiusInt}&#176 Celsius, ${degreeFahrenheitInt}&#176 Fahrenheit </p>`)

  }


})



//doing this without jQuery
// fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=9361bd03ec7175e9eea92fdf7a717518")
//   .then((ourObj) => {
//     return ourObj.json()
//   })
//   // kevin is our jsonObject that we got from ourObj.json()
//   .then((kelvin) => {
//     let degreeCelsius = kelvin.main.temp - 273.15
//     let degreeCelsiusInt = Math.floor(degreeCelsius)
//     let degreeFahrenheit = degreeCelsius * 1.8 + 32
//     let degreeFahrenheitInt = Math.floor(degreeFahrenheit)

//     $('#temp').html(`<p> ${degreeCelsiusInt}&#176 Celsius, ${degreeFahrenheitInt}&#176 Fahrenheit </p>`)
//   })
