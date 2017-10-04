import React, { Component } from 'react'
// import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch'
<<<<<<< HEAD
import {  Tog3 } from 'components/ToggleSwitch/new'
//Tog, Tog2,
=======
import { Tog, Tog2 } from 'components/ToggleSwitch/new'

>>>>>>> cd3da1d4629dfa86f773fc18c31d43b698eafec1
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

				{/* <Tog class="switch">
					<input type="checkbox" id="input" checked={isChecked} onChange={this.toggleCheckboxChange} />
						<label htmlFor="input"></label>
          		</Tog> */}

				<div>
					<Tog3 class="label">
						<input type="checkbox" id="input" checked={isChecked} onChange={this.toggleCheckboxChange} />
						<span className="slider"></span>
					</Tog3>
				</div>
				<div>
					<Tog3 class="label">
						<input type="checkbox" id="inputround" checked={isChecked} onChange={this.toggleCheckboxChange} />
						<span className="slider round"></span>
					</Tog3>
				</div>

				{/* <Tog2 class="switch">
					<input type="checkbox" id="input" checked={isChecked} onChange={this.toggleCheckboxChange} />
					<label htmlFor="input"></label>
				</Tog2> */}

			</div>
		)
	}
}

export default ToggleSwitchPage

