import axios from 'axios';
import appid from '../api-config';
import * as constants from '../constants/constants';

export const getWeather = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;
  
  return async (dispatch) => {
    dispatch({type: constants.GET_WEATHER_START});
    try {
      const result = await axios.get(url);
      const data = result.data;  
      dispatch({
        type: constants.GET_WEATHER_SUCCESS,
        data
      });
    } catch (error) {
      dispatch({
        type: constants.GET_WEATHER_ERROR,
      });
    }
  };
};