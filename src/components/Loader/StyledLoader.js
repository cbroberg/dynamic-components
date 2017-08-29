import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'


const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

export const SpinLogo = styled.div`
	display: inline-block;
	animation: ${rotate360} ${props => props.time || '1s'} linear infinite;
	&:hover {
        animation: ${rotate360} 3s linear infinite;
    }
`


const sizes = {
	xs: '20px',
	small: '50px',
	medium: '80px',
	large: '120px',
	xl: '250px'
}

export const StyledLoader = styled.div`
	display: inline-block;
	border: 16px solid #E3E5E5;
	border-radius: 50%;
	border-top: 16px solid #3498db;
 	width: ${({ size }) => sizes[size]};
	height: ${({ size }) => sizes[size]};
	animation: ${rotate360} 1s linear infinite;
	&:hover {
        animation: ${rotate360} 3s linear infinite;
    }
`

StyledLoader.propTypes = {
	size: PropTypes.string.isRequired
}

StyledLoader.defaultProps = {
	size: 'medium'
}
