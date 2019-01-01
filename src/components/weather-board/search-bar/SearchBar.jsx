import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HocSearchBar from './HocSearchBar';

const SearchBar = (props) => {
    const { focused, city, actions, submit } = props;
    
		return (
        <SearchWrapper 
          focused={focused}
          onSubmit={(e)=>submit(e)}>
          <Input 
            onFocus={()=>actions.focusHandle(true)} 
            onBlur={()=>actions.focusHandle(false)}
            onChange={(e)=>actions.setCity(e.target.value)}
            value={city}
            placeholder='Please, enter city'/>
          <SearchButton type="submit">
            <Icon icon="search"/>
          </SearchButton>
        </SearchWrapper>
		);
}

export default HocSearchBar(SearchBar)

const SearchWrapper = styled.form`
  display: block;
  position: relative;
  margin-left: 20px;
  &::after{
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 2px;
    z-index: 2;
    background: #9c27b0;
    transition: all .2s; 
    transform: ${props => props.focused ? 'scaleX(1)' : 'scaleX(0)'}
  }
`;

const Input = styled.input`
  width: 300px;
  background: transparent;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #0000004d;
  font-size: 22px;
  color: #6d6d6d;
  font-family: Georgia, serif;
  &::placeholder {
    color: #0000004d;
  }
  &:focus{
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  bottom: -10px;
  left: 300px;
  width: 53px;
  height: 53px;
  border-radius: 50%;
  border: none;
  background: #fff;
  cursor: pointer;
  color: #0000004d;
  transition: all .2s;
  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);
  &:focus{
    outline: none;
    bottom: -8px;
    box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);
  }
  &:hover{
    bottom: -8px;
    box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);
  }
  &:active{
    background: #00acc1;
    color: #fff;
  }
`;

const Icon = styled(FontAwesomeIcon)`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 16px; 
`;