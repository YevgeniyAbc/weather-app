import * as constants from '../constants/constants';

const defaultState = {
  focused: false,
  city: ''
};

export default (state = defaultState, action) => {
  const { type, data } = action;
  switch (type) {
    case constants.FOCUSED:  
      return {
        ...state,
        focused: data,
      };

    case constants.SET_CITY:
      return {
        ...state,
        city: data,
      };

    default:
      return state;
  }
};