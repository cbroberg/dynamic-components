import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import CopyToClipboard from 'react-copy-to-clipboard'
import { StyledColorCard, StyledColorCardBackground, StyledColorCardContainer, StyledColorCardHeader, StyledColorCardContent } from 'components/ColorCard/ColorCardStyles'

// import { colorArr, hexToRgbA } from 'theme/colors'
// import { DisplayColor, CopyButton } from './ColorCardStyles'


class ColorCard extends Component {
	render() {
		const { color, name } = this.props
		return (
			// <div>
				<StyledColorCard>
					<StyledColorCardBackground color={color} onClick={this.props.onClick} />
					<StyledColorCardContainer>
						<StyledColorCardHeader onClick={this.props.onClick}>{name}</StyledColorCardHeader>
						<StyledColorCardContent>{color}</StyledColorCardContent>
					</StyledColorCardContainer>
				</StyledColorCard>
			// </div>
		)
	}
}

ColorCard.propTypes = {
	color: PropTypes.string,
	name: PropTypes.string
}

ColorCard.defaultProps = {
	color: '#F8BB31', // colorArr.value '#3B97D3'
	name: 'BUTTON_DEFAULT' // colorArr.name
}


export default ColorCard

/*

class ColorCard extends Component {
	render() {
		return (
			<div>
				{colorArr.map((color) => (
					<div key={color.name}>
						<DisplayColor color={color.value}>
							<CopyToClipboard text={color.name}><CopyButton color={color.value}>{color.name}</CopyButton></CopyToClipboard> <p />
							<CopyToClipboard text={color.value}><CopyButton color={color.value}>{color.value}</CopyButton></CopyToClipboard> <p />
							<CopyToClipboard text={hexToRgbA(color.value)}><CopyButton color={color.value}>{hexToRgbA(color.value)}</CopyButton></CopyToClipboard>
						</DisplayColor>
					</div>
				))}
			</div>
		)
	}
}

*/