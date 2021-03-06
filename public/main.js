let apiAccess = {};
let init = {};
let mymap = L.map('mapid').setView([0, 0], 2);

const ACCESS_TOKEN = 'pk.eyJ1Ijoic2hhaGFmYW1zIiwiYSI6ImNqZjhpYWw4ZzB4Zjg0MG1xcHJmMGNzbzkifQ.trPyzlCk3LMRErzOv-O-SA';
const KEY = 'e76868e4617fa9179c42aa2672b286b5';

const elms = document.querySelectorAll('button')
for (let i = 0; i < elms.length - 1; i++) {
    elms[i].addEventListener('click', () => {
        sendCity(elms[i].value);
    })
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: ACCESS_TOKEN
}).addTo(mymap);

const coordiInitMap = new City();
coordiInitMap.coordiDraw();

function sendCity(myCity) {
    apiReq(myCity);
    setViewCoordi(myCity);
}

function setViewCoordi(myCity) {
    const coordi = new City(myCity);
    coordi.coordiMap = coordiInitMap.getCoordiMap();
    coordi.setChosenCoordi();
}

function apiReq(myCity) {
    const requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=${KEY}`;
    $.ajax({
        url: requestURL,
        type: "GET",
        dataType: "json",
        success: (data) => {
            apiAccess = data;
            initWeather();
            displayWeather();
        }
    });
}

function initWeather() {
    init = new Weather();
    init.setInit(apiAccess);
}

function displayWeather() {
    init.print();
}

function zoomOut() {
    mymap.setView([0, 0], 2);
}