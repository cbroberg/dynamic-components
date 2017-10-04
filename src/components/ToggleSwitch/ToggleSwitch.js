import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledToggleSwitch } from 'components/ToggleSwitch/ToggleSwitchStyles'


class ToggleSwitch extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isChecked: props.checked
		}
	}
	
	toggleCheckboxChange = () => {
		this.setState(({ isChecked }) => (
			{
				isChecked: !isChecked,
			}
		))
	}

	render() {		
		const { label, type, /* checked */  } = this.props
		return (
			<StyledToggleSwitch>

				<input 
					type="checkbox" 
					value={label}
					id={type === "square" ? "input" : "inputround"} 
					checked={this.state.isChecked} 
					onChange={this.toggleCheckboxChange} />

				<span className={type === "square" ? "slider" : "slider round"}></span>
			
			</StyledToggleSwitch>
		)
	}
}

ToggleSwitch.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['square', 'round']),
	checked: PropTypes.bool
}

ToggleSwitch.defaultProps = {
	label: '',
	type: 'square',
	checked: false
}

export default ToggleSwitch
