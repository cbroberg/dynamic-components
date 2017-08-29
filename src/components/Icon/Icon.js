import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Icons from 'react-icons/lib/md'


class Icon extends Component {	

	render() {
		const IconComponent = icons[this.props.icon].component
		return <IconComponent size={this.props.size} color={this.props.color}/>
	}
}

export default Icon

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	size: PropTypes.number,
	color: PropTypes.string,
	active: PropTypes.bool,
	style: PropTypes.shape({
		verticalAlign: PropTypes.string,
		paddingRight: PropTypes.string
	})
}

Icon.defaultProps = {
	icon: 'menu',
	size: 50,
	color: '#3B97D3',
	active: false,
	style: {}
}


export const icons = {
	search: {
		name: 'search',
		component: Icons.MdSearch,
		action: 'Search',
		usage: 'Use for search bars and search fields',
		description: '',
		tags: ['search', 'actions']
	},

	menu: {
		name: 'menu',
		component: Icons.MdMenu,
		action: 'Menu',
		usage: 'Use for menu open/close',
		description: '',
		tags: ['actions', 'menu']
	},

	chat: {
		name: 'chat',
		component: Icons.MdChat,
		action: 'Messages',
		usage: 'Use for launching the messaging system',
		description: '',
		tags: ['actions', 'menu', 'messaging']
	},

	help: {
		name: 'help',
		component: Icons.MdHelp,
		action: 'Help',
		usage: 'Use for launching the help system',
		description: '',
		tags: ['actions']
	},

	bug_report: {
		name: 'bug_report',
		component: Icons.MdBugReport,
		action: 'Bug Report',
		usage: 'Use for bug reports',
		description: '',
		tags: ['actions']
	},

	assignment_turned_in: {
		name: 'assignment_turned_in',
		component: Icons.MdAssignmentTurnedIn,
		action: 'Reports',
		usage: 'Use for Reports (registrations)',
		description: '',
		tags: ['menu', 'tabs']
	},

	cloud_download: {
		name: 'cloud_download',
		component: Icons.MdCloudDownload,
		action: 'Download',
		usage: 'Use for downloading data and assets',
		description: '',
		tags: ['actions']
	},

	cloud_upload: {
		name: 'cloud_upload',
		component: Icons.MdCloudUpload,
		action: 'Upload',
		usage: 'Use for uploading files and assets',
		description: '',
		tags: ['actions']
	},
}