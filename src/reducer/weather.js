import * as constants from '../constants/constants';

const defaultState = {
  weather: '',
  getWeatherError: false,
  loading: false
};

export default (state = defaultState, action) => {
  const { type, data } = action;
  switch (type) {
    case constants.GET_WEATHER_START:
    return {
      ...state,
      getWeatherError: false,
      loading: true
    };

    case constants.GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: data,
        loading: false
      };

    case constants.GET_WEATHER_ERROR:
      return {
        ...state,
        weather: 'Error',
        getWeatherError: true,
        loading: false
      };

    default:
      return state;
  }
};