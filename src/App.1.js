import React, { Component } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import CopyToast from 'components/ToastStyles'

import CopyToClipboard from 'react-copy-to-clipboard'
import copy from 'copy-to-clipboard'

import Icon, { icons } from 'components/Icon/Icon'
import { DisplayIcon, CopyButton, LogoImg } from 'components/Styles'
import { StyledLoader, SpinLogo } from 'components/Loader/StyledLoader'
import logo from 'assets/logo_spin.png'

import { StyledCard, StyledCardImage, StyledCardContainer, StyledCardHeader, StyledCardContent, StyledCardIcon } from 'components/Card/StyledCard'
import Card from 'components/Card/Card'


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
				<Card image={require(`assets/avatar.png`)} alternate='Avatar' header='Jane Doe' content='JavaScript Developer' />
				<Card image={require(`assets/avatar2.png`)} alternate='Avatar' header='John Doe' content='PHP Developer' />
				<Card image={require(`assets/dubai.png`)} alternate='Christian Broberg' header='Christian Broberg' content='Product Development' onClick={(e) => this.copyToClipboard(e, 'That is one handsome guy :)')} />
				<Card image={require(`assets/mettebugge.png`)} alternate='Mette Bugge' header='Mette Bugge' content='The Girlfriend' onClick={(e) => this.copyToClipboard(e, 'This is the girlfriend')} />

				<StyledCard>
					<StyledCardImage src={require(`assets/avatar2.png`)} alt="Avatar" />
					<StyledCardContainer>
						<StyledCardHeader>John Doe</StyledCardHeader>
						<StyledCardContent>PHP Developer</StyledCardContent>
					</StyledCardContainer>
				</StyledCard>
				<StyledCard onClick={(e) => this.copyToClipboard(e, 'That is one handsome guy :)')}>
					<StyledCardImage src={require(`assets/dubai.png`)} alt="Avatar" />
					<StyledCardContainer>
						<StyledCardHeader>Christian Broberg</StyledCardHeader>
						<StyledCardContent>Product Development</StyledCardContent>
					</StyledCardContainer>
				</StyledCard>
				<StyledCard onClick={(e) => this.copyToClipboard(e, 'This is the girlfriend')}>
					<StyledCardImage src={require(`assets/mettebugge.png`)} alt="Avatar" />
					<StyledCardContainer>
						<StyledCardHeader>Mette Bugge</StyledCardHeader>
						<StyledCardContent>The Girlfriend</StyledCardContent>
					</StyledCardContainer>
				</StyledCard>				
				<StyledCard>
					<StyledCardIcon onClick={(e) => this.copyToClipboard(e, `<Icon icon={'cloud_download'}/>`)}>
						<Icon icon={'cloud_download'} size={150} />
					</StyledCardIcon>
					<StyledCardContainer>
						<StyledCardHeader>Download</StyledCardHeader>
						<StyledCardContent>Use for downloading data and assets</StyledCardContent>
					</StyledCardContainer>
				</StyledCard>
				<CopyToast
					position="top-right"
					type="default"
					autoClose={3000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					pauseOnHover
				/>
				<div>
					<StyledLoader size="xs" />
					<StyledLoader size="small" />
					<StyledLoader />
					<StyledLoader size="large" />
					<StyledLoader size="xl"/>

					<SpinLogo time="5s">
						<LogoImg src={logo} alt="Logo" />
					</SpinLogo>

					{/* {this.renderIcons()} */}
				</div>
			</div>
		)
	}
}

export default App

