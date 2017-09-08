import React, { Component } from 'react'
import { BlockPicker, TwitterPicker } from 'react-color'
import { colors, getUniqueColors } from 'theme/colors'

const colorPalette = getUniqueColors(colors)

class ColorPicker extends Component {
	render() {
		return (
			<div>				
				<BlockPicker colors={colorPalette} color="#3B97D3"/>
				<TwitterPicker colors={colorPalette} color="#3B97D3" />
			</div>
		)
	}
}

export default ColorPicker

