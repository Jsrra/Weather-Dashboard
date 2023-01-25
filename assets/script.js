var city = document.querySelector("#floatingInputValue");
var searchBtn = document.querySelector(".search-Btn")
var cityNameEl = document.querySelector("#city-name")
var tempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidityEl = document.querySelector("#humidity")
var todaysDate = document.querySelector("#today")
var currentIcon = document.querySelector("#current-icon")

var apiKey = 'db145fe4344025343d0b1011a4ff4118'

searchBtn.addEventListener("click", function () {
    console.log(city.value)
    getWeather(city.value)
})

var getWeather = function (city) {
    var apiUrlCoord = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

    fetch(apiUrlCoord)
        .then(function (data) {
            if (data.ok) {
                data.json().then(function (data) {
                    console.log(data)
                    cityNameEl.textContent = data.name
                    tempEl.textContent = "Temp: " + data.main.temp + "°F"
                    windEl.textContent = "Wind: " + data.wind.speed + " MPH"
                    humidityEl.textContent = "Humidity: " + data.main.humidity + "%"
                    var lat = data.coord.lat
                    var lon = data.coord.lon
                    forecastFiveDay(lat, lon)
                    currentIcon.textContent = data.weather.icon
                });
            }

        })
        .catch(function (error) {
            alert('Unable to connect to openWeatherAPI');
        });

};

function forecastFiveDay(lat, lon) {

    var fiveDayApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

    fetch(fiveDayApiUrl)
        .then(function (data) {
            if (data.ok) {
                data.json().then(function (data) {
                    console.log(data)
                });
            }

        })

}

// $("#today").text(dayjs().format("dddd, MMMM D"))

todaysDate.textContent = dayjs().format("(M/D/YYYY)")

// formSubmitHandler.addEventListener('submit', formSubmitHandler); {
//     console.log("clicked")
// }

// var formSubmitHandler = function (event) {
//     event.preventDefault();

//     var cityInput = citySearch.value.trim();
// };
