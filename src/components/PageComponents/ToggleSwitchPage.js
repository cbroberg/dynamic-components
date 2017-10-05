import React, { Component } from 'react'
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch'


class ToggleSwitchPage extends Component {

	state = {
		isChecked: false,
		valueCheck: null
	}

	handleChange = () => {
		this.setState(({ valueCheck }) => (
			{
				valueCheck: !valueCheck,
			}
		))
		console.log('Callback executed ... state.valueCheck = ', this.state.valueCheck)
	}

	toggleswitches = [
		{ component: <ToggleSwitch type={"square"} size={"small"} checked={false} onChange={this.handleChange} /> },
		{ component: <ToggleSwitch type={"round"} size={"small"} checked={true} /> },
		{ component: <ToggleSwitch checked={true} size={"large"} /> },
		{ component: <ToggleSwitch label="Rounded" type={"round"} checked={false} /> },
		{ component: <ToggleSwitch /> },
		{ component: <ToggleSwitch type={"round"} size={"large"} checked={true}/> },
	]

	toggles = () => (
		<div>
			{this.toggleswitches.map((toggle, index) => (
				<div key={index}>{toggle.component}</div>
			))}
		</div>
	)

	render() {
		console.log('state.valueCheck = ', this.state.valueCheck)
		const { isChecked } = this.state		
		return (
			<div>
				{this.toggles()}
				<ToggleSwitch size={"medium"} checked={isChecked} />
				<ToggleSwitch label="Rounded" type={"round"} checked={isChecked} />
			</div>		
		)
	}
}

export default ToggleSwitchPage
