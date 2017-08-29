import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

export const SpinLogo = styled.div`
	float: left;
	animation: ${rotate360} ${props => props.time || '1s'} linear infinite;
	&:hover {
        animation: ${rotate360} 3s linear infinite;
    }
`
