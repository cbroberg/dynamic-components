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

	//completion

	info: {
		name: 'info',
		component: Icons.MdInfo,
		action: 'Info',
		usage: 'Use for displaying information',
		description: '',
		tags: ['actions']
	},

	dashboard: {
		name: 'dashboard',
		component: Icons.MdDashboard,
		action: 'Dashboard',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	home: {
		name: 'home',
		component: Icons.MdHome,
		action: 'Home',
		usage: 'Use for displaying the front page',
		description: '',
		tags: ['actions']
	},

	settings: {
		name: 'settings',
		component: Icons.MdSettings,
		action: 'Settings',
		usage: 'Use for displaying information',
		description: '',
		tags: ['actions']
	},

	input: {
		name: 'input',
		component: Icons.MdInput,
		action: 'Input',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	timeline: {
		name: 'timeline',
		component: Icons.MdTimeline,
		action: 'Timeline',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	code: {
		name: 'code',
		component: Icons.MdCode,
		action: 'Code',
		usage: 'Use for scripts in ODEUM Report',
		description: '',
		tags: ['actions', 'tabs']
	},

	opacity: {
		name: 'opacity',
		component: Icons.MdOpacity,
		action: 'Opacity',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	assignment: {
		name: 'assignment',
		component: Icons.MdAssignment,
		action: 'Assignment',
		usage: 'Use for showing assignments',
		description: '',
		tags: ['actions']
	},

	people: {
		name: 'people',
		component: Icons.MdPeople,
		action: 'View organisation',
		usage: 'Use for displaying the organisation network',
		description: '',
		tags: ['actions']
	},

	group_add: {
		name: 'group_add',
		component: Icons.MdGroupAdd,
		action: 'Add group',
		usage: 'Use for adding a person to a group',
		description: '',
		tags: ['actions']
	},

	person: {
		name: 'person',
		component: Icons.MdPerson,
		action: 'Person',
		usage: 'Use for viewing information',
		description: '',
		tags: ['actions']
	},

	person_add: {
		name: 'person_add',
		component: Icons.MdPersonAdd,
		action: 'Add person',
		usage: 'Use for add person/connection',
		description: '',
		tags: ['actions']
	},

	mail_outline: {
		name: 'mail_outline',
		component: Icons.MdMailOutline,
		action: 'Mail outline',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	settings_cell: {
		name: 'settings_cell',
		component: Icons.MdSettingsCell,
		action: 'Settings cell',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	extension: {
		name: 'extension',
		component: Icons.MdExtension,
		action: 'Extension',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	arrow_drop_down: {
		name: 'arrow_drop_down',
		component: Icons.MdArrowDropDown,
		action: 'Arrow drop down',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	arrow_drop_up: {
		name: 'arrow_drop_up',
		component: Icons.MdArrowDropUp,
		action: 'Arrow drop up',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	copyright: {
		name: 'copyright',
		component: Icons.MdCopyright,
		action: 'Copyright',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	cloud: {
		name: 'cloud',
		component: Icons.MdCloud,
		action: 'Cloud',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	language: {
		name: 'language',
		component: Icons.MdLanguage,
		action: 'Language select',
		usage: 'Use for displaying the page in a selected language',
		description: '',
		tags: ['actions']
	},

	date_range: {
		name: 'date_range',
		component: Icons.MdDateRange,
		action: 'Date range selection',
		usage: 'Use for selecting a date range',
		description: '',
		tags: ['actions']
	},

	mode_edit: {
		name: 'mode_edit',
		component: Icons.MdModeEdit,
		action: 'Mode edit',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	place: {
		name: 'place',
		component: Icons.MdPlace,
		action: 'Place view',
		usage: 'Use for viewing location ',
		description: '',
		tags: ['actions']
	},

	phone: {
		name: 'phone',
		component: Icons.MdPhone,
		action: 'Phone',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	visibility: {
		name: 'visibility',
		component: Icons.MdVisibility,
		action: 'Visibility',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},
	
	visibility_off: {
		name: 'visibility_off',
		component: Icons.MdVisibilityOff,
		action: 'Visibility off',
		usage: 'Use for turning off the visibility',
		description: '',
		tags: ['actions']
	},

	account_box: {
		name: 'account_box',
		component: Icons.MdAccountBox,
		action: 'Account box',
		usage: 'Use for displaying the account box information',
		description: '',
		tags: ['actions']
	},

	insert_drive_file: {
		name: 'insert_drive_file',
		component: Icons.MdInsertDriveFile,
		action: 'Insert drive file',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	view_headline: {
		name: 'view_headline',
		component: Icons.MdViewHeadline,
		action: 'View headline',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	view_module: {
		name: 'view_module',
		component: Icons.MdViewModule,
		action: 'View module',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	view_list: {
		name: 'view_list',
		component: Icons.MdViewList,
		action: 'View list',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	share: {
		name: 'share',
		component: Icons.MdShare,
		action: 'Share',
		usage: 'Use for distributing content',
		description: '',
		tags: ['actions']
	},

	favorite: {
		name: 'favorite',
		component: Icons.MdFavorite,
		action: 'Favorite',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	favorite_border: {
		name: 'favorite_border',
		component: Icons.MdFavoriteBorder,
		action: 'Favorite border',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	label: {
		name: 'label',
		component: Icons.MdLabel,
		action: 'Label',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	label_outline: {
		name: 'label_outline',
		component: Icons.MdLabelOutline,
		action: 'Label outline',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	star: {
		name: 'star',
		component: Icons.MdStar,
		action: 'Star',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	star_border: {
		name: 'star_border',
		component: Icons.MdStarBorder,
		action: 'Star border',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	stars: {
		name: 'stars',
		component: Icons.MdStars,
		action: 'Stars',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	today: {
		name: 'today',
		component: Icons.MdToday,
		action: 'Today',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	play_circle_filled: {
		name: 'play_circle_filled',
		component: Icons.MdPlayCircleFilled,
		action: 'Play circle filled',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},
	
	play_circle_outline: {
		name: 'play_circle_outline',
		component: Icons.MdPlayCircleOutline,
		action: 'Play circle outline',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	skip_next: {
		name: 'skip_next',
		component: Icons.MdSkipNext,
		action: 'Skip next',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	skip_previous: {
		name: 'skip_previous',
		component: Icons.MdSkipPrevious,
		action: 'Skip previous',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	pie_chart: {
		name: 'pie_chart',
		component: Icons.MdPieChart,
		action: 'Pie chart',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},

	dashboard: {
		name: 'dashboard',
		component: Icons.MdDashboard,
		action: 'Dashboard',
		usage: 'Use for ',
		description: '',
		tags: ['actions']
	},
}