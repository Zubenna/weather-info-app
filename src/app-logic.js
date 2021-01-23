import { 
  currentIcon, waitMsg, errorInfo, enterCity, tempSymbol,
  tempDisplay, countryFlag, toggleTemp,
} from './documentObjects';


let temp = '';
let state = false;
export async function getWeatherInfo(city) {
  const api_key = '4c726c2ad8e25995fa54253e43f9b966';
  waitMsg.innerText = 'Loaading';
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`, {mode: 'cors'});
    const weatherdata = await response.json();
    waitMsg.innerText = '';
    console.log( weatherdata);
    const icon = weatherdata.weather[0].icon;
    currentIcon.innerHTML = `<img src="./icons/${icon}.png">`;
    // const countryCode = weatherdata.sys.country;
    getCountyFlag(weatherdata.sys.country);
    temp = Math.floor(weatherdata.main.temp - 273);
    tempDisplay.innerText = `${temp}\u00B0`;
    tempSymbol.innerText = 'C';
    errorInfo.innerText = '';
    // setTemperature();
  } catch(err) {
      if(enterCity.value === '') {
        errorInfo.innerText = 'Nothing to display, Enter city name';
      }
  }
}

const getCountyFlag = (cCode) => {
  countryFlag.innerHTML = `<img src="https://www.countryflags.io/${cCode}/flat/64.png">`;
}

export const getTemperature = () => {
    state = !state;
    let tValue = tempDisplay.innerText;
    let targetValue = Number(tValue.slice(0, (tValue.length - 1)));
  if (state) {
    let fTemp = ((targetValue * 9)/5 + 32).toFixed(2);
    tempDisplay.innerText = `${fTemp}\u00B0`;
    tempSymbol.innerText = 'F';
    toggleTemp.innerText = 'See temp in C';
  } else {
    let cTemp = ((targetValue - 32) * 5.0/9).toFixed(2);
    tempDisplay.innerText = `${cTemp}\u00B0`;
    tempSymbol.innerText = 'C';
    toggleTemp.innerText = 'See temp in F';
  }
}