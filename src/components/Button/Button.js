import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BUTTON_TEXT, ICON_DEFAULT_COLOR } from 'theme/colors'
import theme from 'framework/assets/theme'
import Icon from 'components/Icon/Icon'
import StyledButton from './ButtonStyles'

//TODO: constructor, switch buttonType, sizes, fonts, and colors from theme!!!
class Button extends Component {

	constructor(props) {
		super(props)
		this.state = { message: this.props.children }
	}

	render() {
		return (
			<StyledButton id={this.props.id} onClick={this.props.onClick}>
				<Icon icon={this.props.icon} size={this.props.size} color={BUTTON_TEXT} active={true} style={theme.iconButtonStyle} /><span>{this.props.children}</span>
			</StyledButton>
		)
	}
}

Button.propTypes = {
	icon: PropTypes.string,
	size: PropTypes.number,
	color: PropTypes.string,
	active: PropTypes.bool,
	id: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.shape({
		verticalAlign: PropTypes.string,
		paddingRight: PropTypes.string
	})
}

Button.defaultProps = {
	name: 'info',
	size: 75,
	color: ICON_DEFAULT_COLOR,
	active: false,
	style: {
		verticalAlign: '-5px',
		paddingRight: '8px'
	}
}

export default Button
