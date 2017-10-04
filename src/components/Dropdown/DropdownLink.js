import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Photo, TimeInfo, SingleLinkContainer, LinkChildrenContainer, SingleLinkIconContainer } from 'components/Dropdown/DropdownStyles'

class DropDownLink extends Component {

	render() {
		const { link, photo, label, time, isReaded } = this.props

		return (
			<SingleLinkContainer 
				isReaded={isReaded}
				href={link}>

				<SingleLinkIconContainer>
					<Photo src={photo}/>
				</SingleLinkIconContainer>

				<LinkChildrenContainer>
					<label>{label}</label>
					<TimeInfo>{time}</TimeInfo>
				</LinkChildrenContainer>
				
			</SingleLinkContainer>
		)
	}
}

DropDownLink.propTypes = {
	link: PropTypes.string,
	photo: PropTypes.string,
	time: PropTypes.string,
	label: PropTypes.string,
	isReaded: PropTypes.bool
}

DropDownLink.defaultProps = {
	link: '#',
	photo: '#',
	time: 'place how long time ago something happened',
	label: 'this i the header of the notifikations'
}

export default DropDownLink
