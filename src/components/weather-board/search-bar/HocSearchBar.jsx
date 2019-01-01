import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../../actions/search';
import { getWeather } from '../../../actions/getWeather';

const HocSearchBar = (WrappedComponent) => {

  class HocSearchBarConnect extends Component {

    submit = (e) => {
      e.preventDefault();
      this.props.getWeather(this.props.city);
    }

    render() {	
      const { focused, city, actions } = this.props;
      
      return <WrappedComponent focused={focused} city={city} actions={actions} submit={this.submit}/>;
    }
  }

  const mapStateToProps = (state) => {
    return state.search;
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(searchActions, dispatch),
      getWeather: bindActionCreators(getWeather, dispatch)
    }
  }
  
  return HocSearchBarConnect = connect(mapStateToProps, mapDispatchToProps)(HocSearchBarConnect);
};

export default HocSearchBar;