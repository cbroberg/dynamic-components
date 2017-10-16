import React, { Component } from 'react'
// import Modal from 'components/Modal/Modal'
import { Button, Modal } from 'odeum-ui'

var messages = [
	'Good job, that is just perfect!', 
	'Hello that worked well ...', 
	'Awesome work dude!', 
	'Super hero work my friend!', 
	'Nice coding my man!',
	'You did something right!',
	'Alright you did it, so proud of you ',
	'Now we are getting somewhere'
]


function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)]
}

class ModalPage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			modalIsOpen: true,
			subtitle: 'Click Hello World'
		}
	}

	handleRequestClose = () => {
		this.setState({
			modalIsOpen: false
		})
	}

	openModal = () => {
		this.setState({ modalIsOpen: true, subtitle: 'Click Hello World' })
	}

	changeSubtitle = () => {
		this.setState({ subtitle: getRandomMessage() })
	}

	renderModal = () => {
		return (
			<div>
				<h1>Mr. Modal</h1>
				<h3>{this.state.subtitle}</h3>
				<div>
					<p>Here is a list:</p>
					<ul>
						<li>Modal Window Item 1</li>
						<li>Modal Window Item 2</li>
						<li>{this.state.subtitle}</li>
					</ul>

					<Button
						label={'Close Modal'}
						icon='close'
						iconSize={18}
						color={'#E74C3C'}
						onClick={this.handleRequestClose}
					/>

					<Button
						label={'Change subtitel'}
						icon='language'
						iconSize={18}
						color={'#2AC639'}
						onClick={this.changeSubtitle}
					/>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Button
					label={'Open Modal'}
					icon='open_in_new'
					iconSize={18}
					color={'#3B97D3'}
					onClick={this.openModal}
				/>
								
				<Modal 
					isOpen={this.state.modalIsOpen} 
					onRequestClose={this.handleRequestClose} 					
					icon={'web_asset'} 
					label={'This is a modal window'} 
					overlayScroll={false}
					render={this.renderModal}
				/>
			</div>
		)
	}
}

export default ModalPage
