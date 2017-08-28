import React, { Component } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import CopyToast from 'components/ToastStyles'

import CopyToClipboard from 'react-copy-to-clipboard'
import copy from 'copy-to-clipboard'

import Icon, { icons } from 'components/Icon'
import { DisplayIcon, CopyButton, Loader, LogoImg, SpinLogo } from 'components/Styles'
import logo from 'assets/logo_spin.png'

import { Card, CardImage, CardContainer, CardHeader, CardContent, CardIcon } from 'components/Cardstyles'


class App extends Component {

	notify = (message) => toast.success(message)

	copyToClipboard(e, text) {
		e.preventDefault()
		copy(text)
		this.notify(`${text} has been copyied to the clipboard ...`)
		// toast.success('The card data has been copyied to the clipboard')
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
				<Card>
					<CardImage src={require(`assets/avatar.png`)} alt="Avatar" />
					<CardContainer>
						<CardHeader>Jane Doe</CardHeader>
						<CardContent>JavaScript Developer</CardContent>
					</CardContainer>
				</Card>
				<Card>
					<CardImage src={require(`assets/avatar2.png`)} alt="Avatar" />
					<CardContainer>
						<CardHeader>John Doe</CardHeader>
						<CardContent>PHP Developer</CardContent>
					</CardContainer>
				</Card>
				<Card onClick={(e) => this.copyToClipboard(e, 'That is one handsome guy :)')}>
					<CardImage src={require(`assets/dubai.png`)} alt="Avatar" />
					<CardContainer>
						<CardHeader>Christian Broberg</CardHeader>
						<CardContent>Product Development</CardContent>
					</CardContainer>
				</Card>
				<Card onClick={(e) => this.copyToClipboard(e, 'This is the girlfriend')}>
					<CardImage src={require(`assets/mettebugge.png`)} alt="Avatar" />
					<CardContainer>
						<CardHeader>Mette Bugge</CardHeader>
						<CardContent>The Girlfriend</CardContent>
					</CardContainer>
				</Card>				
				<Card>
					<CardIcon onClick={(e) => this.copyToClipboard(e, `<Icon icon={'cloud_download'}/>`)}>
						<Icon icon={'cloud_download'} size={150} />
					</CardIcon>
					<CardContainer>
						<CardHeader>Download</CardHeader>
						<CardContent>Use for downloading data and assets</CardContent>
					</CardContainer>
				</Card>
				<CopyToast
					position="top-right"
					type="default"
					autoClose={9000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					pauseOnHover
				/>
				<div>
					<Loader size="xs" />
					<Loader size="small" />
					<Loader size="medium" />
					<Loader size="large" />
					<Loader size="xl" />

					<SpinLogo time="3s">
						<LogoImg src={logo} alt="Logo" />
					</SpinLogo>

					{/* {this.renderIcons()} */}
				</div>
			</div>
		)
	}
}

export default App

