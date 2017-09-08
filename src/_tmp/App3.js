import React, { Component } from 'react'
import { toast } from 'react-toastify'
import copy from 'copy-to-clipboard'
import { Divider, StyledToast } from 'AppStyles'
import Loader from 'components/Loader/Loader'
import Card from 'components/Card/Card'
import Tag from 'components/Tag/Tag'

import IconCard from 'components/IconCard/IconCard'
import { icons } from 'components/Icon/Icon'

import ColorCard from 'components/ColorCard/ColorCard'
import { colors } from 'theme/colors'

import ColorPicker from 'components/ColorPicker/ColorPicker'


const cardImages = []
cardImages.push(require('assets/avatar_female.png')) // 0
cardImages.push(require('assets/avatar_male.png')) // 1
cardImages.push(require('assets/christian.png')) // 2
cardImages.push(require('assets/mette.png')) // 3
cardImages.push(require('assets/mathilde.png')) // 4
cardImages.push(require('assets/viola.png')) // 5
cardImages.push(require('assets/frederik.png')) // 6

class App extends Component {

	notify = (message) => toast.success(message)

	copyToClipboard(e, text) {
		// e.preventDefault()
		copy(text)
		this.notify(`"${text}" ... has been copyied to the clipboard`)
	}

	renderIcons() {
		return Object.entries(icons).map((icon, index) => {
			return (			
				<IconCard
					key={index}
					icon={icon[1].name}
					header={icon[1].action}
					content={icon[1].usage}
					tags={icon[1].tags}
					onClick={(e) => this.copyToClipboard(e, icon[1].name)}
				/>
			)
		})
	}

	render() {
		return (
			<div>
				<Divider>
					{colors.map((color, index) => (
						<ColorCard color={color.value} name={color.name} onClick={(e) => this.copyToClipboard(e, color.name + ': ' + color.value)} key={index} />
					))}
					<ColorCard />
				</Divider>
				
				<Divider>
					{this.renderIcons()}
				</Divider>

				<Divider>
					{colors.map((color, index) => (
						<Tag 
							color={color.value} 
							label={color.name} 
							url="http://odeumcode.com" 
							open={true} 
							onClick={(e) => this.copyToClipboard(e, color.name)} 
							key={index} />
					))}
				</Divider>

				<Divider>
					<Card
						image={cardImages[4]}
						alt='Mathilde Kronborg'
						header='Mathilde Kronborg'
						content='Creative Director'
						onClick={(e) => this.copyToClipboard(e, 'Mathilde Kronborg')}
					/>

					<Card
						image={cardImages[5]}
						alt='Viola Broberg'
						header='Viola Broberg'
						content='Art Director'
						onClick={(e) => this.copyToClipboard(e, 'Viola Broberg')}
					/>

					<Card
						image={cardImages[6]}
						alt='Frederik Kronborg'
						header='Frederik Kronborg'
						content='Innovation'
						onClick={(e) => this.copyToClipboard(e, 'Frederik Kronborg')}
					/>

					<Card
						image={cardImages[2]}
						alt='Christian Broberg'
						header='Christian Broberg'
						content='Product Development'
						onClick={(e) => this.copyToClipboard(e, 'Christian Broberg')}
					/>

					<Card
						image={cardImages[3]}
						alt='Mette Bugge'
						header='Mette Bugge'
						content='Networking'
						onClick={(e) => this.copyToClipboard(e, 'Mette Bugge')}
					/>

					<Card />
				</Divider>

				<Divider>
					<Loader size='xxxs' velocity='fast' />
					<Loader size='xxs' velocity='fast' />
					<Loader size='xs' velocity='superfast' />
					<Loader size='small' />
					<Loader velocity='medium' />
					<Loader size='large' />
					<Loader size='xl' velocity='slow' />
				</Divider>

				<Divider>
					<ColorPicker />
				</Divider>

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
		)
	}
}

export default App

