import styled from 'styled-components'

export const StyledCard = styled.div`
	float: left;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.2s;
	width: 200px;
	/* min-height: 280px; */
    margin-right: 8px;
    margin-bottom: 8px;
	border-radius: 5px;
	background: #ECF0F1;
	&:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
	cursor: pointer;
`

export const StyledCardImage = styled.img`
	border-radius: 5px 5px 0 0;
	width: 100%;
`

export const StyledCardContainer = styled.div`
	padding: 2px 16px;
`

export const StyledCardHeader = styled.h4`
	text-align: center;
	font-family: 'Source Sans Pro';
`

export const StyledCardContent = styled.p`
	text-align: center;
	font-family: 'Source Sans Pro';
    font-size: 14px;
`

export const StyledCardIcon = styled.div`
	text-align: center;
	width: 100%;
`
