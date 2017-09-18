import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

injectGlobal([`
	${styledNormalize}

   	html {
	   font-size: 62.5%;
	}
	
	body {
		margin: 5px;
	}

   * {
        outline: none;
		box-sizing: border-box;
		font-family: 'Source Sans Pro';
	}
	`])

export const Divider = styled.div`
	clear: both;
	padding-top: 25px;
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
			opacity: 0.95;
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
