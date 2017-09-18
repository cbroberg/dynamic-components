import React, { Component } from 'react'
import Modal from 'components/Modal/Modal'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		fontSize: '150px'
	}
}

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
					style={customStyles}
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
					<li>Modal Window Item 1</li>
					<li>Modal Window Item 2</li>
				</ul>
				<button onClick={props.onRequestClose}>Close Modal Window</button>
			</div>
		</div>
	)
}
