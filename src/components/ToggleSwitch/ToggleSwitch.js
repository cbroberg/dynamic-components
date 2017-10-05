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
		const { label, type, size /* checked */  } = this.props
		return (
			<StyledToggleSwitch size={size}>

				<input 
					type="checkbox" 
					value={label}
					id={type === "square" ? "input" : "inputround"} 
					checked={this.state.isChecked} 
					onChange={this.toggleCheckboxChange} />

				<span className={type === "square" ? "slider" : "slider round"} />
			
			</StyledToggleSwitch>
		)
	}
}

ToggleSwitch.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['square', 'round']),
	checked: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}

ToggleSwitch.defaultProps = {
	label: '',
	type: 'square',
	checked: false,
	size: 'medium'
}

export default ToggleSwitch
