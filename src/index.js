import { getWeatherInfo, getTemperature } from './app-logic';
import { enterCity, submitCity, toggleTemp} from './documentObjects';



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