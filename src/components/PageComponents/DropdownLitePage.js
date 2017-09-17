import React, { Component } from 'react'
import Dropdown from 'components/DropdownLite/Dropdown'


class DropdownLitePage extends Component {

	render() {
		return (
			<div>
				<Dropdown items={items} />
			</div>
		)
	}
}

export default DropdownLitePage

const items = [
	{
		label: 'Buttons',
		value: '',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Cards',
		value: '',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Dropdowns',
		value: '',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Icons',
		value: '',
		href: 'https://github.com/google/material-design-icons/blob/master/action/2x_web/ic_assessment_black_48dp.png',
		icon: '',
		active: true
	},
	{
		label: 'Loaders',
		value: '',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Meters',
		value: '',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Tags',
		value: '',
		href: null,
		icon: '',
		active: true
	}
]


export const groupedItems = [
	{ value: 'one', label: 'One' },
	{ value: 'two', label: 'Two' },
	{
		type: 'group', name: 'group1', items: [
			{ value: 'three', label: 'Three' },
			{ value: 'four', label: 'Four' }
		]
	},
	{
		type: 'group', name: 'group2', items: [
			{ value: 'five', label: 'Five' },
			{ value: 'six', label: 'Six' }
		]
	}
]
