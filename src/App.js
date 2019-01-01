import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import 'reset-css';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import WeatherBoard from './components/weather-board/WeatherBoard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudMoonRain, faHeart, faPooStorm, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faCloudMoonRain, faHeart, faPooStorm, faSearch);

export default class App extends Component {
  render() { 
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Sidebar/>  
            <Switch>
              <Route exact path="/" component={WeatherBoard}/>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}