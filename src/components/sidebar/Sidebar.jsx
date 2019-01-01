import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
	return (
		<Bar>
		<Logo>
			<LogoIcon icon="poo-storm"/>Weather
		</Logo>
		<Nav>
			<Link exact to='/'> 
				<Icon icon="cloud-moon-rain"/>Get Weather
			</Link>
			<Link exact to='/favourites'>
				<Icon icon="heart"/>Favourites
			</Link>
		</Nav>
		</Bar>
	);
}

export default Sidebar;

const Bar = styled.div`
  position: fixed;  
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding: 0 15px 15px;
	display: flex;
  flex-flow: column nowrap;
	background: url('/img/sidebar-bg.jpg') 50% 50%/cover;
	color: #fff;
  &:after {
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    opacity: .8;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
  }
`;

const Logo = styled.div`
	position: relative;
	height: 70px;
	line-height: 70px;
	padding-left: 70px;
	border-bottom: 1px solid #fff; 
	z-index: 2;
	font-size: 22px;
	text-transform: uppercase;
`;

const Nav = styled.nav`
	z-index: 2;	
	margin-top: 20px;
`;

const activeClassName = 'active';

const Link = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
	display: block;
	position: relative;
	width: 100%;
	height: 50px;
	padding-left: 70px;
	line-height: 50px;
	text-decoration: none;
	color: #fff;
	transition: all .8s;
	border-radius: 3px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.25);
	}
	&:focus {
		outline: none;
		background-color: rgba(0, 0, 0, 0.25);
	}
	&.${activeClassName} {
    box-shadow: 0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2);
		background-color: #00acc1;
  }
`;

const Icon = styled(FontAwesomeIcon)`
	position: absolute;
	left: 25px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 24px; 
	margin-right: 20px;
`;

const LogoIcon = styled(Icon)`
	font-size: 28px;
	color: #00acc1;
`;