import React, { Component } from 'react'
import Modal from 'react-modal'
import { LoginWrapper, TopContainer, LoginButton, RememberMeText, LoginContent, LoginUserName, BagrundPiture, ChooseRegion, HeaderImgStyled, LoginPassword, RegiText, RegiComit, TopHeader, ForgotPasswordText, IconContainer, CloseButton, CheckBox } from './LoginStyles'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'

export default class Login extends Component {
	constructor() {
		super()

		this.state = {
			region: '',
			username: '',
			password: ''
            
		}
	}

	openModal = () => {
		this.setState({ modalIsOpen: true })
	}


	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}
    
	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}
    
	handleLogin = () => {
		alert('Region: ' + this.state.region + '/n', 'Username' )
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
                            <IconContainer><Icon icon={'lock_open'} iconSize={26} color={'#FFF'} /></IconContainer>
                            <TopHeader>Login</TopHeader>
                            <CloseButton onClick={this.closeModal}>
                                <Icon icon={'close'} iconSize={26} color={'#FFF'}/>
                            </CloseButton>
                        </TopContainer>
                        <LoginContent>
                            <HeaderImgStyled></HeaderImgStyled>
                            <ChooseRegion placeholder={this.props.region} value={this.state.value} onChange={this.handleChange}/>
                            <LoginUserName placeholder={this.props.userName} ></LoginUserName>
                            <LoginPassword placeholder={this.props.password} />
                            <RememberMeText>{this.props.rememberText}<CheckBox type="checkbox" /> <ForgotPasswordText>{this.props.forgotPassword}</ForgotPasswordText></RememberMeText>
                            <LoginButton onClick={this.handleLogin}>Login</LoginButton>
                            <RegiText>{this.props.regiText}<RegiComit href="http://odeumicons.surge.sh/">{this.props.comit}</RegiComit> </RegiText>
                        </LoginContent>
                    </Modal>
                </BagrundPiture>
            </div>
		)
	}

}
Login.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onAfterOpen: PropTypes.func,
	onRequestClose: PropTypes.func,
	contentLabel: PropTypes.string,
	region: PropTypes.string,
	userName: PropTypes.string,
	password: PropTypes.string,
	rememberText: PropTypes.string,
	forgotPassword: PropTypes.string,
	regiText: PropTypes.string,
	comit: PropTypes.string
}
Login.defaultProps = {
	isOpen: false,
	region: 'Skriv din kommune',
	userName: 'Brugernavn',
	password: 'Kodeord',
	rememberText: 'Husk mig',
	forgotPassword: 'Glemt Kodeord', 
	regiText: 'Brug for en konto?',
	comit: 'Tilmeld' 


}
