import React, { Component } from 'react'
import ModalLogin from 'components/ModalLogin/LoginModal'
import Button from 'components/Button/Button'
import { LoginWrapper } from './../ModalLogin/LoginStyles'

/* Todo: filenames */
class ModalLoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalIsOpen: false,
			commune: '',
			username: '',
			password: ''
            
		}
		// this.handleChange = this.handleChange.bind(this)
		// this.handleLogin = this.handleLogin.bind(this)
	}

	openModal = () => {
		this.setState({ modalIsOpen: true })
	}


	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}

	handleLogin() {
		alert('Commune: ' )
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
						
					/>

			</div>
		)
	}
}

export default ModalLoginPage