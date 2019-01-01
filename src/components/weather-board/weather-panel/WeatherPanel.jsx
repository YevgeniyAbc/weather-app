import React from 'react';
import styled from 'styled-components';
import HocWeatherPanel from './HocWeatherPanel';
import Loader from 'react-loader-spinner';
import WeatherSingleDay from './WeatherSingleDay';

const WeatherPanel = (props) => {
  const { weather, loading, getWeatherError } = props;

  if (loading) return <LoaderWrapper><Loader type="CradleLoader"/></LoaderWrapper>;
  if (getWeatherError) return <Error>Sorry, there is no such city in our database.<br/> Try to enter something else.</Error>
  if (weather) return <WeatherSingleDay weather={weather}/>
  return null
}

export default HocWeatherPanel(WeatherPanel)

const LoaderWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Error = styled.div`
  width: 100%;
  padding-left: 40px;
  margin-top: 100px;
  font-size: 24px;
  color: #b9090c;
  line-height: 30px;
`;