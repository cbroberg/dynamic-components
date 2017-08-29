import React, { Component } from 'react'
import * as Icons from 'react-icons/lib/md'
import * as iconname from './iconnames'


export const icons = {
	search: {
		name: 'search',
		component: Icons.MdSearch,
		action: 'Search',
		usage: 'Use for search bars and search fields',
		tags: ['search', 'actions']
	},

	menu: {
		name: 'menu',
		component: Icons.MdMenu,
		action: 'Menu',
		usage: 'Use for menu open/close',
		tags: ['actions', 'menu']
	},

	chat: {
		name: iconname.ICON_MESSAGES,
		component: Icons.MdChat,
		action: 'Messages',
		usage: 'Use for launching the messaging system',
		tags: ['actions', 'menu', 'messaging']
	},

	help: {
		name: iconname.ICON_HELP,
		component: Icons.MdHelp,
		action: 'Help',
		usage: 'Use for launching the help system',
		tags: ['actions']
	},
	
	assignment_turned_in: {
		name: iconname.ICON_ASSIGNMENT_TURNED_IN,
		component: Icons.MdAssignmentTurnedIn,
		action: 'Reports',
		usage: 'Use for Reports (registrations)',
		tags: ['menu', 'tabs']
	},

	cloud_download: {
		name: iconname.ICON_CLOUD_DOWNLOAD,
		component: Icons.MdCloudDownload,
		action: 'Download',
		usage: 'Use for downloading data and assets',
		tags: ['actions']
	},

	cloud_upload: {
		name: iconname.ICON_CLOUD_UPLOAD,
		component: Icons.MdCloudUpload,
		action: 'Upload',
		usage: 'Use for uploading files and assets',
		tags: ['actions']
	},	
}

class Icon extends Component {	

	render() {
		const IconComponent = icons[this.props.icon || 'menu'].component
		return <IconComponent size={this.props.size || 50} color={'#3B97D3'} />
	}
}

export default Icon

