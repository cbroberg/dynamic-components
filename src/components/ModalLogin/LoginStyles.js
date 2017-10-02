import styled from 'styled-components'
import image404 from './img/kuku.png'
import HeaderImg from './img/logo01.svg'


export const TopContainer = styled.div`
background: #3B97D3; 
height: 55px; 
width: 100%;
display: inline-flex;
align-content: flex-start;

`
export const TopHeader = styled.div` 
color: #fff;
font-family: 'sans-serif';
font-size: 18px;
flex-grow: 9;
align-self: center;
`
export const IconContainer = styled.div`
border: none;
width: 30px;
align-self: center;
`

export const CloseButton = styled.div`
height: 20px; 
width: 20px;
cursor: pointer;
flex: 1;
align-self: center;
`

export const LoginWrapper = {
	content: {
		background: 'white',
		height: '572px',
		width: '460px',
		margin: 'auto',
		'boxShadow': '2px 2px 5px #888888',
		padding: 'none',
		overflow: 'hidden'

	}
}
export const LoginButton = styled.button` 
height: 10%; 
width: 100%;  
background-color: #3B97D3;
color: #fff;
font-size: 20px;
border: none;
border-radius: 4px;
margin-top: 15px;
font-family: 'sans-serif';
cursor: pointer;
`

export const LoginContent = styled.div`
height: 90%; 
padding-left: 45px;
padding-right: 45px;
padding-bottom: 10px;
padding-top: 10px;
font-family: 'Source Sans Pro';
`

export const BagrundPiture = styled.div`
background-image: url(${image404});
height: -webkit-fill-available;
width: -webkit-fill-available;
background-size: cover;
background-repeat: no-repeat;
background-position: 50% 50%;
`

export const HeaderImgStyled = styled.div` 
background-image: url(${HeaderImg});
height: 26px; 
background-repeat: no-repeat;
margin-top: 46px;
margin-left: auto;
margin-right: auto; 
width: 225px;
padding: 18px;
`

export const InputFields = styled.input`
background-color: #E3E5E5;
border-radius: 4px;
font-family: 'Source Sans Pro';
decoration: none;
font-size: 16px;
border: none;
-webkit-transition: all 0.30s ease-in-out;
-moz-transition: all 0.30s ease-in-out;
-ms-transition: all 0.30s ease-in-out;
-o-transition: all 0.30s ease-in-out;
outline: none;
&:focus {
    box-shadow: 0 0 5px #81C1EA;
    border: 2px solid #81C1EA;
  } 


`
export const ChooseRegion = InputFields.extend`
height: 9%; 
width: 100%;
margin-top: 46px;
`

export const LoginUserName = InputFields.extend`
height: 10%; 
width: 100%;
margin-top: 28px; 
`
export const LoginPassword = InputFields.extend`
height: 10%; 
width: 100%;
margin-top: 28px;
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
export const SelectMenubar = styled.select` 
width: 100%;  
height: 12%;
`

