import React from 'react';
import styled from 'styled-components';

const WeatherSingleDay = (props) => {
  const { weather } = props;

  return (
      <Panel>
        <CityName>
          <Name>{weather.name}, {weather.sys.country}</Name>
          {weather.weather.map((weather, i) => {
            return <Icon key={i}>
              <Img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather-icon"/>
              <WeatherDescription>{weather.description}</WeatherDescription>
            </Icon>
          })}
        </CityName>
        <BlockTitle>City geo location</BlockTitle>
        <Condition>
          <ConditionName>Longitude:</ConditionName>
          {weather.coord.lon}
        </Condition>
        <Condition>
          <ConditionName>Latitude:</ConditionName>
          {weather.coord.lat}
        </Condition>
        <BlockTitle>Weather conditions</BlockTitle>
        <Condition>
          <ConditionName>Temperature:</ConditionName>
          {weather.main.temp}<Metric>K</Metric>
        </Condition>
        <Condition>
          <ConditionName>Atmospheric pressure:</ConditionName>
          {weather.main.pressure}<Metric>hPa</Metric>
        </Condition>
        <Condition>
          <ConditionName>Humidity:</ConditionName>
          {weather.main.humidity}<Metric>%</Metric>
        </Condition>
        <Condition>
          <ConditionName>Cloudiness:</ConditionName>
          {weather.clouds.all}<Metric>%</Metric>
        </Condition>
        <Condition>
          <ConditionName>Wind speed:</ConditionName>
          {weather.wind.speed}<Metric>meter/sec</Metric>
        </Condition>
      </Panel>
    )
}

export default WeatherSingleDay

const Panel = styled.div`
  margin-top: 80px;
  padding: 0 25px 25px 25px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 6px;
`;

const CityName = styled.div`
  position: relative;
  top: -20px;
  height: 70px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 20px;
  border-radius: 6px;
  background: linear-gradient(60deg, #ab47bc, #8e24aa);
  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);
  color: #fff;
  font-size: 28px;
`;

const Name = styled.div`
  margin-right: 80px;
`;

const Icon = styled.div`
  position: relative;
  margin: 25px 0;
  &:hover>span{
    opacity: 1;
  }
`;

const Img = styled.img`
  cursor: pointer;
  position: relative;
  top: 5px;
`;

const WeatherDescription = styled.span`
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  opacity: 0;
  transition: .2s;
  white-space: nowrap;
`;

const BlockTitle = styled.div`
  width: 100%;
  padding: 15px 15px 15px 20px;
  font-weight: bold;
  font-size: 20px;
`;

const Condition = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 10px 10px 30px;
  font-size: 20px;
`;

const ConditionName = styled.div`
  font-size: 18px;
  width: 35%;
`;

const Metric = styled.span`
  display: block;
  position: relative;
  bottom: 3px;
  font-size: 16px;
  margin-left: 8px;
  color: rgba(0, 0, 0, .6)
`;