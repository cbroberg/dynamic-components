import React, { Component } from 'react'
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch'
import { Tog, Tog2 } from 'components/ToggleSwitch/new'

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

	onChange = () => {
		const { isChecked } = this.state
		this.setState({ isChecked: !isChecked })		
	}

	render() {
		const { isChecked } = this.state
		return (
			<div>
				{/* <ToggleSwitch>
					<input type="checkbox" id="input" checked={isChecked} onChange={this.toggleCheckboxChange}/>
					<label htmlFor="input"> Toggle </label>
				</ToggleSwitch> */}

				<Tog class="switch">
					<input type="checkbox" id="input" checked={isChecked} onChange={this.toggleCheckboxChange} />
						<label htmlFor="input"></label>
          		</Tog>

				<Tog2 class="switch">
					<input type="checkbox" id="input" checked={isChecked} onChange={this.toggleCheckboxChange} />
					<label htmlFor="input"></label>
				</Tog2>

			</div>
		)
	}
}

export default ToggleSwitchPage

