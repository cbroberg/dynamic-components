import React, { Component } from 'react'

export default class NameForm extends Component {

	constructor(props) {
		super(props)
		this.state = { value: '' }
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}

	handleSubmit = (event) => {
		alert('A name was submitted: ' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
         			<input placeholder={"Please enter your name"} type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

