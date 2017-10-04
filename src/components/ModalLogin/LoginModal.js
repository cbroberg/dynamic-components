import React, { Component } from 'react'
import Modal from 'react-modal'
import { TopContainer, LoginContent, TopHeader, IconContainer, CloseButton } from './LoginStyles'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'


export default class Login extends Component {

	render() {
		const { isOpen, onRequestClose, style, label, icon, iconSize, iconClose, iconCloseSize, content } = this.props

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
							<Icon
								icon={iconClose}
								iconSize={iconCloseSize} 
								color={'#FFF'} />
						</CloseButton>
					</TopContainer>
					<LoginContent>
						{content}
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
	handleLogin: PropTypes.func

}
Login.defaultProps = {
	isOpen: false,
}
