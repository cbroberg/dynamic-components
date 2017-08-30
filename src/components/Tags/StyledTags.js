import styled from 'styled-components'

export const StyledIconCardTagList = styled.a`

`
export const StyledIconCardTagListItem = styled.a`
	text-align: left;
	font-family: 'Source Sans Pro';
	font-size: 14px;

	background: #eee;
	border-radius: 3px 0 0 3px;
	color: #999;
	display: inline-block;
	height: 26px;
	line-height: 26px;
	padding: 0 20px 0 23px;
	position: relative;
	margin: 0 10px 10px 0;
	text-decoration: none;
	-webkit-transition: color 0.2s;
	
	&::before {
	background: #fff;
	border-radius: 10px;
	box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
	content: '';
	height: 6px;
	left: 10px;
	position: absolute;
	width: 6px;
	top: 10px;
	}

	&:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
	&:hover::after {
		border-left-color: crimson; 
}
`
