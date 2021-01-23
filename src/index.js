import { getWeatherInfo } from './app-logic';
import { enterCity, submitCity} from './documentObjects';



submitCity.addEventListener('click', (e) => {
    e.preventDefault(e);
    const cityName = enterCity.value;
    console.log('test 1');
    // if (e.keyCode === 13) {
        getWeatherInfo(cityName);
        console.log('test 2');
    // }
});