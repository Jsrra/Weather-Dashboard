var city = document.querySelector("#floatingInputValue");
var searchBtn = document.querySelector(".search-Btn")
var apiKey = 'db145fe4344025343d0b1011a4ff4118'

searchBtn.addEventListener("click", function () {
    console.log(city.value)
    getWeather()
})
// var formSubmitHandler = function (event) {
//     event.preventDefault();

//     var cityInput = citySearch.value.trim();
// };
var lon = 121.8853
var lat = 37.3387
var getWeather = function () {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    fetch(apiUrl)
        .then(function (data) {
            if (data.ok) {
                data.json().then(function (data) {
                    console.log(data)
                });
            }
        })
        .catch(function (error) {
            alert('Unable to connect to openWeatherAPI');
        });
};
// formSubmitHandler.addEventListener('submit', formSubmitHandler); {
//     console.log("clicked")
// }

