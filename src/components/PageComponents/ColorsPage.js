import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import ColorCard from 'components/ColorCard/ColorCard'
import { colors } from 'theme/colors'


class ColorsPage extends Component {

	render() {
		return (
			<div>
				{colors.map((color, index) => (
					<ColorCard 
						color={color.value} 
						name={color.name} 
						onClick={(e) => copyToClipboard(e, color.name + ': ' + color.value, true)} 
						key={index} 
					/>
				))}
			</div>
		)
	}
}

export default ColorsPage

