import React, { Component } from 'react'

import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.min.css'

import copy from 'copy-to-clipboard'

import { Divider, StyledToast } from 'components/Styles'
import { StyledLoader } from 'components/Loader/StyledLoader'
// import logo from 'assets/logo_spin.png'

import Card from 'components/Card/Card'
import { icons } from './components/Icon/Icon'

const cardImages = []
cardImages.push(require('assets/avatar_female.png'))
cardImages.push(require('assets/avatar_male.png'))
cardImages.push(require('assets/christian.png'))
cardImages.push(require('assets/mette.png'))

class App extends Component {

	notify = (message) => toast.success(message)

	copyToClipboard(e, text) {
		e.preventDefault()
		copy(text)
		this.notify(`${text} ... has been copyied to the clipboard`)
	}

	renderIcons() {
		return Object.entries(icons).map((icon, index) => {
			return (
				<div>
					<Card
						key={index}
						icon={icon[1].name}
						header={icon[1].action}
						content={icon[1].usage}
						onClick={(e) => this.copyToClipboard(e, icon[1].name)}
					/>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				<Divider>
					<Card 
						image={cardImages[0]} 
						alt='Avatar' 
						header='Jane Doe' 
						content='JavaScript Developer' 
						onClick={(e) => this.copyToClipboard(e, 'Meet Jane Doe')} 
					/>

					<Card 
						image={cardImages[1]} 
						alt='Avatar' 
						header='John Doe' 
						content='PHP Developer' 
						onClick={(e) => this.copyToClipboard(e, 'Meet John Doe')} 
					/>
					
					<Card 
						image={cardImages[2]} 
						alt='Christian Broberg' 
						header='Christian Broberg' 
						content='Product Development' 
						onClick={(e) => this.copyToClipboard(e, 'That is one handsome guy')} 
					/>
					
					<Card 
						image={cardImages[3]} 
						alt='Mette Bugge' 
						header='Mette Bugge' 
						content='The Girlfriend' 
						onClick={(e) => this.copyToClipboard(e, 'This is the girlfriend')} 
					/>

					<Card />
				</Divider>

				<Divider>
					{this.renderIcons()}
				</Divider>
				
				<Divider>									
					<StyledLoader size='xxs' velocity='fast' />
					<StyledLoader size='xs' velocity='superfast' />
					<StyledLoader size='small' />
					<StyledLoader velocity='medium' />
					<StyledLoader size='large' />
					<StyledLoader size='xl' velocity='slow' />
				</Divider>
				<div>
					<StyledToast
						position='top-right'
						type='default'
						autoClose={3000}
						hideProgressBar={true}
						newestOnTop={false}
						closeOnClick
						pauseOnHover
					/>
				</div>
			</div>
		)
	}
}

export default App

