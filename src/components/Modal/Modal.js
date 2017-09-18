import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledModal, StyledModalHeader, StyledModalContent, StyledModalHeaderIcon, StyledModalHeaderTitle, StyledModalHeaderClose } from 'components/Modal/ModalStyles'
import Icon from 'components/Icon/Icon'
import * as colors from 'theme/colors'


class Modal extends Component {


	render() {

		const { isOpen, onAfterOpen, onRequestClose, closeTimeoutMS, style, content, icon, label, shouldCloseOnOverlayClick } = this.props

		return (
			<div>
				<StyledModal 
					isOpen={isOpen} 
					onAfterOpen={onAfterOpen} 
					closeTimeoutMS={closeTimeoutMS} 
					onRequestClose={onRequestClose} 
					contentLabel={label}
					style={style}
					shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}>
					
					<StyledModalHeader>
				
						<StyledModalHeaderIcon>
							<Icon icon={icon} iconSize={30} color={colors.MODAL_ICON} active={true} />
						</StyledModalHeaderIcon>
				
						<StyledModalHeaderTitle>{label}</StyledModalHeaderTitle>
				
						<StyledModalHeaderClose onClick={onRequestClose}>
							<Icon icon={'close'} iconSize={30} color={colors.MODAL_ICON} active={true} />
						</StyledModalHeaderClose>
				
					</StyledModalHeader>
					
					<StyledModalContent>
						{content ? content : this.defaultProps.content}
					</StyledModalContent>
				
				</StyledModal>
			</div>
		)
	}
}

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onAfterOpen: PropTypes.func,
	onRequestClose: PropTypes.func,
	closeTimeoutMS: PropTypes.number,
	style: PropTypes.shape({
		overlay: PropTypes.object,
		content: PropTypes.object
	}),
	content: PropTypes.any,
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	shouldCloseOnOverlayClick: PropTypes.bool
}

Modal.defaultProps = {
	isOpen: false,
	label: '',
	content: 'You forgot to put some content here ...'
}

export default Modal

