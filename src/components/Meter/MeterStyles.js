import styled from 'styled-components'
import { BUTTON_DEFAULT } from 'theme/colors'


export const StyledMeter = styled.a`
	text-align: left;
	font-family: 'Source Sans Pro';
	font-size: 13px;

	background: #eee;
	border-radius: 3px 0 0 3px;
	color: #999;
	display: inline-block;
	height: 26px;
	line-height: 26px;
	padding: 0 20px 0 23px;
	position: relative;
	margin: 0 10px 10px 0;
	text-decoration: none;
	
	&::before {
		background: #fff;
		border-radius: 10px;
		box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
		content: '';
		height: 6px;
		left: 10px;
		position: absolute;
		width: 6px;
		top: 10px;
	}

	&::after {
		background: #fff;
		border-bottom: 13px solid transparent;
		border-left: 10px solid #eee;
		border-top: 13px solid transparent;
		content: '';
		position: absolute;
		right: 0;
		top: 0;
	}

	&:hover {
    	background-color: ${props => props.color || BUTTON_DEFAULT};
		color: white;
		cursor: pointer;
	}
	
	&:hover::after {
		border-left-color: ${props => props.color || BUTTON_DEFAULT};
	}
`
