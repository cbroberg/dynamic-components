import styled from 'styled-components'
import { transparentize, darken } from 'polished'

const shadows = ['0 0 2px 1px rgba(0, 140, 186, 0.5)', '0 8px 16px 0 rgba(0, 0, 0, 0.2)', '0 8px 16px 0 rgba(0, 140, 186, 0.5)', '0 8px 16px 0 #D4CD11']


export const StyledCard = styled.div`
	float: left;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.2s;
	width: 200px;
	margin-right: 9px;
    margin-bottom: 9px;
	border-radius: 5px; 
    text-decoration: none;
	user-select: none;
	opacity: ${(props) => props.isDisabled ? '0.4' : ''};
	background: ${(props) => props.isDisabled ? (props.disabledColor) : props.bgColor};
	cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
	&:hover {
		box-shadow: ${(props) => props.isDisabled ? '' : shadows[1]};

	}

    &:focus {
		background: ${(props) => darken(0.1, props.bgColor)};
		border-color: #81C1EA;
        box-shadow: 0 0 0 3px ${(props) => transparentize(0.7, props.bgColor)};
        outline: none;
    }

	&:active {
		background: ${(props) => props.isDisabled ? '' : darken(0.1, props.bgColor)};
		border-color: ${(props) => darken(0.8, props.bgColor)};
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transform: ${(props) => props.isDisabled ? '' : 'translateY(2px)'};
	}
`

export const StyledCardImage = styled.img`
	border-radius: 5px 5px 0 0;
	width: 100%;
`

export const StyledCardContainer = styled.div`
	padding: 2px 16px;
`

export const StyledCardHeader = styled.h4`
	text-align: center;
	font-family: 'Source Sans Pro';
	color: ${(props) => props.isActive ? '#fff' : '#000'};
	
	&:div:first-of-type {
    background: red;
	}
`

export const StyledCardContent = styled.p`
	text-align: center;
	font-family: 'Source Sans Pro';
	font-size: 14px;
`

