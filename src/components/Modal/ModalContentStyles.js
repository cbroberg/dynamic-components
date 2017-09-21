import styled from 'styled-components'
import StyledModal from 'components/Modal/ModalStyles'


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

export const NewModal = styled.div`
	position: absolute;
	z-index: 2;
	top: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	box-shadow: 0 48px 80px -32px rgba(0, 0, 0, 0.3);
	text-align: left;
	transform: translateY(-100%) scale(0);
	transform-origin: bottom;
	opacity: 0;

    
	&::after
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 20px;
		height: 20px;
		background: white;
		border-radius: 0 0 5px 0;
		transform: translate(-50%, 50%) rotate(45deg);
		transform-origin: center;
    
	&::before {
  		padding: 30px;
  		background: grey;
  		border-radius: 5px 5px 0 0;
	}

.dialog__bottom
  padding 30px
  background $color--white
  border-radius 0 0 5px 5px

`
