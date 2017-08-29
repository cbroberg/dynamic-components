import React, { Component } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import CopyToast from 'components/ToastStyles'

import CopyToClipboard from 'react-copy-to-clipboard'
import copy from 'copy-to-clipboard'

import Icon, { icons } from 'components/Icon/Icon'
import { DisplayIcon, CopyButton, /* LogoImg */ } from 'components/Styles'
import { StyledLoader, /* SpinLogo */ } from 'components/Loader/StyledLoader'
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
			)
		})
	}

	render() {
		return (
			<div>
				<div>
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

					<Card
						icon={'cloud_download'}
						header='Download'
						content='Use for downloading data and assets'
						onClick={(e) => this.copyToClipboard(e, 'cloud_download')}
					/>
					
				</div>

				<div>					
					<StyledLoader size='xl' velocity='slow' />
					<StyledLoader size='large' />
					<StyledLoader velocity='medium' />
					<StyledLoader size='small' />
					<StyledLoader size='xs' velocity='fast' />
					<StyledLoader size='xxs' velocity='superfast' />

	{/* 				<SpinLogo time='5s'>
						<LogoImg src={logo} alt='Logo' />
					</SpinLogo>
 */}
					{/* {this.renderIcons()} */}

				</div>
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

