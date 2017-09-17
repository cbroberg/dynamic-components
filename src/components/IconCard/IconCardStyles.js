import styled from 'styled-components'

export const StyledIconCard = styled.div`
	float: left;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.2s;
	width: 200px;
	min-height: 310px;
	margin-right: 9px;
    margin-bottom: 9px;
	border-radius: 5px;
	background: #ECF0F1;
	&:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
`

export const StyledIconCardContainer = styled.div`
	text-align: center;
	padding: 2px 16px;
`

export const StyledIconCardHeader = styled.h4`
	text-align: center;
	font-family: 'Source Sans Pro';
	font-size: 1.8rem;
`

export const StyledIconCardContent = styled.p`
	text-align: center;
	font-family: 'Source Sans Pro';
	font-size: 1.4rem;
	color: #3B97D3;
`

export const StyledIconCardIcon = styled.div`
	text-align: center;
	width: 100%;
	padding-top: 15px;
	cursor: pointer;
`
export const StyledIconCardContentLink = styled.a`
	text-align: '';
	text-align: right;
	font-family: 'Source Sans Pro';
	font-size: 1.4rem;
	color: #3B97D3;
`
