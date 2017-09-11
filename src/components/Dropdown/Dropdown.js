import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropdownContianer, DropdownMenuBtn, DropdownContentContainer, SingleLinkContainer, LinkChildrenContainer, SlIconContainer, NotificationTopContanoiner, NotificationsLbl, MarkAsReadBtn, SettingsLink, SeeAllNotificationsLink, AllLinksContainer } from 'components/Dropdown/DropdownStyles'
import * as colors from 'theme/colors'
import Icon from './../Icon/Icon'
import theme from 'theme/theme'

class Dropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listVisible: false,
		}
		this.handleDropDown = this.handleDropDown.bind(this)
	}

	handleDropDown() {
		this.state.listVisible ? this.setState({ listVisible: false }) : this.setState({ listVisible: true })
	}


	render() {
		return (
			<DropdownContianer>
				<DropdownMenuBtn onClick={this.handleDropDown} theme={this.props.dropDowntheme} color={this.props.color}>
					<Icon icon={this.props.icon} size={this.props.size} color={colors.BUTTON_TEXT} active={this.props.active} style={theme.iconButtonStyle} />
					{this.props.label}
				</DropdownMenuBtn>
				{this.state.listVisible ?
					<DropdownContentContainer onClick={this.props.onClick} width={this.props.width} theme={this.props.bordertheme} bgColor={this.props.bgColor}>
						{this.props.notify ?
							<NotificationTopContanoiner>
								<NotificationsLbl><b>{this.props.subLabel}</b></NotificationsLbl>
								<SettingsLink href='#'>{this.props.link}</SettingsLink>
								<MarkAsReadBtn>{this.props.buttontext}</MarkAsReadBtn>
							</NotificationTopContanoiner>
							: null}
						<AllLinksContainer theme={this.props.theme}>
							{this.props.children}
						</AllLinksContainer>
						{this.props.notify ?
							<div>
								<SeeAllNotificationsLink href={'#'}>{this.props.seeAllNotifications}</SeeAllNotificationsLink>
							</div>
							: null}
					</DropdownContentContainer> :
					null}
			</DropdownContianer>
		)
	}
}

Dropdown.propTypes = {
	myProp: PropTypes.string
}

Dropdown.defaultProps = {
	myProp: ''
}

export default Dropdown
