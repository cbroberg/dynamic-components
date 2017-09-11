import React, { Component } from 'react'
import Dropdown from 'components/Dropdown/Dropdown'
import DropDownLink from 'components/Dropdown/DropdownLink'
import * as colors from 'theme/colors'


class DropdownsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: [
				{ label: 'kasper', href: 'http://localhost:3000/dashboard/starwars/people/', icon: 'info', active: true, size: 18 },
				{ label: 'andrei', href: 'https://www.youtube.com/', icon: 'check', active: true, size: 18, center: Center.padding },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'andersssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', href: 'https://www.youtube.com/', icon: 'apps', active: true, size: 18 }
			],
			notifytext: { subLabel: 'Notifications', link: 'Settings', buttontext: 'Mark as read' }
		}
	
	}

	render() {
		return (
			<div>
				<Dropdown icon={'info'} active={true} size={18} label={'kasper'}>
				{this.state.arr.map((data, index) => (
					<DropDownLink key={index} href={data.href} icon={data.icon} active={data.active} size={data.size} padding={data.center}> 
						<label>{data.label}</label>
					</DropDownLink>
				))} 
			</Dropdown>
			<Dropdown notify={NotifyTheme.notify} theme={NotifyButton.notify} bgColor={NotifyTheme.allContentBackgroundColor}
					  dropDowntheme={NotifyButton} width={'400px'} bordertheme={NotifyTheme.borderTheme} 
					  subLabel={'Notifikationer'} link={'Indstillinger'} buttontext={'Marker som læst'} seeAllNotifications={'Se alle'}
					  icon={'info'} active={false} size={18}>
				{this.state.arr.map((data, index) => (
					<DropDownLink key={index} href={data.href}
					 icon={data.icon} active={NotifyTheme.active} size={NotifyTheme.size} color={colors.TAB} 
					 hoverColor={NotifyTheme.hoverColor} borderColor={NotifyTheme.borderColor2} txtColor={NotifyTheme.txtColor} iconPadding={NotifyTheme.padding}>
						<p>{data.label}</p>
					</DropDownLink>
				))} 
			</Dropdown>
			
			</div>
		)
	}
}

const NotifyButton = {
	width: '25%',
	padding: '5px 0px 6px 5%',
	notify: {
		overflow: 'scroll',
		height: '500px'
	}
}

const Center = {
	padding: '10px 0px 10px 25%',
}

const NotifyTheme = {
	notify: true,
	hoverColor: colors.GAUGE_BACKGROUND,
	txtColor: colors.BLACK,
	borderTheme: {
		borderStyle: 'solid',
		borderColor: colors.CLOUDY_DARK,
		borderWidth: '1px'
	},
	borderColor2: colors.GAUGE_BACKGROUND,
	backgroundColor: colors.TAB,
	allContentBackgroundColor: colors.TAB,
	active: false,
	size: 25,
	padding: '0px 15px 0px 10px' 
}


export default DropdownsPage

