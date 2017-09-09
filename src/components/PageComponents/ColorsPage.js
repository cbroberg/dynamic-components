import React, { Component } from 'react'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'
import ColorCard from 'components/ColorCard/ColorCard'
import { colors } from 'theme/colors'


class ColorsPage extends Component {

	notify = (message) => toast.success(message)

	copyToClipboard(e, text) {
		// e.preventDefault()
		copy(text)
		this.notify(`"${text}" ... has been copyied to the clipboard`)
	}

	render() {
		return (
			<div>
				{colors.map((color, index) => (
					<ColorCard 
						color={color.value} 
						name={color.name} 
						onClick={(e) => this.copyToClipboard(e, color.name + ': ' + color.value)} 
						key={index} 
					/>
				))}
			</div>
		)
	}
}

export default ColorsPage

