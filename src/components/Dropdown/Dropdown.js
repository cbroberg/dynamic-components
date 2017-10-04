import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropdownContainer, DropdownContentContainer, NotificationTopContainer, NotificationsLabel, MarkAsReadButton, SettingsLink, SeeAllNotificationsLink, AllLinksContainer } from 'components/Dropdown/DropdownStyles'
import * as colors from 'theme/colors'
import Icon from 'components/Icon/Icon'

class Dropdown extends Component {
	constructor(props) {
		super(props)

		this.state = {
			listVisible: false,
		}
	}

	handleDropDown = () => {
		this.state.listVisible ? this.setState({ listVisible: false }) : this.setState({ listVisible: true })
	}

	render() {

		const { icon, iconSize, active, width, subLabel, settingsLabel, settingslink, buttontext, height, seeAllNotificationsLink, seeAllNotifications } = this.props

		return (
            <DropdownContainer 
				onMouseEnter={this.handleDropDown} 
				onMouseLeave={this.handleDropDown}>

					<Icon 
						icon={icon} 
						iconSize={iconSize} 
						color={colors.BUTTON_TEXT} 
						active={active}
					/>

                {this.state.listVisible ? 

                    <DropdownContentContainer width={width}>

						<NotificationTopContainer>

							<NotificationsLabel>
								{subLabel}
							</NotificationsLabel>

							<SettingsLink 
								href={settingslink}>
								{settingsLabel}
							</SettingsLink>

							<MarkAsReadButton
								onClick={this.props.markAsReadHandler}>
								{buttontext}
							</MarkAsReadButton>

           				</NotificationTopContainer>
                        
						<AllLinksContainer 
						 	height={height}>
							{this.props.children}
                        </AllLinksContainer>

                        <SeeAllNotificationsLink 
							href={seeAllNotificationsLink}>
							{seeAllNotifications}
						</SeeAllNotificationsLink>

                    </DropdownContentContainer> : null }

            </DropdownContainer>
		)
	}
}

Dropdown.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	subLabel: PropTypes.string,
	settingslink: PropTypes.string,
	settingsLabel: PropTypes.string,
	buttontext: PropTypes.string,
	seeAllNotifications: PropTypes.string,
	icon: PropTypes.string,
	color: PropTypes.string,
	active: PropTypes.bool,
	iconSize: PropTypes.number,
}

Dropdown.defaultProps = {
	width: '400px',
	height: '400px',
	subLabel: 'Notifikationer',
	settingsLabel: 'Indstillinger',
	buttontext: 'Marker som læst',
	seeAllNotifications: 'Se alle',
	icon: 'info',
	active: false,
	iconSize: 50
}

export default Dropdown