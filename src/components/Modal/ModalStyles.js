import styled, { keyframes } from 'styled-components'
import Modal from 'react-modal'
import * as colors from 'theme/colors'


const fadeModal = keyframes`
@keyframes  {
    from {
        opacity: 0;
        top: 0%;
        left: 50%;
    }
    to {
        opacity: 1;
        top: 50%;
        left: 50%;
    }
}
`

export const StyledModal = styled(Modal) `
    border-radius: 4px;
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    width: 30%;
    height: calc(100% - 200px);
    min-height: 500px;
    max-height: 700px;
    transform: translate(-50%, -50%);
    animation: ${fadeModal} 1s ease-in-out;
    background-color: white;
    outline: none;
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5);
	overflow-y: auto;
	.ReactModal__Body--open {
    	overflow: hidden;
	}
`

export const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${colors.MODAL_HEADER};
    font-family: 'Source Sans Pro';
    font-size: 2.0rem;
    font-weight: 300;
    color: ${colors.MODAL_TITLE};
    box-sizing: border-box; 
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    user-select: none;
`

export const StyledModalHeaderIcon = styled.div`
    margin-right: 5px;
`

export const StyledModalHeaderTitle = styled.div`
    float: left;
`

export const StyledModalHeaderClose = styled.div`
    float: right;
    margin-left: auto;
    cursor: pointer;
`

export const StyledModalContent = styled.div`
    clear: both;
    box-sizing: border-box; 
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Source Sans Pro';
    font-size: 1.6rem;
    font-weight: 300;
    height: calc(100% - 90px);
`

export const StyledModalButtonPanel = styled.div`
    /*position: relative;
    left: 0;
    bottom: 0;*/
    width: 100%;
    height: 60px;
    margin-top: 20px;
`

export const ImageBrowserModalWindow = StyledModal.extend`
    width: 50%;
    height: 50%;
`

export const ImageBrowserPath = styled.div`
    height: 37px;
    line-height: 37px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 400;
`