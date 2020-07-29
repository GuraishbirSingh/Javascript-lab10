//storing references of elements in variables
let temperature = document.getElementById("Temperature");
let description = document.getElementById("Description");
let location1 = document.getElementById("location");
let CurrentWeather = {};

CurrentWeather.temperature = {
    unit: "celsius"
}
// setting latitude and longitude for barrie city
let latitude = 44.389355;
let longitude = -79.690331;

// getting weather data from api
let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=09ca21f95fe2e882270a487a604359d5`;

fetch(api)
    .then(function (response) {
        let Values = response.json();
        return Values;
    })
    .then(function (Values) {
        CurrentWeather.temperature.value = Math.floor(Values.main.temp - 273);
        CurrentWeather.description = Values.weather[0].description;
        CurrentWeather.city = Values.name;
        CurrentWeather.country = Values.sys.country;
    })
    .then(function () {
        displayWeather();
    });


// display Weather details
function displayWeather() {
    location1.innerHTML = `Weather in ${CurrentWeather.city}, ${CurrentWeather.country}`;
    temperature.innerHTML = `${CurrentWeather.temperature.value}°C`;
    description.innerHTML = `${CurrentWeather.description}`;

}