import styled from 'styled-components'
import { transparentize, darken, rgba } from 'polished'
import { BUTTON_TEXT, } from 'theme/colors'


const StyledButton = styled.button`
    display: flex;
    align-items: center;
    float: left;
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    font-size: 15px;
    font-weight: 300;
	font-style: normal; 
	line-height: 1.9;
    color: ${BUTTON_TEXT};
	background: ${(props) => props.isDisabled ? props.disabledColor : props.color};
	padding: ${(props) => props.hasIconAndText ? '0 15px 0 15px' : props.hasText ? '0 8px 0 15px' : props.hasIcon ? '0 2px 0 10px' : '0 0 0 15px'};
	height: 37px;
	margin-right: 0.7rem;
	margin-bottom: 0.7rem;
    border: none;
    text-decoration: none;
	cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
    user-select: none;

    &:focus {
        border-color: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.7, props.color)};		 
		box-shadow: ${(props) => props.isDisabled ? '' : `0 0 0 3px ${transparentize(0.7, props.color)}`};
        outline: none;
    }

    &&:active {
        background: ${(props) => props.isDisabled ? props.disabledColor : darken(0.1, props.color)};
        border-color: ${(props) => props.isDisabled ? props.disabledColor : darken(0.1, props.color)};
		box-shadow: ${(props) => props.isDisabled ? null : `inset 0 1px 2px ${transparentize(0.7, rgba(0, 0, 0, 0.1))}`}; 
		transform: ${(props) => props.isDisabled ? null : 'translateY(2px)'};
    }

    &:hover {
		background: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.2, props.color)};
        border-color: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.7, props.color)};		 
		box-shadow: ${(props) => props.isDisabled ? null : `0 0 0 3px ${transparentize(0.7, props.color)}`};
        outline: none;
    }
`

export const StyledButtonText = styled.span`
	padding-right: 15px;
`

export default StyledButton
