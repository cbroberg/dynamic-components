import styled from 'styled-components'


export const StyledToggleSwitch = styled.label`
	position: relative;
	display: inline-block;
	width: ${({ size }) => sizes[size].width};
	height: ${({ size }) => sizes[size].height};
	user-select: none;

	> input {
		display: none;
	}

	>.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #D5D5D5;
		transition: .4s;
		border-radius: 4px;
	}

	>.slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		transition: .3s;
		border-radius: 4px;
	}

	> input:checked + .slider {
		background-color: #3B97D3;
	}

	> input:focus + .slider {
		box-shadow: 0 0 1px #3B97D3;
	}

	> input:checked + .slider:before {
		transform: translateX(${({ size }) => sizes[size].transform});
	}

	> .slider.round {
		border-radius: 34px;
	}

	> .slider.round:before {
		border-radius: 50%;
	}
`

const sizes = {	
	small: {
		width: '40px',
		height: '18px',
		transform: '20px'
	},
	medium: {
		width: '61px',
		height: '34px',
		transform: '27px'
	},
	large: {
		width: '90px',
		height: '34px',
		transform: '56px'
	}
}