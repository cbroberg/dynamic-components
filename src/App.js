import React, { Component } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import CopyToast from 'components/ToastStyles'

import CopyToClipboard from 'react-copy-to-clipboard'
import copy from 'copy-to-clipboard'

import Icon, { icons } from 'components/Icon/Icon'
import { DisplayIcon, CopyButton, Divider } from 'components/Styles'
import { StyledLoader } from 'components/Loader/StyledLoader'
// import logo from 'assets/logo_spin.png'

import Card from 'components/Card/Card'

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
			let codeToCopy = `<Icon icon={'${icon[1].name}'}/>`
			return (
				<div>
					<Card
						key={index}
						icon={icon[1].name}
						header={icon[1].action}
						content={icon[1].usage}
						onClick={(e) => this.copyToClipboard(e, icon[1].name)}
					/>

					<DisplayIcon key={index}>
						<div>
							<CopyToClipboard text={icon[1].name}><CopyButton color={'#fff'}>{icon[1].action}</CopyButton></CopyToClipboard>
						</div>
						<div>
							<Icon key={index} icon={icon[1].name} size={75} />
						</div>
						<div>
							<CopyToClipboard text={codeToCopy}><CopyButton color={'#81C1EA'}>Click to copy code</CopyButton></CopyToClipboard>
						</div>
					</DisplayIcon>
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
					<CopyToast
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

