import React, { Component } from 'react'
import ModalLogin from 'components/ModalLogin/LoginModal'
import Button from 'components/Button/Button'
import { LoginWrapper, RememberMeText, LoginUserName, ChooseRegion, HeaderImgStyled, LoginPassword, RegiText, RegiComit, ForgotPasswordText, CheckBox } from './../ModalLogin/LoginStyles'

/* Todo: filenames */
class ModalLoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalIsOpen: true,
			commune: '',
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

	handleLogin = (event) => {
		alert('Commune:')
	}

	render() {
		return (
			<div>
				<Button
					label={'Open Login Modal'}
					icon='open_in_new'
					iconSize={18}
					color={'#3B97D3'}
					onClick={this.openModal}
				/>
				<ModalLogin
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					handleLogin={this.handleLogin}
					style={LoginWrapper}
					label={'Login'}
					icon={'lock_open'}
					iconSize={26}
					iconClose={'close'}
					iconCloseSize={26}
					content={
						<Content
							commune= 'Skriv din kommune'
							userName='Brugernavn'
							password= 'Kodeord'
						/>
					}

				/>

			</div>
		)
	}
}

export default ModalLoginPage

const Content = ({ userName, password, rememberText, forgotPassword, labelButton, regiText, commune, sign }) => {
	return (
		<div>
			<HeaderImgStyled />
			<ChooseRegion
				placeholder={commune}
			// value={value} 
			/* onChange={this.handleChange}  */
			/>

			<LoginUserName placeholder={userName} />
			<LoginPassword placeholder={password} />

			<RememberMeText>
				{rememberText}
				<CheckBox type="checkbox" />
				<ForgotPasswordText>
					{forgotPassword}
				</ForgotPasswordText>
			</RememberMeText>

			<Button
				style={{ width: "100%" }}
				onClick={this.handleLogin}
				label={labelButton}
				color={'#3B97D3'}
			/>

			<RegiText>
				{regiText}
				<RegiComit>
					{sign}
				</RegiComit>
			</RegiText>
		</div>
	)
}

Content.defaultProps = {
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
