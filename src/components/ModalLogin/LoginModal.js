import React from 'react'
import Modal from 'react-modal'
import { LoginWrapper, TopContainer, LoginButton, RememberMeText, LoginContent, LoginUserName, BagrundPiture, ChooseRegion, HeaderImgStyled, LoginPassword, RegiText, RegiComit, TopHeader, ForgotPasswordText, IconContainer, CloseButton, CheckBox } from './LoginStyles'
import Icon from '../Icon/Icon'

export default class Login extends React.Component {
	constructor() {
		super()

		this.state = {
			modalIsOpen: false
		}

		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}

	openModal() {
		this.setState({ modalIsOpen: true })
	}


	closeModal() {
		this.setState({ modalIsOpen: false })
	}

	render() {
		return (
            <div>
                <button onClick={this.openModal}>Login</button>
                <BagrundPiture>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={LoginWrapper}
                        contentLabel="Example Modal"
                    >
                        <TopContainer>
                            <IconContainer><Icon icon={'lock_open'} color={'#FFF'} /></IconContainer>
                            <TopHeader>Login</TopHeader>
                            <CloseButton onClick={this.closeModal}>
                                <Icon icon={'close'} iconSize={26} color={'#FFF'}/>
                            </CloseButton>
                        </TopContainer>
                        <LoginContent>
                            <HeaderImgStyled></HeaderImgStyled>
                            <ChooseRegion placeholder="    Skriv din kommune" />
                            <LoginUserName placeholder="    Brugernavn" ></LoginUserName>
                            <LoginPassword placeholder="    Kodeord" />
                            <RememberMeText>Husk mig <CheckBox type="checkbox" /> <ForgotPasswordText>Glemt Kodeord?</ForgotPasswordText></RememberMeText>
                            <LoginButton>Login</LoginButton>
                            <RegiText>Brug for en konto ? <RegiComit href="http://odeumicons.surge.sh/"> Tilmeld</RegiComit> </RegiText>
                        </LoginContent>
                    </Modal>
                </BagrundPiture>
            </div>
		)
	}
}