import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { icons } from './icons'
import { ICON_DEFAULT_COLOR } from 'theme/colors'

class Icon extends Component {

	setColor(active) {
		if (active === true) {
			return (this.props.color)
		} else {
			return (this.props.iconColor)
		}
	}

	render() {
		const { icon, iconSize, active, style } = this.props
		const IconComponent = icons[icon].component
		return <IconComponent size={iconSize} color={this.setColor(active)} style={style} />
	}
}

export default Icon

Icon.propTypes = {
	icon: PropTypes.string,
	iconSize: PropTypes.number,
	color: PropTypes.string,
	active: PropTypes.bool,
	iconColor: PropTypes.string,
	style: PropTypes.shape({
		marginRight: PropTypes.string
	})
}

/* 
React does not provide default props to a nested array of items of a certain shape. 
Default props are only shallowly merged. So when Icon is used alone the defaultProps needs to be declared here. 
Button has it's own defaultProps when Icon is used in Button  .
*/

Icon.defaultProps = {
	icon: '',
	iconSize: 18,
	color: ICON_DEFAULT_COLOR,
	active: true,
	iconColor: ICON_DEFAULT_COLOR,
	style: {
		marginRight: '0px'
	}
}

