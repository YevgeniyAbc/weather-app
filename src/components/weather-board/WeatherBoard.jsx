import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './search-bar/SearchBar';
import WeatherPanel from './weather-panel/WeatherPanel';

export default class WeatherBoard extends Component {
  
	render() {
		return (
      <Board>
        <SearchBar/>
        <WeatherPanel/>
      </Board>
		);
	}
}

const Board = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 90px 25px 50px;
  color: #3c4858;
`;