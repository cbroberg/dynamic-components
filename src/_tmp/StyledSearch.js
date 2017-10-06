import styled from 'styled-components'
import searchicon from './searchicon.png'

export const Search = styled.input`
    width: 130px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 1.86rem;
    background-color: white;
    background-image: url(${searchicon});
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;

	&:focus {
    	width: 60%;
`
