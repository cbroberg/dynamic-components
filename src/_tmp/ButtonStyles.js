import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import { BUTTON_DEFAULT, BUTTON_TEXT, BUTTON_DEFAULT_FOCUS, BUTTON_DEFAULT_HOVER } from 'theme/colors'

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    float: left;
    border-radius: 4px;
    font-family: ${(props) => props.theme.font || 'Source Sans Pro'};
    font-size: ${(props) => props.theme.buttonSize.default.size || '18px'};
    font-weight: ${(props) => props.theme.fontWeight || 300};
    font-style: ${(props) => props.theme.fontStyle || 'normal'}; 
    color: ${(props) => props.theme.button.color || BUTTON_TEXT};
    background: ${(props) => props.theme.button.background || BUTTON_DEFAULT};
    padding: 0;
    padding: ${(props) => props.theme.buttonSize.default.padding || '0 20px 0 15px'};
    height: 37px;
    margin-right: 0.7rem;
    border: none;
    text-decoration: none;
    cursor: pointer;
    user-select: none;

    &:focus {
        border-color: ${BUTTON_DEFAULT_FOCUS};
        box-shadow: 0 0 0 3px ${transparentize(0.7, BUTTON_DEFAULT)};
        outline: none;
    }

    &&:active {
        background: ${darken(0.1, BUTTON_DEFAULT)};
        border-color: ${darken(0.1, BUTTON_DEFAULT)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &:hover {
        background: ${BUTTON_DEFAULT_HOVER};
    }
`

export default StyledButton
