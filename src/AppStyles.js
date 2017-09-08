import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export const Divider = styled.div`
    clear: both;
`

export const StyledToast = styled(ToastContainer) `
	&.toastify { 
		.toastify-content {
			border-radius: 4px;
			background: #4CAF50;
			color: #fff;
			font-family: 'Source Sans Pro';
			font-weight: 300;
			font-size: 16px;
			font-style: 'normal';
			border: 1px rgba(0,0,0,0.2); }
		.toastify-content--success {
			background: #4CAF50; }
		.toastify-content--error {
    		background: #CE1D1D; }
	}
		.toastify__progress--default {
			background: linear-gradient(to right, #2C3E50, #2C3E50, #2C3E50, #2C3E50, #2C3E50, #2C3E50); }
	&.toastify-content--error {
    	background: #CE1D1D; }
`

export const Button = styled.button`
	border-radius: 4px;
	font-size: 20px;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: 'normal';
	/* color: 'white'; */
	background: ${(props) => props.disable ? '#EEEDED' : '#FF9600'};
	padding: '9px 20px 9px 15px';
	margin-right: 0.7rem;
	border: 1px solid black;
	cursor: ${(props) => props.disable ? 'not-allowed' : 'pointer'};  
	text-decoration: none;
	user-select: none;
`

export const Header = styled.h2`
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: 'normal';
`