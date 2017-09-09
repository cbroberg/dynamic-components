import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledCard, StyledCardImage, StyledCardContainer, StyledCardHeader, StyledCardContent } from 'components/Card/CardStyles'


class Card extends Component {

	renderCard() {
		const { isActive, image, alt, header, content, style, onClick } = this.props
		if (style.hasImage) {
			return (
				<div>
					<StyledCard isActive={isActive} onClick={onClick} style={style}>
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
				<StyledCard onClick={onClick} style={style}>
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
	style: PropTypes.shape({
		hasImage: PropTypes.bool,
		isDisabled: PropTypes.bool,
		bgColor: PropTypes.string,
		disabledColor: PropTypes.string,
	}),
}

Card.defaultProps = {
	isActive: false,
	image: require('assets/avatar_female.png'),
	alt: 'Alt defaultProps',
	header: 'Header defaultProps',
	content: 'Content defaultProps ...',
	style: {
		hasImage: true,
		isDisabled: false,
		bgColor: '#ECF0F1',
		disabledColor: '#BDC2C6',
	},
}

export default Card
