import React, { Component } from 'react'
import { StyledCard, StyledCardImage, StyledCardContainer, StyledCardHeader, StyledCardContent, StyledCardIcon } from 'components/Card/StyledCard'
import Icon from 'components/Icon/Icon'

class Card extends Component {

	renderCard() {
		const { image, alternate, header, content } = this.props
		return (
			<div>
				<StyledCard onClick={this.props.onClick}>
					<StyledCardImage src={image} alt={alternate} />
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
	image: 'assets/avatar.png',
	alternate: '',
	header: '',
	content: '',
	icon: '',
}

export default Card

