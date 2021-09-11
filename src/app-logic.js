import {
  currentIcon, waitMsg, errorInfo, enterCity, tempSymbol, clock, currentCity, tempFeels,
  tempDisplay, countryFlag, toggleTemp, currentCountry, weatherDescrib,
  humidity, cityLon, cityLat, windSpeed,
} from './documentObjects';

let temp = '';
let state = false;

const getDateTime = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  clock.innerText = `Local Time: ${dateTime}`;
};

const getCountyFlag = (cCode) => {
  countryFlag.innerHTML = `<img src="https://www.countryflags.io/${cCode}/flat/64.png">`;
};

const dispCountryInfo = (city, countryCode) => {
  currentCity.innerText = `${city}, `;
  currentCountry.innerText = countryCode;
};

const displayFeelsInfo = (feels, description, humid) => {
  tempFeels.innerText = `Feels Like: ${feels}\u00B0C`;
  weatherDescrib.innerText = ` ${description}`;
  humidity.innerText = ` Humidity: ${humid}%`;
};

const displaySunInfo = (lon, lat, speed) => {
  cityLon.innerText = `Lon: ${lon}`;
  cityLat.innerText = `Lat: ${lat}`;
  windSpeed.innerText = `Wind Speed: ${speed}M/s`;
};

function startTime() {
  setInterval(() => {
    getDateTime();
  }, 500);
}

export async function getWeatherInfo(city) {
  const apiKey = '8932ba937e10419d1dd1c3d0900ef449';
  waitMsg.innerText = 'Loading.....';
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: 'cors' });
    const weatherdata = await response.json();
    waitMsg.innerText = '';
    const { icon } = weatherdata.weather[0];
    currentIcon.innerHTML = `<img src="./icons/${icon}.png">`;
    getCountyFlag(weatherdata.sys.country);
    temp = Math.floor(weatherdata.main.temp - 273);
    tempDisplay.innerText = `${temp}\u00B0`;
    tempSymbol.innerText = 'C';
    errorInfo.innerText = '';
    toggleTemp.style.display = 'block';
    dispCountryInfo(weatherdata.name, weatherdata.sys.country);
    const feels = Math.floor(weatherdata.main.feels_like - 273);
    displayFeelsInfo(feels, weatherdata.weather[0].description, weatherdata.main.humidity);
    displaySunInfo(weatherdata.coord.lon, weatherdata.coord.lat, weatherdata.wind.speed);
    startTime();
  } catch (err) {
    if (enterCity.value === '') {
      errorInfo.innerText = 'Nothing to display, Enter city name';
    }
  }
}

export const getTemperature = () => {
  state = !state;
  const tValue = tempDisplay.innerText;
  const targetValue = Number(tValue.slice(0, (tValue.length - 1)));
  if (state) {
    const fTemp = ((targetValue * 9) / 5 + 32).toFixed(2);
    tempDisplay.innerText = `${fTemp}\u00B0`;
    tempSymbol.innerText = 'F';
    toggleTemp.innerText = 'See temp in C';
  } else {
    const cTemp = (((targetValue - 32) * 5.0) / 9).toFixed(2);
    tempDisplay.innerText = `${cTemp}\u00B0`;
    tempSymbol.innerText = 'C';
    toggleTemp.innerText = 'See temp in F';
  }
};