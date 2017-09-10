import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BUTTON_DEFAULT, BUTTON_TEXT, ICON_DEFAULT_COLOR } from 'theme/colors'
// import theme from 'theme/theme'
import Icon from 'components/Icon/Icon'
import StyledButton, { StyledButtonText } from './ButtonStyles'

//TODO: constructor, switch buttonType, sizes, fonts, and colors from theme!!!
class Button extends Component {

	constructor(props) {
		super(props)
		this.state = { message: this.props.children }
	}

	render() {
		const { id, icon, size, color, disabledColor, active, iconColor, style, isDisabled, onClick } = this.props
		let _hasIcon
		let _hasText = this.props.children
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
							size={size} 
							color={BUTTON_TEXT} 
							active={active} 
							iconColor={iconColor}
							style={style} />
							<span>{this.props.children}</span>

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

					<StyledButtonText>{this.props.children}</StyledButtonText>

				</StyledButton>
			</div>
		)


	}
}

Button.propTypes = {
	icon: PropTypes.string,
	size: PropTypes.number,
	color: PropTypes.string,
	active: PropTypes.bool,
	iconColor: PropTypes.string,
	isDisabled: PropTypes.bool,
	disabledColor: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.shape({
		marginRight: PropTypes.string
	})
}

Button.defaultProps = {
	name: '',
	size: 18,
	color: BUTTON_DEFAULT,
	disabledColor: '#BDC2C6',
	active: true,
	iconColor: ICON_DEFAULT_COLOR,
	isDisabled: false,
	style: {
		marginRight: '8px'
	}
}

export default Button
