import styled from 'styled-components'
import * as colors from 'theme/colors'
import { getColor } from 'theme/colors'
import { transparentize, darken } from 'polished'

export const DisplayColor = styled.div`
    float: left;
    width: 175px;
    height: 175px;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 10px
    border: 1px solid rgba(0, 0, 0, .2);
    background: ${props => props.color || colors.BUTTON_DEFAULT};
    font-family: 'Source Sans Pro';
    font-size: 14px;
`

export const CopyButton = styled.button`
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    font-size: 14px;
    color: ${getColor('BLACK')};
    background: ${props => props.color || colors.BUTTON_DEFAULT};
    padding: '9px 20px 9px 15px';
    margin-right: 0.7rem;
    /* border: none; */
    border: 1px solid rgba(0, 0, 0, .2);
    text-decoration: none;

    &:focus {
        border-color: ${getColor('BUTTON_DEFAULT_FOCUS')};
        box-shadow: 0 0 0 3px ${transparentize(0.7, colors.BUTTON_DEFAULT)};
        outline: none;
    }

    &&:active {
        background: ${darken(0.1, colors.BUTTON_DEFAULT)};
        border-color: ${darken(0.1, colors.BUTTON_DEFAULT)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &:hover {
        background: ${colors.BUTTON_DEFAULT_HOVER};
    }
`

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
	background: ${props => props.color || colors.BUTTON_DEFAULT};
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

