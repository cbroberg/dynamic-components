import React, { Component } from 'react'
import Modal from 'components/Modal/Modal'

class ModalPage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			modalIsOpen: false
		}
	}

	onRequestClose = () => {
		this.setState({
			modalIsOpen: false
		})
	}

	openModal = () => {
		this.setState({ modalIsOpen: true })
	}


	render() {
		return (
			<div>
				<button onClick={this.openModal}>Open Modal Window</button>

				<Modal 
					isOpen={this.state.modalIsOpen} 
					onRequestClose={this.onRequestClose} 
					content={<Content onRequestClose={this.onRequestClose} firstName={'Christian'} lastName={'Broberg'}/>} 
					icon={'star'} 
					label={'This is a modal window'} 
				/>
				
			</div>
		)
	}
}

export default ModalPage

const Content = (props) => {
	return (
		<div>
			<h1>{props.firstName} {props.lastName}</h1>
			<div>
				<p>Here is a list:</p>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
				</ul>
				<button onClick={props.onRequestClose}>Close Modal Window</button>
			</div>
		</div>
	)
}

