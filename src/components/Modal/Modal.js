import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledModal, StyledModalHeader, StyledModalContent, StyledModalHeaderIcon, StyledModalHeaderTitle, StyledModalHeaderClose } from 'components/Modal/ModalStyles'
import Icon from 'components/Icon/Icon'
import * as colors from 'theme/colors'


class Modal extends Component {


	render() {
		/* Props */
		const { isOpen, onAfterOpen, onRequestClose, closeTimeoutMS, style, content, icon, label } = this.props

		return (
			<div>
				<StyledModal 
					isOpen={isOpen} 
					onAfterOpen={onAfterOpen} 
					closeTimeoutMS={closeTimeoutMS} 
					onRequestClose={onRequestClose} 
					contentLabel={label}
					style={style}>
					
					<StyledModalHeader>
				
						<StyledModalHeaderIcon>
							<Icon icon={icon} iconSize={30} color={colors.MODAL_ICON} active={true} />
						</StyledModalHeaderIcon>
				
						<StyledModalHeaderTitle>{label}</StyledModalHeaderTitle>
				
						<StyledModalHeaderClose onClick={(e) => { e.preventDefault(); onRequestClose() }}>
							<Icon icon={'close'} iconSize={30} color={colors.MODAL_ICON} active={true} />
						</StyledModalHeaderClose>
				
					</StyledModalHeader>
					
					<StyledModalContent>
						{content}
					</StyledModalContent>
				
				</StyledModal>
			</div>
		)
	}
}

Modal.propTypes = {
	myProp: PropTypes.string
}

Modal.defaultProps = {
	myProp: ''
}

export default Modal

