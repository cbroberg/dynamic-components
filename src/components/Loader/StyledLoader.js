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
	xxs: {
		diameter: '14px',
		border: '3px'
	},
	xs: {
		diameter: '20px',
		border: '5px'
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
	xl: {
		diameter: '250px',
		border: '22px'

	}
}

const velocities = {
	slow: '3s',
	medium: '2s',
	fast: '1s',
	superfast: '0.5s'
}

export const StyledLoader = styled.div`
	display: inline-block;
	border: ${({ size }) => sizes[size].border} solid #E3E5E5;
	border-radius: 50%;
	border-top: ${({ size }) => sizes[size].border} solid #3498db;
 	width: ${({ size }) => sizes[size].diameter};
	height: ${({ size }) => sizes[size].diameter};
	animation: ${rotate360} ${({ velocity }) => velocities[velocity]} linear infinite;
`

StyledLoader.propTypes = {
	size: PropTypes.string.isRequired,
	velocity: PropTypes.string
}

StyledLoader.defaultProps = {
	size: 'medium',
	velocity: 'fast'
}
