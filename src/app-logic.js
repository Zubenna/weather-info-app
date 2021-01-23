import { currentIcon, waitMsg, errorInfo } from './documentObjects';

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
  } catch(err){
    errorInfo.innerText = 'err';
  }
  
}