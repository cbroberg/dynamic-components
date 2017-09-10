import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import { BUTTON_DEFAULT, BUTTON_TEXT, } from 'theme/colors'

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    float: left;
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    font-size: 15px; /* 18px*/
    font-weight: 300;
	font-style: normal; 
	lineHeight: 1.9;
    color: ${BUTTON_TEXT};
    background: ${(props) => props.color || BUTTON_DEFAULT};
    padding: 0;
    padding: 0 20px 0 15px;
    height: 37px;
    margin-right: 0.7rem;
    border: none;
    text-decoration: none;
    cursor: pointer;
    user-select: none;

    &:focus {
        border-color: ${(props) => transparentize(0.7, props.color)};		 
		box-shadow: 0 0 0 3px ${(props) => transparentize(0.7, props.color)};
        outline: none;
    }

    &&:active {
        background: ${(props) => darken(0.1, props.color)};
        border-color: ${(props) => darken(0.1, props.color)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &:hover {
        background: ${(props) => transparentize(0.2, props.color)};
    }
`

export default StyledButton
