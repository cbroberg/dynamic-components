import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledCard, StyledCardImage, StyledCardContainer, StyledCardHeader, StyledCardContent } from 'components/Card/StyledCard'

class Card extends Component {

	renderCard() {
		const { image, alt, header, content } = this.props
		return (
			<div>
				<StyledCard onClick={this.props.onClick}>
					<StyledCardImage src={image} alt={alt} />
					<StyledCardContainer>
						<StyledCardHeader>{header}</StyledCardHeader>
						<StyledCardContent>{content}</StyledCardContent>
					</StyledCardContainer>
				</StyledCard>
			</div>
		)
	}

	render() {
		return (
			<div>
				{this.renderCard()}
			</div>
		)
	}
}

Card.propTypes = {
	image: PropTypes.string,
	alt: PropTypes.string,
	header: PropTypes.string,
	content: PropTypes.string
}

Card.defaultProps = {
	image: require('assets/avatar_female.png'),
	alt: 'This is alternative text',
	header: 'Your header goes here',
	content: 'Your content goes here ...'
}

export default Card

