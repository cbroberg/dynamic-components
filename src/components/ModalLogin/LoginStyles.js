import styled from 'styled-components'
import Logo from './assets/logo.svg'


export const HeaderImage = styled.div` 
	background-image: url(${Logo});
    display: block;
    margin: auto;
    width: 40%;
	height: 60px; 
	background-repeat: no-repeat;
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto; 
	width: 350px;
	padding: 18px;
`

export const InputFields = styled.input`
    font-family: 'Source Sans Pro';
	font-size: 1.8rem;
	font-weight: 300;
    padding: 1rem;
    color: #2C3E50;
    background: #ECF0F1;
    border: none;
	border-radius: 4px;
	outline: 1px;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }

`

export const Account = InputFields.extend`
	height: 9%; 
	width: 100%;
	margin-top: 40px;
`

export const Username = InputFields.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
`

export const Password = InputFields.extend`
	height: 10%; 
	width: 100%;
	margin-top: 15px; 
	margin-bottom: 15px;
`

export const Remember = styled.label`
	display: block;
	float: right;
	font-family: 'Source Sans Pro';
	font-size: 1.8rem;
	font-weight: 300;
	text-align: left;
	margin-top: 2px;
	width: calc(100% - 60px);
`
