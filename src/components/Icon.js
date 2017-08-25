import React, { Component } from 'react'
import * as Icons from 'react-icons/lib/md'
import * as iconname from 'components/iconnames'


export const components = {
	search: {
		value: iconname.ICON_SEARCH,
		component: Icons.MdSearch,
		action: 'Search'
	},

	menu: {
		value: iconname.ICON_MENU,
		component: Icons.MdMenu,
		action: 'Menu'
	},

	chat: {
		value: iconname.ICON_MESSAGES,
		component: Icons.MdChat,
		action: 'Messages'
		
	},
	assignment_turned_in: {
		value: iconname.ICON_ASSIGNMENT_TURNED_IN,
		component: Icons.MdAssignmentTurnedIn,
		action: 'Reports'
	},

	cloud_download: {
		value: iconname.ICON_CLOUD_DOWNLOAD,
		component: Icons.MdCloudDownload,
		action: 'Download'
	},

	cloud_upload: {
		value: iconname.ICON_CLOUD_UPLOAD,
		component: Icons.MdCloudUpload,
		action: 'Upload'
	},	
}

class Icon extends Component {	

	render() {
		const IconComponent = components[this.props.icon || 'menu'].component
		return <IconComponent size={this.props.size || 50} color={'#3B97D3'} style={{ paddingRight: '16px' }} />
	}
}

export default Icon

/*
const iconArr = [
	{
		name: 'ICON_SEARCH',
		value: iconname.ICON_SEARCH,
		component: Icons.MdSearch
	},
	{
		name: 'ICON_MENU',
		value: iconname.ICON_MENU,
		component: Icons.MdMenu
	},
	{
		name: 'ICON_ASSIGNMENT_TURNED_IN',
		value: iconname.ICON_ASSIGNMENT_TURNED_IN,
		component: Icons.MdAssignmentTurnedIn
	}
]
*/
