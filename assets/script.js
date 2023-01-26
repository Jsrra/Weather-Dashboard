var city = document.querySelector("#floatingInputValue");
var searchBtn = document.querySelector(".search-Btn")
var cityNameEl = document.querySelector("#city-name")
var tempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidityEl = document.querySelector("#humidity")
var todaysDate = document.querySelector("#today")
var currentIcon = document.querySelector("#current-icon")
var pastSearchEl = document.querySelector("#past-searched-cities")

//5 Day Forecast
var temp2 = document.querySelector("#temp2")
var temp3 = document.querySelector("#temp3")
var temp4 = document.querySelector("#temp4")
var temp5 = document.querySelector("#temp5")
var temp6 = document.querySelector("#temp6")
var wind2 = document.querySelector("#wind2")
var wind3 = document.querySelector("#wind3")
var wind4 = document.querySelector("#wind4")
var wind5 = document.querySelector("#wind5")
var wind6 = document.querySelector("#wind6")
var humidity2 = document.querySelector("#humidity2")
var humidity3 = document.querySelector("#humidity3")
var humidity4 = document.querySelector("#humidity4")
var humidity5 = document.querySelector("#humidity5")
var humidity6 = document.querySelector("#humidity6")
var icon2 = document.querySelector("#icon2")
var icon3 = document.querySelector("#icon3")
var icon4 = document.querySelector("#icon4")
var icon5 = document.querySelector("#icon5")
var icon6 = document.querySelector("#icon6")
// Dates
var date = dayjs()

var tommorowEl = document.querySelector("#tommorow")
var dayAfterTommorowEl = document.querySelector("#dayAfterTommorow")
var dayAfterTheDayAfterTommorowEl = document.querySelector("#dayAfterTheDayAfterTommorow")
var dayAfterTheDayAfterTheDayAfterTommorowEl = document.querySelector("#dayAfterTheDayAfterTheDayAfterTommorow")
var dayAfterTheDayAfterTheDayAfterTheDayAfterTommorowEl = document.querySelector("#dayAfterTheDayAfterTheDayAfterTheDayAfterTommorow")

var tommorow = date.add(1, "day")
var dayAfterTommorow = date.add(2, "day")
var dayAfterTheDayAfterTommorow = date.add(3, "day")
var dayAfterTheDayAfterTheDayAfterTommorow = date.add(4, "day")
var dayAfterTheDayAfterTheDayAfterTheDayAfterTommorow = date.add(5, "day")

todaysDate.textContent = dayjs().format("(M/D/YYYY)")
tommorowEl.textContent = tommorow.format("(M/D/YYYY)")
dayAfterTommorowEl.textContent = dayAfterTommorow.format("(M/D/YYYY)")
dayAfterTheDayAfterTommorowEl.textContent = dayAfterTheDayAfterTommorow.format("(M/D/YYYY)")
dayAfterTheDayAfterTheDayAfterTommorowEl.textContent = dayAfterTheDayAfterTheDayAfterTommorow.format("(M/D/YYYY)")
dayAfterTheDayAfterTheDayAfterTheDayAfterTommorowEl.textContent = dayAfterTheDayAfterTheDayAfterTheDayAfterTommorow.format("(M/D/YYYY)")

var apiKey = 'db145fe4344025343d0b1011a4ff4118'

searchBtn.addEventListener("click", function () {
    console.log(city.value)
    getWeather(city.value)
    var fc = document.querySelector("#fc")
    fc.classList.remove("hide")
    saveToStorage(city.value)
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
                    currentIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Sky"></img>`


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
                    // console.log(data.list[0])
                    // console.log(data.list[1])
                    // console.log(data.list[2])
                    // console.log(data.list[3])
                    // console.log(data.list[4])

                    temp2.textContent = "Temp: " + data.list[4].main.temp + "°F"
                    wind2.textContent = "Wind: " + data.list[4].wind.speed + " MPH"
                    humidity2.textContent = "Humidity: " + data.list[4].main.humidity + "%"
                    icon2.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png" alt="Sky"></img>`

                    temp3.textContent = "Temp: " + data.list[12].main.temp + "°F"
                    wind3.textContent = "Wind: " + data.list[12].wind.speed + " MPH"
                    humidity3.textContent = "Humidity: " + data.list[12].main.humidity + "%"
                    icon3.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png" alt="Sky"></img>`

                    temp4.textContent = "Temp: " + data.list[20].main.temp + "°F"
                    wind4.textContent = "Wind: " + data.list[20].wind.speed + " MPH"
                    humidity4.textContent = "Humidity: " + data.list[20].main.humidity + "%"
                    icon4.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png" alt="Sky"></img>`

                    temp5.textContent = "Temp: " + data.list[28].main.temp + "°F"
                    wind5.textContent = "Wind: " + data.list[28].wind.speed + " MPH"
                    humidity5.textContent = "Humidity: " + data.list[28].main.humidity + "%"
                    icon5.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png" alt="Sky"></img>`

                    temp6.textContent = "Temp: " + data.list[36].main.temp + "°F"
                    wind6.textContent = "Wind: " + data.list[36].wind.speed + " MPH"
                    humidity6.textContent = "Humidity: " + data.list[36].main.humidity + "%"
                    icon6.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png" alt="Sky"></img>`
                });
            }

        })

}
var savedCities = JSON.parse(localStorage.getItem("saved-city")) || []
function saveToStorage(cityName) {
    savedCities.push(cityName)
    localStorage.setItem("saved-city", JSON.stringify(savedCities))
}
function createButtons() {
    for (i = 0; i < savedCities.length; i++) {
        var newButton = document.createElement("button")
        newButton.textContent = savedCities[i]
        newButton.addEventListener("click", function () {
            console.log(this.textContent)
            getWeather(this.textContent)
            var fc = document.querySelector("#fc")
            fc.classList.remove("hide")
        })
        pastSearchEl.append(newButton)
    }

}

createButtons();

