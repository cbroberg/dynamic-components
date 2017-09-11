import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BUTTON_DEFAULT, BUTTON_TEXT, ICON_DEFAULT_COLOR } from 'theme/colors'
// import theme from 'theme/theme'
import Icon from 'components/Icon/Icon'
import StyledButton, { StyledButtonText, StyledButtonTextNoIcon } from './ButtonStyles'


//TODO: constructor, switch buttonType, sizes, fonts, and colors from theme!!!
class Button extends Component {

	constructor(props) {
		super(props)

		this.state = { 
			message: this.props.children,
			focus: false 
		}
	}

	render() {
		const { id, label, icon, iconSize, color, disabledColor, active, iconColor, style, isDisabled, onClick } = this.props
		let _hasIcon
		let _hasText = label
		let _hasIconAndText
		if (icon) {
			_hasIcon = true
			_hasIconAndText = _hasText
			return (
				<div>
					<StyledButton 
						id={id} 
						onClick={onClick} 
						color={color} 
						isDisabled={isDisabled} 
						disabledColor={disabledColor} 
						hasIcon={_hasIcon} 
						hasText={_hasText} 
						hasIconAndText={_hasIconAndText}>

						<Icon 
							icon={icon} 
							size={iconSize} 
							color={BUTTON_TEXT} 
							active={active} 
							iconColor={iconColor}
							style={style} 
						/>
						
						<StyledButtonText>{label}</StyledButtonText>

					</StyledButton>
				</div>
			)
		}
		return (
			<div>
				<StyledButton 
					id={id} 
					onClick={onClick} 
					color={color} 
					isDisabled={isDisabled} 
					disabledColor={disabledColor}>

					<StyledButtonTextNoIcon>{label}</StyledButtonTextNoIcon>

				</StyledButton>
			</div>
		)


	}
}

Button.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.string,
	iconSize: PropTypes.number,
	color: PropTypes.string,
	active: PropTypes.bool,
	iconColor: PropTypes.string,
	isDisabled: PropTypes.bool,
	disabledColor: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.shape({
		marginRight: PropTypes.string
	}),
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
}

Button.defaultProps = {
	label: '',
	icon: '',
	iconSize: 18,
	color: BUTTON_DEFAULT,
	disabledColor: '#BDC2C6',
	active: true,
	iconColor: ICON_DEFAULT_COLOR,
	isDisabled: false,
	style: {
		marginRight: '8px'
	},
	type: 'button',
	size: 'small',
}

export default Button
