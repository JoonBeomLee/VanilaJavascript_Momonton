const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "7bce461f3f6cb176e1c487ba3930e452";

function getWeatherIcon(iconCode){
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    const image = new Image();
    image.src = iconUrl;
    image.className = "js-weatherIcon";

    console.log(image)
    console.log(iconUrl);

    return image
}

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const iconCode = json.weather[0].icon;
        const icon = getWeatherIcon(iconCode);
        const place = json.name;

        const weatehrText = document.createElement("span");
        weatehrText.innerText = `${temperature} @ ${place}`;   
        weatehrText.className = "js-weatherText";

        weather.appendChild(icon);
        weather.appendChild(weatehrText);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();