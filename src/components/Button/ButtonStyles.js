import styled from 'styled-components'
import { transparentize, darken, rgba } from 'polished'
import { BUTTON_TEXT } from 'theme/colors'


const sizes = {
	xsmall: {
		height: '38px',
		margin: '0 0.7rem 0.7rem 0',
		paddingIcon: '0 0px 0 10px',
		paddingText: '0 8px 0 15px',
		paddingIconText: '0 13px 0 15px'
	},
	small: {
		diameter: '50px',
		border: '10px'

	},
	medium: {
		diameter: '80px',
		border: '12px'

	},
	large: {
		diameter: '120px',
		border: '16px'

	},
	xlarge: {
		diameter: '200px',
		border: '20px'

	}
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    float: left;
    border-radius: 4px;
	background: ${(props) => props.isDisabled ? props.disabledColor : props.color};
	padding: ${(props) => props.hasIconAndText ? '0 13px 0 15px' : props.hasText ? '0 8px 0 15px' : props.hasIcon ? '0 0px 0 10px' : '0 0 0 15px'};
	height: 38px;
	margin-right: 0.7rem;
	margin-bottom: 0.7rem;
    border: none;
    text-decoration: none;
	cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
	user-select: none;
	outline: none;

    &:focus {
        border-color: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.7, props.color)};		 
		box-shadow: ${(props) => props.isDisabled ? null : `0 0 0 3px ${transparentize(0.7, props.color)}`};
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
    }
`

export const StyledButtonText = styled.span`
	color: ${BUTTON_TEXT};
	font-family: 'Source Sans Pro';
    font-size: 15px;
    font-weight: 300;
	font-style: normal; 
	padding-right: 2px;
`

export const StyledButtonTextNoIcon = styled.span`
	color: ${BUTTON_TEXT};
    font-family: 'Source Sans Pro';
    font-size: 15px;
    font-weight: 300;
	font-style: normal; 
	padding-right: 15px;
`

export default StyledButton
