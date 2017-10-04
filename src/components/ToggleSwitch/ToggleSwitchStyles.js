import styled from 'styled-components'


export const StyledToggleSwitch = styled.label`
	position: relative;
	display: inline-block;
	width: 90px;
	height: 34px;

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
		background-color: #ccc;
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
		transition: .4s;
		border-radius: 4px;
	}

	> input:checked + .slider {
		background-color: #3B97D3;
	}

	> input:focus + .slider {
		box-shadow: 0 0 1px #3B97D3;
	}

	> input:checked + .slider:before {
		transform: translateX(56px);
	}

	> .slider.round {
		border-radius: 34px;
	}

	> .slider.round:before {
		border-radius: 50%;
	}
`
