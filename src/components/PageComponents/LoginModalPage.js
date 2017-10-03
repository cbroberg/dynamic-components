import React, { Component } from 'react'
import Modal from 'components/Modal/Modal'
import Button from 'components/Button/Button'
import { RememberMeText, LoginUserName, ChooseRegion, HeaderImage, LoginPassword, RegiText, RegiComit, ForgotPasswordText, CheckBox } from './../ModalLogin/LoginStyles'

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


	onRequestClose = () => {
		this.setState({ modalIsOpen: false })
	}

	handleLogin = (event) => {
		window.alert('Du er nu logget ind')
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

				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.onRequestClose}
					icon={'lock_open'}
					label={'Login'}
					overlayScroll={false}
					content={
						<Content
							onRequestClose={this.onRequestClose}
							handleLogin={this.handleLogin}
							subtitle={this.state.subtitle}
							firstName={'Mr.'}
							lastName={'Modal'} 
						/>}
				/>
			</div>
		)
	}
}

export default ModalLoginPage

const Content = (props) => {
	const { rememberText, forgotPassword, regiText, sign } = props
	return (
		<div>
			<HeaderImage />
			<ChooseRegion placeholder='Indtast dit kundenummer'
			// value={value} 
			/* onChange={this.handleChange}  */
			/>

			<LoginUserName placeholder='Brugernavn' />
			<LoginPassword placeholder='Password' type='password' />

			<RememberMeText>
				{rememberText}
				
				<CheckBox type="checkbox" defaultChecked />
		
				<ForgotPasswordText>
					{forgotPassword}
				</ForgotPasswordText>
			</RememberMeText>

			<div style={{ align: 'center' }}>
				<div style={{ align: 'left' }}>
					<Button
						icon={'cancel'}
						onClick={this.handleLogin}
						label={'Cancel'}
						color={'#E74C3C'}
					/>				
				</div>

				<div style={{ align: 'right' }}>
					<Button
						icon={'lock_open'}
						onClick={this.handleLogin}
						label={'Login'}
						color={'#25B89A'}
					/>
				</div>
			</div>

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
	rememberText: 'Husk mig',
	forgotPassword: 'Glemt Kodeord',
	regiText: 'Brug for en konto?',
	sign: 'Tilmeld',
	labelButton: 'Login',

}
