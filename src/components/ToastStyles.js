import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import styled from 'styled-components'

const CopyToast = styled(ToastContainer)`
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

export default CopyToast
