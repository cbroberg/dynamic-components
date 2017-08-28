import styled, { keyframes } from 'styled-components'
import * as colors from 'components/colors'
import { getColor } from 'components/colors'
import { transparentize, darken } from 'polished'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 360px) {
    max-width: 400px;
  }

  @media screen and (min-width: 800px) {
    max-width: 800px;
  }
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


const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const loaderSizes = {
	xs: '20px',
	small: '50px',
	medium: '80px',
	large: '120px',
	xl: '250px'
}


export const Loader = styled.div`
	display: inline-block;
	border: 16px solid #E3E5E5;
	border-radius: 50%;
	border-top: 16px solid #3498db;
	width: ${({ size }) => loaderSizes[size]};
	height: ${({ size }) => loaderSizes[size]};
	animation: ${rotate360} 1s linear infinite;
	&:hover {
        animation: ${rotate360} 3s linear infinite;
    }
`

Loader.defaultProps = {
	size: loaderSizes['medium'] /* '80px' */
}


export const SpinLogo = styled.div`
	display: inline-block;
	margin: 0px 30px 0px 30px;
	animation: ${rotate360} ${props => props.time || '1s'} linear infinite;
	&:hover {
        animation: ${rotate360} 3s linear infinite;
    }
`
export const LogoImg = styled.img`
`

/*

*/