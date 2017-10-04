import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledToggleSwitch, Toggle, Slider } from 'components/ToggleSwitch/ToggleSwitchStyles'


class ToggleSwitch extends Component {

	render() {
		
		return (
			<div>
				<StyledToggleSwitch>
					<Slider>{this.props.children}
					</Slider>
				</StyledToggleSwitch>
				
				<div><p/><br/></div>
				
				<Toggle>{this.props.children}
				</Toggle>


			</div>
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
