import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import Card from 'components/Card/Card'

const cardImages = []
cardImages.push(require('assets/avatar_female.png')) // 0
cardImages.push(require('assets/avatar_male.png')) // 1
cardImages.push(require('assets/christian.png')) // 2
cardImages.push(require('assets/mette.png')) // 3
cardImages.push(require('assets/mathilde.png')) // 4
cardImages.push(require('assets/viola.png')) // 5
cardImages.push(require('assets/frederik.png')) // 6

class CardsPage extends Component {

	render() {
		return (
			<div>
				<Card
					image={cardImages[4]}
					alt='Mathilde Kronborg'
					header='Mathilde Kronborg'
					content='Creative Director'
					onClick={(e) => copyToClipboard(e, 'Mathilde Kronborg', true)}
					{...this.props}
				/>

				<Card
					image={cardImages[5]}
					alt='Viola Broberg'
					header='Viola Broberg'
					content='Art Director'
					onClick={(e) => copyToClipboard(e, 'Viola Broberg', true)}
					{...this.props}
				/>

				<Card
					image={cardImages[6]}
					alt='Frederik Kronborg'
					header='Frederik Kronborg'
					content='Innovation'
					onClick={(e) => copyToClipboard(e, 'Frederik Kronborg', true)}
					{...this.props}
				/>

				<Card
					image={cardImages[2]}
					alt='Christian Broberg'
					header='Christian Broberg'
					content='Product Development'
					onClick={(e) => copyToClipboard(e, 'Christian Broberg', true)}
					{...this.props}
				/>

				<Card
					image={cardImages[3]}
					alt='Mette Bugge'
					header='Mette Bugge'
					content='Networking'
					onClick={(e) => copyToClipboard(e, 'Mette Bugge', true)}
					{...this.props}
				/>

				<Card 
					hasImage={true} 
					isDisabled={true} 
					{...this.props}
				/>

			</div>
		)
	}
}


export default CardsPage

