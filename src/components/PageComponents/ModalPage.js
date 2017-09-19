import React, { Component } from 'react'
import Modal from 'components/Modal/Modal'
import Button from 'components/Button/Button'

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

	onRequestClose = () => {
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
					onRequestClose={this.onRequestClose} 					
					icon={'star'} 
					label={'This is a modal window'} 
					overlayScroll={false}
					content={
						<Content 
							onRequestClose={this.onRequestClose} 
							changeSubtitle={this.changeSubtitle} 
							subtitle={this.state.subtitle} 
							firstName={'Mr.'} 
							lastName={'Modal'}/>}
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
			<h3>{props.subtitle}</h3>
			<div>
				<p>Here is a list:</p>
				<ul>
					<li>Modal Window Item 1</li>
					<li>Modal Window Item 2</li>
					<li>{props.subtitle}</li>
				</ul>

				<Button
					label={'Close Modal'}
					icon='close'
					iconSize={18}
					color={'#E74C3C'}
					onClick={props.onRequestClose}
				/>

				<Button
					label={'Hello World'}
					icon='language'
					iconSize={18}
					color={'#2AC639'}
					onClick={props.changeSubtitle}
				/>


			</div>
		</div>
	)
}
