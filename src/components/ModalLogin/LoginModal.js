import React, { Component } from 'react'
import Modal from 'react-modal'
import { TopContainer, RememberMeText, LoginContent, LoginUserName, ChooseRegion, HeaderImgStyled, LoginPassword, RegiText, RegiComit, TopHeader, ForgotPasswordText, IconContainer, CloseButton, CheckBox } from './LoginStyles'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'

export default class Login extends Component {

	render() {
		const { isOpen, onRequestClose, style, commune, userName, password, label, icon, iconSize, iconClose, iconCloseSize, rememberText, forgotPassword,
			sign, handleLogin, labelButton } = this.props

		return (
			<div>
				<Modal
					isOpen={isOpen}
					onRequestClose={onRequestClose}
					style={style}
					contentLabel="Example Modal"
				>
					<TopContainer>
						<IconContainer>
							<Icon
								icon={icon}
								iconSize={iconSize} color={'#FFF'}
							/>
						</IconContainer>
						<TopHeader>{label}</TopHeader>
						<CloseButton onClick={onRequestClose}>
							<Icon icon={iconClose} iconSize={iconCloseSize} color={'#FFF'} />
						</CloseButton>
					</TopContainer>
					<LoginContent>
					<HeaderImgStyled />
					<ChooseRegion
						placeholder={commune}
					/* value={this.state.value} 
					onChange={this.handleChange} */
					/>
					<LoginUserName
						placeholder={userName}
					/>
					<LoginPassword
						placeholder={password}
					/>
					<RememberMeText>
						{rememberText}
						<CheckBox
							type="checkbox" />
						<ForgotPasswordText>
							{forgotPassword}
						</ForgotPasswordText>
					</RememberMeText>
					<Button style={{ width: "100%" }}
						onClick={handleLogin}
						label={labelButton}
						color={'#3B97D3'}
						>
						</Button>
					<RegiText>
						{this.props.regiText}
						<RegiComit>
							{sign}
						</RegiComit>
					</RegiText>
				</LoginContent>
				</Modal>
			</div>
		)
	}

}
Login.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onAfterOpen: PropTypes.func,
	onRequestClose: PropTypes.func,
	iconSize: PropTypes.number,
	color: PropTypes.string,
	contentLabel: PropTypes.string,
	region: PropTypes.string,
	userName: PropTypes.string,
	password: PropTypes.string,
	rememberText: PropTypes.string,
	forgotPassword: PropTypes.string,
	regiText: PropTypes.string,
	comit: PropTypes.string,
	style: PropTypes.object,
	header: PropTypes.string,
	handleLogin: PropTypes.func

}
Login.defaultProps = {
	isOpen: false,
	commune: 'Skriv din kommune',
	userName: 'Brugernavn',
	password: 'Kodeord',
	rememberText: 'Husk mig',
	forgotPassword: 'Glemt Kodeord',
	regiText: 'Brug for en konto?',
	sign: 'Tilmeld',
	labelButton: 'Login',



}
