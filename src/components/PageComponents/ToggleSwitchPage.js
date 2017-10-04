import React, { Component } from 'react'
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch'


class ToggleSwitchPage extends Component {

	state = {
		isChecked: false
	}
	
	toggleswitches = [
		{ component: <ToggleSwitch checked={true} /> },
		{ component: <ToggleSwitch label="Rounded" type={"round"} checked={false} /> },
		{ component: <ToggleSwitch /> }
	]

	toggles = () => (
		<div>
			{this.toggleswitches.map((toggle, index) => (
				<div key={index}>{toggle.component}</div>
			))}
		</div>
	)

	render() {
		const { isChecked } = this.state		
		return (
			<div>
				<div>
					<ToggleSwitch /* label="Squared" type={"square"} */ checked={isChecked} />
				</div>
				<div>
					<ToggleSwitch label="Rounded" type={"round"} checked={isChecked} />
				</div>
				{this.toggles()}
			</div>
		)
	}
}

export default ToggleSwitchPage
