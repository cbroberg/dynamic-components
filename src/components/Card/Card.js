import React, { Component } from 'react'
import { StyledCard, StyledCardImage, StyledCardContainer, StyledCardHeader, StyledCardContent, StyledCardIcon } from 'components/Card/StyledCard'
import Icon from 'components/Icon/Icon'

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

	renderIconCard() {
		const { icon, header, content } = this.props
		return (
			<div>
				<StyledCard>
					<StyledCardIcon onClick={this.props.onClick}>
						<Icon icon={icon} size={150} />
					</StyledCardIcon>
					<StyledCardContainer>
						<StyledCardHeader>{header}</StyledCardHeader>
						<StyledCardContent>{content}</StyledCardContent>
					</StyledCardContainer>
				</StyledCard>
			</div>
		)

	}

	render() {
		if (this.props.icon) {
			return (
			<div>
				{this.renderIconCard()}
			</div>
			) 
		} else { 
			return (
				<div>
					{this.renderCard()}
				</div>
			)}
	}
}

Card.defaultProps = {
	image: require('assets/avatar_female.png'),
	alt: 'This is alternative text',
	header: 'Your header goes here',
	content: 'Your content goes here ...'
}

export default Card

