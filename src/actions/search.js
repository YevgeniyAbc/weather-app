import * as constants from '../constants/constants';

export const focusHandle = (data) => { 
  return {
    type: constants.FOCUSED,
    data
  }
}

export const setCity = (data) => {
  return {
    type: constants.SET_CITY,
    data
  }
}
