import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropdownContianer, DropdownContentContainer, Photo, TimeInfo, SingleLinkContainer, LinkChildrenContainer, SlIconContainer, NotificationTopContanoiner, NotificationsLbl, MarkAsReadBtn, SettingsLink, SeeAllNotificationsLink, AllLinksContainer } from 'components/Dropdown/DropdownStyles'
import * as colors from 'theme/colors'
import Icon from 'components/Icon/Icon'

class Dropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listVisible: false,
			data: ''
		}
		this.handleDropDown = this.handleDropDown.bind(this)
		this.renderChild = this.renderChild.bind(this)
		this.renderNotifyHeader = this.renderNotifyHeader.bind(this)
	}

	handleDropDown() {
		this.state.listVisible ? this.setState({ listVisible: false }) : this.setState({ listVisible: true })
	}

	componentDidMount() {
		this.setState({ data: this.props.data })
	}

	renderNotifyHeader() {
		return (
            <NotificationTopContanoiner>
                <NotificationsLbl><b>{this.props.subLabel}</b></NotificationsLbl>
                <SettingsLink href='#'>{this.props.link}</SettingsLink>
                <MarkAsReadBtn>{this.props.buttontext}</MarkAsReadBtn>
            </NotificationTopContanoiner>
		)
	}

	renderChild(child, data) {
		if (this.state.data[child.key] !== undefined) {
			return (
			<SingleLinkContainer href={data[child.key].href}>
                <SlIconContainer><Photo src='http://static.adweek.com/adweek.com-prod/files/2015_May/iStock-Unfinished-Business-5.jpg' /></SlIconContainer>
                <LinkChildrenContainer >{child}<TimeInfo>{data[child.key].time}</TimeInfo></LinkChildrenContainer>
            </SingleLinkContainer>
			)
		}
	}

	render() {
		return (
            <DropdownContianer onMouseEnter={this.handleDropDown} onMouseLeave={this.handleDropDown}>
                    <Icon icon={this.props.icon} iconSize={this.props.iconSize} color={colors.BUTTON_TEXT} active={this.props.active}/>
                {this.state.listVisible ? 
                    <DropdownContentContainer width={this.props.width}>
						<NotificationTopContanoiner>
							<NotificationsLbl><b>{this.props.subLabel}</b></NotificationsLbl>
							<SettingsLink href='#'>{this.props.settingslink}</SettingsLink>
							<MarkAsReadBtn>{this.props.buttontext}</MarkAsReadBtn>
           				 </NotificationTopContanoiner>
                        <AllLinksContainer height={this.props.height}>
							{ React.Children.map(this.props.children, child => {
								return this.renderChild(child, this.state.data)
							})
							}
                        </AllLinksContainer>
                        <SeeAllNotificationsLink href={'#'}>{this.props.seeAllNotifications}</SeeAllNotificationsLink>
                    </DropdownContentContainer> : null }
            </DropdownContianer>
		)
	}
}

Dropdown.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	subLabel: PropTypes.string,
	settingslink: PropTypes.string,
	buttontext: PropTypes.string,
	seeAllNotifications: PropTypes.string,
	icon: PropTypes.string,
	color: PropTypes.string,
	active: PropTypes.bool,
	iconSize: PropTypes.number,
	data: PropTypes.array
}

Dropdown.defaultProps = {
	width: '400px',
	height: '400px',
	subLabel: 'Notifikationer',
	settingslink: 'Indstillinger',
	buttontext: 'Marker som læst',
	seeAllNotifications: 'Se alle',
	icon: 'info',
	active: false,
	iconSize: 50
}


export default Dropdown