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

export const ChooseRegion = InputFields.extend`
	height: 9%; 
	width: 100%;
	margin-top: 40px;
`

export const LoginUserName = InputFields.extend`
	height: 10%; 
	width: 100%;
	margin-top: 20px; 
`

export const LoginPassword = InputFields.extend`
	height: 10%; 
	width: 100%;
	margin-top: 20px; 
	margin-bottom: 40px;
`

export const RememberMeText = styled.div`
	font-family: 'Source Sans Pro';
	font-size: 14px;
	width: 100%;
	text-align: left;
	margin-top: 20px;
	display: inline-flex;
	flex-direction: row;
	color: #5E5E5E;
`

export const CheckBox = styled.input`
	height: 20px;
	width: 20px;
	margin-top: -2px;
	margin-left: 8px;
`

export const ForgotPasswordText = styled.div`
	font-family: 'Source Sans Pro';
	font-size: 16px;
	color: #5E5E5E;
	text-decoration: underline;
	align: right;
	margin-left: 130px;
	cursor: pointer;
`

export const RegiText = styled.div` 
	margin: auto;
	font-family: 'Source Sans Pro';
	font-size: 16px;
	text-align: center;
	margin-top: 20px;
	color: #5E5E5E;
`

export const RegiComit = styled.a`
	margin: auto;
	font-family: 'Source Sans Pro';
	font-size: 16px;
	color: #3B97D3;
	text-decoration: underline;
	margin-top: 20px;
`

