import styled from 'styled-components'

export const StyledDropdownLite = styled.div`
	position: relative;
	display: inline-block;
	border-radius: 4px;
	width: 150px;
	/* border-style: solid; */
`

export const StyledDropdownLiteButton = styled.button`
	background-color: #3B97D3;
	color: white;
	padding: 12px;
	font-size: 12px;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: normal; 
	border: none;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background-color: #3B97D3;
	}
`

export const StyledDropdownLiteContent = styled.div`
	display: block;
	overflow: hidden;
	position: absolute;
	top: 34px;
	font-size: 12px;
	font-family: 'Source Sans Pro';
	background-color: #2C3E50;
	border-radius: 0 4px 4px 4px;
	min-width: 160px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	z-index: 1;
`

export const StyledDropdownLiteContentItem = styled.a`
	color: white;
	padding: 12px 12px;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: normal; 
	text-decoration: none;
	text-overflow: ellipsis;
	display: block;
	&:hover {
		background-color: #3B97D3;
		border-radius: 0 0px 0px 0;
	}
`
