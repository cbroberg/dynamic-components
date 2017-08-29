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

const sizes = {
	xxs: {
		diameter: '13px',
		border: '2px'
	},
	xs: {
		diameter: '25px',
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
		diameter: '200px',
		border: '20px'

	}
}

const velocities = {
	slow: '3s',
	medium: '2s',
	fast: '1s',
	superfast: '0.5s'
}

export const StyledLoader = styled.div`
	float: left;
	border: ${({ size }) => sizes[size].border} solid #E3E5E5;
	border-radius: 50%;
	border-top: ${({ size }) => sizes[size].border} solid #3B97D3;
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
