import {
  getWeatherInfo, getTemperature,
} from './app-logic';
import {
  enterCity, submitCity, toggleTemp,
} from './documentObjects';

document.addEventListener('DOMContentLoaded', () => {
  getWeatherInfo('Lagos');
});

submitCity.addEventListener('click', (e) => {
  e.preventDefault(e);
  const cityName = enterCity.value;
  getWeatherInfo(cityName);
  enterCity.value = '';
});

toggleTemp.addEventListener('click', (e) => {
  e.preventDefault(e);
  getTemperature();
});