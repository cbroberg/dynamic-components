import styled from 'styled-components'
import * as colors from 'components/colors'
import { getColor } from 'components/colors'
import { transparentize, darken } from 'polished'

export const Divider = styled.div`
    /* padding: 4rem 4rem 4rem 4rem; */
    width: 100%;
    /* width: 20px; */
    height: 20px;
    margin: 5px;
`

export const DisplayIcon = styled.div`
	float: left;
	display: inline-block;
	text-align: center;
    width: 200px;
    height: 170px;
    margin-right: 5px;
    margin-bottom: 5px;
	/* padding: 10px 20px 0px 0px */ /* Top, Right, Bottom, Left */
    border: 1px solid rgba(0, 0, 0, .2);
	background: #ECF0F1;
`

export const CopyButton = styled.button`
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    font-size: 14px;
    color: ${getColor('BLACK')};
    background: ${props => props.color || colors.BUTTON_DEFAULT};
    margin-right: 0.7rem;
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

export const LogoImg = styled.img`
`
