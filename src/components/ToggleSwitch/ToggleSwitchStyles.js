import styled from 'styled-components'

export const StyledToggleSwitch = styled.div`
	position: relative;
	display: inline-block;
	width: 90px;
	height: 34px;
	> input + label { 
		opacity: 0; 
		
	}
`

export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: .4s;
	transition: .4s;

	&:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
	}

	> input:checked {
		background-color: #3B97D3;
	}

	> input:focus {
		box-shadow: 0 0 1px #3B97D3;
	}

	> input:checked + &:before {
		-webkit-transform: translateX(52px);
		-ms-transform: translateX(52px);
		transform: translateX(56px);
	}

	/* Rounded sliders */
/* 	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
 */
`

export const Toggle = styled.div`
	> input { opacity: 0; }
	> input + label { position: relative; }
	> input + label:before {
	height: 30px;
	width: 90px;
	background: #ccc;
	-webkit-transition: .4s;
	transition: .4s;
	right: -50px;
	content: '';
	position: absolute;
	}

	> input + label:after {
	height: 26px;
	width: 26px;
	background: #3B97D3;
	left: 4px;
	top: 2px;
	content: '';
	position: absolute;
	}

	> input:checked + label:after {
	right: -48px;
	left: auto;
	}
`
