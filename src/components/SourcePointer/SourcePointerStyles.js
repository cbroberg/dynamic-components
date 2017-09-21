import styled from 'styled-components'

export const StyledDropdown = styled.div`
	position: absolute;
	display: inline-block;
	border-radius: 4px;
	display: flex;
`

export const StyledDropdownButton = styled.div`
	background-color: #3B97D3;
	color: white;
	padding: 12px;
	font-size: 1.5rem;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: normal; 
	border-radius: 4px;
	user-select: none;
	cursor: pointer;
	width: fit-content;
	&:hover {
		background-color: #3B97D3;
		border-radius: 4px;
	}
`

export const StyledDropdownList = styled.div`
	//border-top: 17.5px solid white;
	topdisplay: flex;
	flex-direction: column;
	margin-top: 15px;
	overflow: hidden;
	position: absolute;
	top: ${(props) => props.height ? props.height : '34px'};
	font-size: 1.5rem;
	font-family: 'Source Sans Pro';
	background-color: #2C3E50;
	border-radius: 4px;
	min-width: ${(props) => props.width};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	position: sticky;
	overflow: visible;
		 &::after {
			position: absolute;
			left: 50%;
			margin-left: -37.5px;
			top: -15px;
			width: 0;
			height: 0;
			content:'';
			border-left: 15px solid transparent;
			border-right: 15px solid transparent;
			border-bottom: 15px solid #2C3E50;
	}
` 

export const StyledDropdownListItem = styled.a`
	color: ${(props) => props.active ? 'white' : '#BDC2C6'};
	padding: 8px 12px;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: normal; 
	text-decoration: none;
	text-overflow: ellipsis;
	display: block;
	user-select: none;
	overflow: visible;
	&:hover {
		background-color: #3B97D3;
		border-radius:4px;
		cursor: ${(props) => props.active ? 'pointer' : 'not-allowed'};
		z-index: 1;
	}
`
