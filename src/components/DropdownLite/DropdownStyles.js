import styled from 'styled-components'

export const StyledDropdownContainer = styled.div`
	display: inline-block;
`

export const StyledDropdown = styled.div`
	position: relative;
	display: inline-block;
	border-radius: 4px;
`

export const StyledDropdownButton = styled.button`
	display: inline-block;
	background-color: #3B97D3;
	color: white;
	padding: 12px;
	font-size: 1.5rem;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: normal; 
	border: none;
	border-radius: 4px;
	user-select: none;
	cursor: pointer;
	&:hover {
		background-color: #3B97D3;
		border-radius: 4px 4px 0 0;
	}

`

export const StyledDropdownList = styled.div`
	display: block;
	overflow: hidden;
	position: absolute;
	top: ${(props) => props.height ? props.height : '34px'};
	font-size: 1.5rem;
	font-family: 'Source Sans Pro';
	background-color: #2C3E50;
	border-radius: 0 4px 4px 4px;
	min-width: ${(props) => props.width};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	z-index: 1;	
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
	&:hover {
		background-color: #3B97D3;
		cursor: ${(props) => props.active ? 'pointer' : 'not-allowed'};
	}
`

export const StyledDropdownListHairline = styled.hr`
	position: relative;
	bottom: 0;
	border: 0;
	height: 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`
