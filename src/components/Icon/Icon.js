import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Icons from 'react-icons/lib/md'
import { ICON_DEFAULT_COLOR } from 'theme/colors'

class Icon extends Component {

	setColor(active) {
		if (active === true) {
			return (this.props.color)
		} else {
			return (this.props.iconColor)
		}
	}

	render() {
		const { icon, iconSize, active, style } = this.props
		const IconComponent = icons[icon].component
		return <IconComponent size={iconSize} color={this.setColor(active)} style={style} />
	}
}

export default Icon

Icon.propTypes = {
	icon: PropTypes.string,
	iconSize: PropTypes.number,
	color: PropTypes.string,
	active: PropTypes.bool,
	iconColor: PropTypes.string,
	style: PropTypes.shape({
		marginRight: PropTypes.string
	})
}

/* 
React does not provide default props to a nested array of items of a certain shape. 
Default props are only shallowly merged. So when Icon is used alone the defaultProps needs to be declared here. 
Button has it's own defaultProps when Icon is used in Button  
*/

Icon.defaultProps = {
	icon: '',
	iconSize: 18,
	color: ICON_DEFAULT_COLOR,
	active: true,
	iconColor: ICON_DEFAULT_COLOR,
	style: {
		marginRight: '8px'
	}
}


export const icons = {
	search: {
		name: 'search',
		component: Icons.MdSearch,
		action: 'Search',
		usage: 'Use for search fields',
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

	help: {
		name: 'help',
		component: Icons.MdHelp,
		action: 'Help',
		usage: 'Use for launching the help system and support',
		description: '',
		tags: ['actions']
	},

	help_outline: {
		name: 'help_outline',
		component: Icons.MdHelpOutline,
		action: 'Help',
		usage: 'Use for launching the help system and support',
		description: '',
		tags: ['actions']
	},

	bug_report: {
		name: 'bug_report',
		component: Icons.MdBugReport,
		action: 'Bug Report',
		usage: 'Use for reporting bugs',
		description: '',
		tags: ['actions']
	},

	assignment: {
		name: 'assignment',
		component: Icons.MdAssignment,
		action: 'Forms',
		usage: 'Use for forms menu/app',
		description: '',
		tags: ['actions', 'forms', 'menu', 'app', 'odeum report']
	},

	assignment_turned_in: {
		name: 'assignment_turned_in',
		component: Icons.MdAssignmentTurnedIn,
		action: 'Reports',
		usage: 'Use for listing reports',
		description: '',
		tags: ['menu', 'tabs', 'reports', 'app', 'odeum report']
	},

	info: {
		name: 'info',
		component: Icons.MdInfo,
		action: 'Info',
		usage: 'Use for displaying information',
		description: '',
		tags: ['actions', 'info']
	},

	dashboard: {
		name: 'dashboard',
		component: Icons.MdDashboard,
		action: 'Dashboard',
		usage: 'Use for launching the dashboard',
		description: '',
		tags: ['actions']
	},

	home: {
		name: 'home',
		component: Icons.MdHome,
		action: 'Home',
		usage: 'Use for launching the homepage',
		description: '',
		tags: ['actions']
	},

	settings: {
		name: 'settings',
		component: Icons.MdSettings,
		action: 'Settings',
		usage: 'Use for displaying settings',
		description: '',
		tags: ['actions']
	},

	input: {
		name: 'input',
		component: Icons.MdInput,
		action: 'Input',
		usage: 'Use for field input',
		description: '',
		tags: ['actions', 'fields']
	},

	timeline: {
		name: 'timeline',
		component: Icons.MdTimeline,
		action: 'Timeline',
		usage: 'Use for workflow',
		description: '',
		tags: ['actions']
	},

	code: {
		name: 'code',
		component: Icons.MdCode,
		action: 'Code',
		usage: 'Use for workflow automation scripts',
		description: '',
		tags: ['actions', 'tabs']
	},

	opacity: {
		name: 'opacity',
		component: Icons.MdOpacity,
		action: 'Opacity',
		usage: 'Use for design settings',
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
		usage: 'Use for adding a group',
		description: '',
		tags: ['actions']
	},

	person: {
		name: 'person',
		component: Icons.MdPerson,
		action: 'Person',
		usage: 'Use for viewing profile information/account',
		description: '',
		tags: ['actions', 'app', 'odeum report']
	},

	person_add: {
		name: 'person_add',
		component: Icons.MdPersonAdd,
		action: 'Add person',
		usage: 'Use for adding a person or a connection',
		description: '',
		tags: ['actions']
	},

	mail_outline: {
		name: 'mail_outline',
		component: Icons.MdMailOutline,
		action: 'Mail outline',
		usage: 'Use for sending e-mail or e-mail settings',
		description: '',
		tags: ['actions']
	},

	settings_cell: {
		name: 'settings_cell',
		component: Icons.MdSettingsCell,
		action: 'Settings cell',
		usage: 'Use for smartphone settings',
		description: '',
		tags: ['actions']
	},

	extension: {
		name: 'extension',
		component: Icons.MdExtension,
		action: 'Extension',
		usage: 'Use for app modules or extensions',
		description: '',
		tags: ['actions']
	},

	arrow_drop_down: {
		name: 'arrow_drop_down',
		component: Icons.MdArrowDropDown,
		action: 'Arrow drop down',
		usage: 'Use for dropdown (alternative)',
		description: '',
		tags: ['actions']
	},

	arrow_drop_up: {
		name: 'arrow_drop_up',
		component: Icons.MdArrowDropUp,
		action: 'Arrow drop up',
		usage: 'Use for closing dropdown (alternative)',
		description: '',
		tags: ['actions']
	},

	copyright: {
		name: 'copyright',
		component: Icons.MdCopyright,
		action: 'Copyright',
		usage: 'Use for copyright',
		description: '',
		tags: ['actions']
	},

	cloud: {
		name: 'cloud',
		component: Icons.MdCloud,
		action: 'Cloud',
		usage: 'Use for viewing cloud storage',
		description: '',
		tags: ['actions']
	},

	cloud_download: {
		name: 'cloud_download',
		component: Icons.MdCloudDownload,
		action: 'Download',
		usage: 'Use for downloading data and assets',
		description: '',
		tags: ['actions', 'app', 'odeum report']
	},

	cloud_upload: {
		name: 'cloud_upload',
		component: Icons.MdCloudUpload,
		action: 'Upload',
		usage: 'Use for uploading files and assets',
		description: '',
		tags: ['actions']
	},

	language: {
		name: 'language',
		component: Icons.MdLanguage,
		action: 'Language select',
		usage: 'Use for language selection',
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
		usage: 'Use for edit field/data/asset',
		description: '',
		tags: ['actions']
	},

	place: {
		name: 'place',
		component: Icons.MdPlace,
		action: 'Place view',
		usage: 'Use for map view and position/location',
		description: '',
		tags: ['actions']
	},

	phone: {
		name: 'phone',
		component: Icons.MdPhone,
		action: 'Phone',
		usage: 'Use for calling or user profile phone details',
		description: '',
		tags: ['actions']
	},

	visibility: {
		name: 'visibility',
		component: Icons.MdVisibility,
		action: 'Visibility',
		usage: 'Use for allow viewing or selecting fields for a list',
		description: '',
		tags: ['actions']
	},

	visibility_off: {
		name: 'visibility_off',
		component: Icons.MdVisibilityOff,
		action: 'Visibility off',
		usage: 'Use for disallow viewing',
		description: '',
		tags: ['actions']
	},

	account_box: {
		name: 'account_box',
		component: Icons.MdAccountBox,
		action: 'Account box',
		usage: 'Use for account information',
		description: '',
		tags: ['actions']
	},

	insert_drive_file: {
		name: 'insert_drive_file',
		component: Icons.MdInsertDriveFile,
		action: 'Insert drive file',
		usage: 'Use for managing storage',
		description: '',
		tags: ['actions']
	},

	view_headline: {
		name: 'view_headline',
		component: Icons.MdViewHeadline,
		action: 'View headline',
		usage: 'Use for list view (alternative)',
		description: '',
		tags: ['actions', 'views']
	},

	view_module: {
		name: 'view_module',
		component: Icons.MdViewModule,
		action: 'View module',
		usage: 'Use for selecting card (grid) view',
		description: '',
		tags: ['actions', 'views']
	},

	view_list: {
		name: 'view_list',
		component: Icons.MdViewList,
		action: 'View list',
		usage: 'Use for list view',
		description: '',
		tags: ['actions', 'views']
	},

	share: {
		name: 'share',
		component: Icons.MdShare,
		action: 'Share',
		usage: 'Use for sharing data or assets',
		description: '',
		tags: ['actions']
	},

	favorite: {
		name: 'favorite',
		component: Icons.MdFavorite,
		action: 'Favorite',
		usage: 'Use for favourites or rating field type',
		description: '',
		tags: ['actions']
	},

	favorite_border: {
		name: 'favorite_border',
		component: Icons.MdFavoriteBorder,
		action: 'Favorite border',
		usage: 'Use for before and after favourite and rating',
		description: '',
		tags: ['actions']
	},

	label: {
		name: 'label',
		component: Icons.MdLabel,
		action: 'Label',
		usage: 'Use for tags',
		description: '',
		tags: ['actions']
	},

	label_outline: {
		name: 'label_outline',
		component: Icons.MdLabelOutline,
		action: 'Label outline',
		usage: 'Use for tags',
		description: '',
		tags: ['actions']
	},

	star: {
		name: 'star',
		component: Icons.MdStar,
		action: 'Star',
		usage: 'Use for favourites or rating field type',
		description: '',
		tags: ['actions']
	},

	star_border: {
		name: 'star_border',
		component: Icons.MdStarBorder,
		action: 'Star border',
		usage: 'Use for before and after favourite and rating',
		description: '',
		tags: ['actions']
	},

	stars: {
		name: 'stars',
		component: Icons.MdStars,
		action: 'Stars',
		usage: 'Use for rating',
		description: '',
		tags: ['actions']
	},

	today: {
		name: 'today',
		component: Icons.MdToday,
		action: 'Today',
		usage: 'Use for selecting today in a calendar view',
		description: '',
		tags: ['actions']
	},

	play_circle_filled: {
		name: 'play_circle_filled',
		component: Icons.MdPlayCircleFilled,
		action: 'Play circle filled',
		usage: 'Use for publishing a form or a page',
		description: '',
		tags: ['actions']
	},

	play_circle_outline: {
		name: 'play_circle_outline',
		component: Icons.MdPlayCircleOutline,
		action: 'Play circle outline',
		usage: 'Use for publishing a form or a page (alternative)',
		description: '',
		tags: ['actions']
	},

	skip_next: {
		name: 'skip_next',
		component: Icons.MdSkipNext,
		action: 'Skip next',
		usage: 'Use for navigating to the end',
		description: '',
		tags: ['actions']
	},

	skip_previous: {
		name: 'skip_previous',
		component: Icons.MdSkipPrevious,
		action: 'Skip previous',
		usage: 'Use for navigating to the begining',
		description: '',
		tags: ['actions']
	},

	pie_chart: {
		name: 'pie_chart',
		component: Icons.MdPieChart,
		action: 'Pie chart',
		usage: 'Use for charts (dashboards)',
		description: '',
		tags: ['actions']
	},

	pie_chart_outlined: {
		name: 'pie_chart_outlined',
		component: Icons.MdPieChartOutlined,
		action: 'Pie chart outlined',
		usage: 'Use for charts (dashboards)',
		description: '',
		tags: ['actions']
	},

	show_chart: {
		name: 'show_chart',
		component: Icons.MdShowChart,
		action: 'Show chart',
		usage: 'Use for setting up workflow or line chart',
		description: '',
		tags: ['actions', 'workflow', 'tabs']
	},

	insert_chart: {
		name: 'insert_chart',
		component: Icons.MdInsertChart,
		action: 'Insert chart',
		usage: 'Use for charts (dashboards)',
		description: '',
		tags: ['actions']
	},

	equalizer: {
		name: 'equalizer',
		component: Icons.MdEqualizer,
		action: 'Equalizer',
		usage: 'Use for charts (dashboards)',
		description: '',
		tags: ['actions']
	},

	web_asset: {
		name: 'web_asset',
		component: Icons.MdWebAsset,
		action: 'Web asset',
		usage: 'Use for setting screen size',
		description: '',
		tags: ['actions']
	},

	web: {
		name: 'web',
		component: Icons.MdWeb,
		action: 'Web',
		usage: 'Use for web layout settings',
		description: '',
		tags: ['actions']
	},

	tablet_mac: {
		name: 'tablet_mac',
		component: Icons.MdTabletMac,
		action: 'Tablet Mac',
		usage: 'Use for tablet viewport',
		description: '',
		tags: ['actions']
	},

	laptop_mac: {
		name: 'laptop_mac',
		component: Icons.MdLaptopMac,
		action: 'Laptop Mac',
		usage: 'Use for laptop viewport',
		description: '',
		tags: ['actions']
	},

	desktop_mac: {
		name: 'desktop_mac',
		component: Icons.MdDesktopMac,
		action: 'Desktop Mac',
		usage: 'Use for desktop viewport',
		description: '',
		tags: ['actions']
	},

	phone_iphone: {
		name: 'phone_iphone',
		component: Icons.MdPhoneIphone,
		action: 'Phone iphone',
		usage: 'UUse for smartphone viewport',
		description: '',
		tags: ['actions']
	},

	photo_camera: {
		name: 'photo_camera',
		component: Icons.MdPhotoCamera,
		action: 'Photo camera',
		usage: 'Use for taking a picture or uploading a picture',
		description: '',
		tags: ['actions']
	},

	short_text: {
		name: 'short_text',
		component: Icons.MdShortText,
		action: 'Short text',
		usage: 'Short text paragraph',
		description: '',
		tags: ['actions']
	},

	event: {
		name: 'event',
		component: Icons.MdEvent,
		action: 'Event',
		usage: 'Use for selecting or viewing events/dates',
		description: '',
		tags: ['actions']
	},

	list: {
		name: 'list',
		component: Icons.MdList,
		action: 'List',
		usage: 'Use for list view (alternative)',
		description: '',
		tags: ['actions']
	},

	work: {
		name: 'work',
		component: Icons.MdWork,
		action: 'Work',
		usage: 'Use for business relations or connections',
		description: '',
		tags: ['actions']
	},

	access_time: {
		name: 'access_time',
		component: Icons.MdAccessTime,
		action: 'Access time',
		usage: 'Use for selecting or setting the time',
		description: '',
		tags: ['actions']
	},

	mic: {
		name: 'mic',
		component: Icons.MdMic,
		action: 'Mic',
		usage: 'Use for recording sound',
		description: '',
		tags: ['actions']
	},

	videocam: {
		name: 'videocam',
		component: Icons.MdVideocam,
		action: 'Videocam',
		usage: 'Use for recording video',
		description: '',
		tags: ['actions']
	},

	call: {
		name: 'call',
		component: Icons.MdCall,
		action: 'Call',
		usage: 'Use for phone call',
		description: '',
		tags: ['actions']
	},

	message: {
		name: 'message',
		component: Icons.MdMessage,
		action: 'Message',
		usage: 'Use for messaging system',
		description: '',
		tags: ['actions', 'menu', 'messages']
	},

	filter_list: {
		name: 'filter_list',
		component: Icons.MdFilterList,
		action: 'Filter list',
		usage: 'Use for filtering views',
		description: '',
		tags: ['actions']
	},

	attach_file: {
		name: 'attach_file',
		component: Icons.MdAttachFile,
		action: 'Attach file',
		usage: 'Use for file attachments',
		description: '',
		tags: ['actions']
	},

	directions: {
		name: 'directions',
		component: Icons.MdDirections,
		action: 'Directions',
		usage: 'Use for directions',
		description: '',
		tags: ['actions']
	},

	mood: {
		name: 'mood',
		component: Icons.MdMood,
		action: 'Mood',
		usage: 'Use for happy situations',
		description: '',
		tags: ['actions']
	},

	check_box: {
		name: 'check_box',
		component: Icons.MdCheckBox,
		action: 'Check box',
		usage: 'Use for check boxes',
		description: '',
		tags: ['actions']
	},

	radio_button_checked: {
		name: 'radio_button_checked',
		component: Icons.MdRadioButtonChecked,
		action: 'Radio button check',
		usage: 'Use for creating new report and radio buttons',
		description: '',
		tags: ['actions']
	},

	grid_on: {
		name: 'grid_on',
		component: Icons.MdGridOn,
		action: 'Grid on',
		usage: 'Use for grid view (alternative)',
		description: '',
		tags: ['actions']
	},

	layers: {
		name: 'layers',
		component: Icons.MdLayers,
		action: 'Layers',
		usage: 'Use for layers (design)',
		description: '',
		tags: ['actions']
	},

	sync: {
		name: 'sync',
		component: Icons.MdSync,
		action: 'Sync',
		usage: 'Use for ODEUM Report synchronization',
		description: '',
		tags: ['actions', 'app', 'odeum report']
	},

	sync_disabled: {
		name: 'sync_disabled',
		component: Icons.MdSyncDisabled,
		action: 'Sync disabled',
		usage: 'Use for disabling synchronization',
		description: '',
		tags: ['actions', 'app', 'odeum report']
	},

	sync_problem: {
		name: 'sync_problem',
		component: Icons.MdSyncProblem,
		action: 'Sync problem',
		usage: 'Use for displaying problems with synchronization',
		description: '',
		tags: ['actions', 'app', 'odeum report']
	},

	lock_outline: {
		name: 'lock_outline',
		component: Icons.MdLockOutline,
		action: 'Lock outline',
		usage: 'Use for login state logged in',
		description: '',
		tags: ['actions']
	},

	lock_open: {
		name: 'lock_open',
		component: Icons.MdLockOpen,
		action: 'Lock open',
		usage: 'Use for login state logged out',
		description: '',
		tags: ['actions']
	},

	close: {
		name: 'close',
		component: Icons.MdClose,
		action: 'Close',
		usage: 'Use for close',
		description: '',
		tags: ['actions']
	},

	apps: {
		name: 'apps',
		component: Icons.MdApps,
		action: 'Apps',
		usage: 'Use for access to other apps (app market)',
		description: '',
		tags: ['actions', 'apps']
	},

	keyboard_arrow_down: {
		name: 'keyboard_arrow_down',
		component: Icons.MdKeyboardArrowDown,
		action: 'Keyboard arrow down',
		usage: 'Use for dropdown menu',
		description: '',
		tags: ['actions']
	},

	keyboard_arrow_up: {
		name: 'keyboard_arrow_up',
		component: Icons.MdKeyboardArrowUp,
		action: 'Keyboard arrow up',
		usage: 'Use to close dropdown menu',
		description: '',
		tags: ['actions']
	},

	keyboard_arrow_left: {
		name: 'keyboard_arrow_left',
		component: Icons.MdKeyboardArrowLeft,
		action: 'Keyboard arrow left',
		usage: 'Use for page pagination to previous',
		description: '',
		tags: ['actions']
	},

	keyboard_arrow_right: {
		name: 'keyboard_arrow_right',
		component: Icons.MdKeyboardArrowRight,
		action: 'Keyboard arrow right',
		usage: 'Use for page pagination to next',
		description: '',
		tags: ['actions']
	},

	refresh: {
		name: 'refresh',
		component: Icons.MdRefresh,
		action: 'Refresh',
		usage: 'Use for refreshing a view',
		description: '',
		tags: ['actions']
	},

	check_circle: {
		name: 'check_circle',
		component: Icons.MdCheckCircle,
		action: 'Check circle',
		usage: 'Use for check or okay in modal views',
		description: '',
		tags: ['actions']
	},

	check: {
		name: 'check',
		component: Icons.MdCheck,
		action: 'Check',
		usage: 'Use for check or okay in modal views (alternative)',
		description: '',
		tags: ['actions']
	},

	cancel: {
		name: 'cancel',
		component: Icons.MdCancel,
		action: 'Cancel',
		usage: 'Use for cancelling or closing a view or a task',
		description: '',
		tags: ['actions']
	},

	add_circle: {
		name: 'add_circle',
		component: Icons.MdAddCircle,
		action: 'Add circle',
		usage: 'Use for adding new stuff (anything)',
		description: '',
		tags: ['actions', 'app', 'odeum report']
	},

	add_circle_outline: {
		name: 'add_circle_outline',
		component: Icons.MdAddCircleOutline,
		action: 'Add circle outline',
		usage: 'Use for adding new stuff (alternative)',
		description: '',
		tags: ['actions', 'app', 'odeum report']
	},

	delete: {
		name: 'delete',
		component: Icons.MdDelete,
		action: 'Delete',
		usage: 'Use for deleting data',
		description: '',
		tags: ['actions']
	},

	delete_forever: {
		name: 'delete_forever',
		component: Icons.MdDeleteForever,
		action: 'Delete permanently',
		usage: 'Use for deleting data permanently (empty trash)',
		description: '',
		tags: ['actions']
	},


	notifications: {
		name: 'notifications',
		component: Icons.MdNotifications,
		action: 'Notifications',
		usage: 'Use for notifications',
		description: '',
		tags: ['actions', 'notifications']
	},

	notifications_active: {
		name: 'notifications_active',
		component: Icons.MdNotificationsActive,
		action: 'Notifications active',
		usage: 'Use for new notification',
		description: '',
		tags: ['actions', 'notifications']
	},

	notifications_none: {
		name: 'notifications_none',
		component: Icons.MdNotificationsNone,
		action: 'Notifications none',
		usage: 'Use for no notifications',
		description: '',
		tags: ['actions', 'notifications']
	},

	notifications_off: {
		name: 'notifications_off',
		component: Icons.MdNotificationsOff,
		action: 'Notifications off',
		usage: 'Use for notifications disabled (silence mode)',
		description: '',
		tags: ['actions']
	},

	content_copy: {
		name: 'content_copy',
		component: Icons.MdContentCopy,
		action: 'Content copy',
		usage: 'Use for copying data/content',
		description: '',
		tags: ['actions', 'notifications']
	},

	bookmark: {
		name: 'bookmark',
		component: Icons.MdBookmark,
		action: 'Bookmark',
		usage: 'Use for bookmarking data/content',
		description: '',
		tags: ['actions', 'bookmark']
	},
	
	library_add: {
		name: 'library_add',
		component: Icons.MdLibraryAdd,
		action: 'Pin to Dashboard',
		usage: 'Use for pinning a view to dashboard',
		description: '',
		tags: ['actions', 'dashboard', 'pin', 'odeum report']
	},

	tab: {
		name: 'tab',
		component: Icons.MdTab,
		action: 'Tab',
		usage: 'Use for tabs in App Builder',
		description: '',
		tags: ['actions', 'tab', 'tabs', 'apps', 'builder']
	},

	info_outline: {
		name: 'info_outline',
		component: Icons.MdInfoOutline,
		action: 'Info',
		usage: 'Info icon in ODEUM Report App',
		description: '',
		tags: ['actions', 'info', 'builder', 'app', 'odeum report']
	},

	drafts: {
		name: 'drafts',
		component: Icons.MdDrafts,
		action: 'Drafts',
		usage: 'Drafts icon in App',
		description: '',
		tags: ['actions', 'drafts', 'app', 'odeum report']
	},

	more_horiz: {
		name: 'more_horiz',
		component: Icons.MdMoreHoriz,
		action: 'More',
		usage: 'More icon in App',
		description: '',
		tags: ['actions', 'more', 'app', 'odeum report']
	},

	more_vert: {
		name: 'more_vert',
		component: Icons.MdMoreVert,
		action: 'More',
		usage: 'More icon in App',
		description: '',
		tags: ['actions', 'more', 'app', 'odeum report']
	},

	exit_to_app: {
		name: 'exit_to_app',
		component: Icons.MdExitToApp,
		action: 'Outbox',
		usage: 'Outbox icon in App',
		description: '',
		tags: ['actions', 'outbox', 'app', 'odeum report']
	},
}


