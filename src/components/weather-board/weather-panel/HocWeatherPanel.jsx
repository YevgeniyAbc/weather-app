import React, {Component} from 'react';
import { connect } from 'react-redux';

const HocWeatherPanel = (WrappedComponent) => {

  class HocWeatherPanelConnect extends Component {

    render() {	
      const { weather, getWeatherError, loading } = this.props;
      
      return <WrappedComponent weather={weather} loading={loading} getWeatherError={getWeatherError}/> 
    }
  }

  const mapStateToProps = (state) => {
    return state.weather;
  }

  const mapDispatchToProps = () => {
    return {}
  }

  return HocWeatherPanelConnect = connect(mapStateToProps, mapDispatchToProps)(HocWeatherPanelConnect);
};

export default HocWeatherPanel;