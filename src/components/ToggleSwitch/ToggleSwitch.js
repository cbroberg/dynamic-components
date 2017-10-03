import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledToggleSwitch } from 'components/ToggleSwitch/ToggleSwitchStyles'


class ToggleSwitch extends Component {

	render() {
		const { myProp } = this.props
		return (
			<StyledToggleSwitch myProp={myProp}>{this.props.children}
			</StyledToggleSwitch>
		)
	}
}

ToggleSwitch.propTypes = {
	myProp: PropTypes.string
}

ToggleSwitch.defaultProps = {
	myProp: ''
}

export default ToggleSwitch
