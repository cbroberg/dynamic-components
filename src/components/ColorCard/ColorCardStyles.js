import styled from 'styled-components'
import { BUTTON_DEFAULT } from 'theme/colors'


export const StyledColorCard = styled.div`
	float: left;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.2s;
	width: 200px;
	min-height: 280px;
	margin-right: 9px;
    margin-bottom: 9px;
	border-radius: 5px;
	background: #ECF0F1;
	&:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
`

export const StyledColorCardBackground = styled.div`
	border-radius: 5px 5px 0 0;
	background: ${props => props.color || BUTTON_DEFAULT};
	height: 170px;
	width: 100%;
	cursor: pointer;
`

export const StyledColorCardContainer = styled.div`
	padding: 2px 16px;
`

export const StyledColorCardHeader = styled.h4`
	text-align: center;
	font-family: 'Source Sans Pro';
	cursor: pointer;
`

export const StyledColorCardContent = styled.p`
	text-align: center;
	font-family: 'Source Sans Pro';
    font-size: 14px;
`

