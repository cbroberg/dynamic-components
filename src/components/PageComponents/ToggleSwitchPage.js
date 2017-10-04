import React, { Component } from 'react'
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch'


class ToggleSwitchPage extends Component {

	state = {
		isChecked: true
	}
	

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
