import styled from 'styled-components'

export const StyledDropdownLite = styled.div`
	position: relative;
	display: inline-block;
	border-radius: 4px;
`

export const StyledDropdownLiteButton = styled.button`
	background-color: #3B97D3;
	color: white;
	padding: 12px;
	font-size: 12px;
	font-family: 'Source Sans Pro';
	border: none;
	border-radius: 4px 4px 0 0;
	cursor: pointer;
	&:hover {
		background-color: #2C3E50;
	}
`

export const StyledDropdownLiteContent = styled.div`
	display: none;
	position: absolute;
	font - size: 12px;
	font - family: 'Source Sans Pro';
	background - color: #2C3E50;
	border - radius: 0 4px 4px 4px;
	min - width: 160px;
	box - shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z - index: 1;
	&:hover {
		display: block;
	}
`

export const StyledDropdownLiteContentLink = styled.a`
	color: #FFFFFF;
	padding: 12px 16px;
	font - family: 'Source Sans Pro';
	text - decoration: none;
	display: block;
	&:hover {
		background-color: #3B97D3;
		border-radius: 0 4px 4px 0;
	}
`