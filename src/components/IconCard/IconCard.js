import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledIconCard, StyledIconCardContainer, StyledIconCardHeader, StyledIconCardContent, StyledIconCardIcon, StyledIconCardContentLink } from 'components/IconCard/IconCardStyles'
import Icon from 'components/Icon/Icon'

class IconCard extends Component {
	
	renderIconCard() {
		const { icon, header, content, tags, png, svg } = this.props
		return (
			<div>
				<StyledIconCard>
					<StyledIconCardIcon onClick={this.props.onClick}>
						<Icon icon={icon} iconSize={100} />
					</StyledIconCardIcon>
					<StyledIconCardContainer>
						<StyledIconCardHeader>{header}</StyledIconCardHeader>
						<StyledIconCardContent>{tags.toString().split(',').join(', ')}</StyledIconCardContent>
						<StyledIconCardContent>{content}</StyledIconCardContent>
						<StyledIconCardContentLink href={svg} target={'_new'} download=''>svg</StyledIconCardContentLink><b> : </b>
						<StyledIconCardContentLink href={png} target={'_new'} download=''>png</StyledIconCardContentLink>
					</StyledIconCardContainer>
				</StyledIconCard>
			</div>
		)
	}

	render() {		
		return (
			<div>
				{this.renderIconCard()}
			</div>
		)
	}
}

IconCard.propTypes = {
	icon: PropTypes.string,
	header: PropTypes.string,
	content: PropTypes.string,
	tags: PropTypes.array
}

IconCard.defaultProps = {
	icon: '',
	header: 'Your header goes here',
	content: 'Your content goes here ...',
	tags: []
}

export default IconCard

