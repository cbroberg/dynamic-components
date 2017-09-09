import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledFormsCard, StyledFormsCardImage, StyledFormsCardContainer, StyledFormsCardHeader, StyledFormsCardContent } from 'components/FormsCard/FormsCardStyles'


class FormsCard extends Component {

	renderFormsCard() {
		const { isActive, image, alt, header, content, hasImage, isDisabled, bgColor, disabledColor, onClick } = this.props
		if (hasImage) {
			return (
				<div>
					<StyledFormsCard isActive={isActive} onClick={onClick} isDisabled={isDisabled} bgColor={bgColor} disabledColor={disabledColor}>
						<StyledFormsCardImage src={image} alt={alt} />
						<StyledFormsCardContainer>
							<StyledFormsCardHeader>{header}</StyledFormsCardHeader>
							<StyledFormsCardContent>{content}</StyledFormsCardContent>
						</StyledFormsCardContainer>
					</StyledFormsCard>
				</div>
			)
		}
		return (
			<div>
				<StyledFormsCard isActive={isActive} onClick={onClick} isDisabled={isDisabled} bgColor={bgColor} disabledColor={disabledColor}>
					<StyledFormsCardContainer>
						<StyledFormsCardHeader>{header}</StyledFormsCardHeader>
						<StyledFormsCardContent>{content}</StyledFormsCardContent>
					</StyledFormsCardContainer>
				</StyledFormsCard>
			</div>
		)
	}


	render() {
		return (
			<div>
				{this.renderFormsCard()}
			</div>
		)
	}
}

FormsCard.propTypes = {
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

FormsCard.defaultProps = {
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

export default FormsCard
