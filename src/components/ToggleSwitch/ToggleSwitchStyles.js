import styled from 'styled-components'

export const StyledToggleSwitch = styled.div`
	> input { opacity: 0; }
	
`





export const Toggle = styled.div`
	> input { opacity: 0; }
	> input + label { position: relative; }
	> input + label:before {
	height: 20px;
	width: 40px;
	background: #bad;
	right: -50px;
	content: '';
	position: absolute;
	}

	> input + label:after {
	height: 16px;
	width: 16px;
	background: #bada55;
	left: 56px;
	top: 2px;
	content: '';
	position: absolute;
	}

	> input:focus + label:before {
	outline: 2px solid black;
	}

	> input:checked + label:after {
	right: -48px;
	left: auto;
	}

	> input[type=checkbox] {
    visibility: hidden;
    &:checked + label:after {
      opacity: 1;
    }
  }   
`
