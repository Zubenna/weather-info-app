import { getWeatherInfo, getTemperature } from './app-logic';
import { enterCity, submitCity, toggleTemp} from './documentObjects';



submitCity.addEventListener('click', (e) => {
  e.preventDefault(e);
  const cityName = enterCity.value;
  console.log('test 1');
  getWeatherInfo(cityName);
  console.log('test 2');
});

toggleTemp.addEventListener('click', (e) => {
  e.preventDefault(e);
  getTemperature();
});