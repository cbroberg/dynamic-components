import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StyledColorCard, StyledColorCardBackground, StyledColorCardContainer, StyledColorCardHeader, StyledColorCardContent } from 'components/ColorCard/ColorCardStyles'


class ColorCard extends Component {
	render() {
		const { color, name } = this.props
		return (
			<StyledColorCard onClick={this.props.onClick}>
				<StyledColorCardBackground color={color}  />
				<StyledColorCardContainer>
					<StyledColorCardHeader>{name}</StyledColorCardHeader>
					<StyledColorCardContent>{color}</StyledColorCardContent>
				</StyledColorCardContainer>
			</StyledColorCard>
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
