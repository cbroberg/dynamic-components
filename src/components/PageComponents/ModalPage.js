import React, { Component } from 'react'
import Modal from 'components/Modal/Modal'
import Button from 'components/Button/Button'

class ModalPage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			modalIsOpen: false,
			subtitle: ''
		}
	}

	onRequestClose = () => {
		this.setState({
			modalIsOpen: false
		})
	}

	openModal = () => {
		this.setState({ modalIsOpen: true, subtitle: 'Hello' })
	}

	changeSubtitle = () => {
		this.setState({ subtitle: 'Hello that worked well ...' })
	}

	render() {
		return (
			<div>
				<Button
					label={'Open Modal Window'}
					icon='open_in_new'
					iconSize={18}
					color={'#3B97D3'}
					onClick={this.openModal}
				/>
								
				<Modal 
					isOpen={this.state.modalIsOpen} 
					onRequestClose={this.onRequestClose} 
					/*content={'This is content'}*/
					content={<Content 
								onRequestClose={this.onRequestClose} 
								changeSubtitle={this.changeSubtitle} 
								subtitle={this.state.subtitle} 
								firstName={'Christian'} 
								lastName={'Broberg'}/>}
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
			<h1>Welcome {props.firstName} {props.lastName}</h1>
			<h2>{props.subtitle}</h2>
			<div>
				<p>Here is a list:</p>
				<ul>
					<li>Modal Window Item 1</li>
					<li>Modal Window Item 2</li>
				</ul>

				<Button
					label={'Close Modal Window'}
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
