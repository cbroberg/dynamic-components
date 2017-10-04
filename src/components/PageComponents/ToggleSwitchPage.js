import React, { Component } from 'react'
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch'
// import {  Tog3 } from 'components/ToggleSwitch/new'
//Tog, Tog2,

class ToggleSwitchPage extends Component {

	state = {
		isChecked: true
	}
	
	
	// toggleCheckboxChange = () => {
	// 	console.log('Toggling ...')
	// 	this.setState(({ isChecked }) => (
	// 		{
	// 			isChecked: !isChecked,
	// 		}
	// 	))
	// }

	render() {
		const { isChecked } = this.state
		console.log('ToggleSwitch render: ', isChecked)
		return (
			<div>
				<div>
					<ToggleSwitch /* label="Squared" type={"square"} */ checked={isChecked} />
				</div>
				<div>
					<ToggleSwitch label="Rounded" type={"round"} checked={isChecked} />
				</div>
			</div>
		)
	}
}

export default ToggleSwitchPage

