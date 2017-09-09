import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledCard, StyledCardImage, StyledCardContainer, StyledCardHeader, StyledCardContent } from 'components/Card/CardStyles'


class Card extends Component {

	renderCard() {
		const { isActive, image, alt, header, content, hasImage, isDisabled, bgColor, disabledColor, onClick } = this.props
		if (hasImage) {
			return (
				<div>
					<StyledCard isActive={isActive} onClick={onClick} isDisabled={isDisabled} bgColor={bgColor} disabledColor={disabledColor}>
						<StyledCardImage src={image} alt={alt} />
						<StyledCardContainer>
							<StyledCardHeader>{header}</StyledCardHeader>
							<StyledCardContent>{content}</StyledCardContent>
						</StyledCardContainer>
					</StyledCard>
				</div>
			)
		}
		return ( 
			<div>
				<StyledCard isActive={isActive} onClick={onClick} isDisabled={isDisabled} bgColor={bgColor} disabledColor={disabledColor}>
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
	isActive: PropTypes.bool,
	image: PropTypes.string,
	alt: PropTypes.string,
	header: PropTypes.string,
	content: PropTypes.string,
	hasImage: PropTypes.bool,
	isDisabled: PropTypes.bool,
	bgColor: PropTypes.string,
	disabledColor: PropTypes.string,
}

Card.defaultProps = {
	isActive: true,
	image: require('assets/avatar_female.png'),
	alt: 'Alt defaultProps',
	header: 'Header defaultProps',
	content: 'Content defaultProps ...',
	hasImage: true,
	isDisabled: false,
	bgColor: '#ECF0F1',
	disabledColor: '#BDC2C6',
}

export default Card
