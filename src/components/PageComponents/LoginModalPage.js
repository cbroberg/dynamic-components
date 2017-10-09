import React, { Component } from 'react'
import Modal from 'components/Modal/Modal'
import Button from 'components/Button/Button'
import ButtonPanel from 'components/ButtonPanel/ButtonPanel'
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch'
import { Account, Username, Password, HeaderImage, Remember } from './../ModalLogin/LoginStyles'

/* Todo: filenames */
class ModalLoginPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalIsOpen: true
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
		this.setState({ modalIsOpen: false })
	}

	handleRender = () => {
		return (
			<Content
				onRequestClose={this.onRequestClose}
				handleLogin={this.handleLogin}
			/>		
		)
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
					width={'590px'}
					render={this.handleRender}
				/>
			</div>
		)
	}
}

export default ModalLoginPage

class Content extends Component {

	state = {
		isChecked: true
	}

	handleChange = () => {
		this.setState(({ isChecked }) => (
			{
				isChecked: !isChecked,
			}
		))
	}

	render() {
		const { onRequestClose, handleLogin } = this.props
		return (
			<div>
				<HeaderImage />

				<Account placeholder='Kundenummer' />
				<Username placeholder='Brugernavn' />
				<Password placeholder='Adgangskode' type='password' />

				<ToggleSwitch checked={this.state.isChecked} size="small" onChange={this.handleChange} />

				<Remember onClick={this.handleChange}>Husk min adgangskode</Remember>

				<br /><br /><br />

				<ButtonPanel>
					<Button
						icon={'cancel'}
						onClick={onRequestClose}
						label={'Cancel'}
						color={'#E74C3C'}
					/>

					<Button
						icon={'help_outline'}
						label={'Glemt password?'}
						color={'#81C1EA'}
					/>

					<Button
						icon={'add_circle_outline'}
						label={'Opret konto'}
						color={'#81C1EA'}
					/>

					<Button
						icon={'lock_open'}
						onClick={handleLogin}
						label={'Login'}
						color={'#25B89A'}
					/>
				</ButtonPanel>

				<br /><br />
			</div>
		)
	}
}


// Content.defaultProps = {
// 	isOpen: false
// }
