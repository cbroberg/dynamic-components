import React, { Component } from 'react'
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch'
// import {  Tog3 } from 'components/ToggleSwitch/new'
//Tog, Tog2,
class ToggleSwitchPage extends Component {

	state = {
		isChecked: true
	}
	
	toggleCheckboxChange = () => {
		this.setState(({ isChecked }) => (
			{
				isChecked: !isChecked,
			}
		))
	}

	render() {
		const { isChecked } = this.state
		return (
			<div>
				<ToggleSwitch>
					<input type="checkbox" id="input" checked={isChecked} onChange={this.toggleCheckboxChange} />
					<span className="slider"></span>
				</ToggleSwitch>
				<ToggleSwitch>
					<input type="checkbox" id="inputround" checked={isChecked} onChange={this.toggleCheckboxChange} />
					<span className="slider round"></span>
				</ToggleSwitch>
			</div>
		)
	}
}

export default ToggleSwitchPage

