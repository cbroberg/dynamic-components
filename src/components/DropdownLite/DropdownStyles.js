import styled from 'styled-components'

export const StyledDropdown = styled.div`
	position: relative;
	display: inline-block;
	border-radius: 4px;
`

export const StyledDropdownButton = styled.button`
	background-color: #3B97D3;
	color: white;
	padding: 12px;
	font-size: 1.2rem;
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
	font-size: 1.2rem;
	font-family: 'Source Sans Pro';
	background-color: #2C3E50;
	border-radius: 0 4px 4px 4px;
	min-width: ${(props) => props.width};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	z-index: 1;	
`

export const StyledDropdownListItem = styled.a`
	color: white;
	padding: 8px 12px;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: normal; 
	text-decoration: none;
	text-overflow: ellipsis;
	display: block;
	user-select: none;
	cursor: pointer;
	&:hover {
		background-color: #3B97D3;
	}
`

export const Transition = styled.div`
	width: 100px;
	height: 100px;
	background: #3B97D3;
	-webkit - transition: width 2s; /* For Safari 3.1 to 6.0 */
	transition: width 0.4s;
	transition: height 0.4s;
	&:hover {
		width: 300px;
		height: 300px;
	}
`
