import React, { Component } from 'react'
import * as Icons from 'react-icons/lib/md'
import * as iconname from 'components/iconnames'


export const components = {
	cloud_download: {
		component: Icons.MdCloudDownload,
		value: iconname.ICON_CLOUD_DOWNLOAD
	},

	cloud_upload: {
		component: Icons.MdCloudUpload,
		value: iconname.ICON_CLOUD_UPLOAD
	},

	menu: {
		component: Icons.MdMenu,
		value: iconname.ICON_MENU
	}
}

class Icon extends Component {	

	render() {
		const IconComponent = components[this.props.icon || 'menu'].component
		return <IconComponent size={this.props.size || 50} color={'#EA228F'} style={{ paddingRight: '16px' }} />
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
