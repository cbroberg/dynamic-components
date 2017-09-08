import React, { Component } from 'react'
import PropTypes from 'prop-types'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'
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

	notify = (message) => toast.success(message)

	copyToClipboard(e, text) {
		// e.preventDefault()
		copy(text)
		this.notify(`"${text}" ... has been copyied to the clipboard`)
	}

	render() {
		return (
			<div>
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

			</div>
		)
	}
}

CardsPage.propTypes = {
	aaa: PropTypes.string,
	bbb: PropTypes.string
}

CardsPage.defaultProps = {
	aaa: '',
	bbb: ''
}

export default CardsPage

