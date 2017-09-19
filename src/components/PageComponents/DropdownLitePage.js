import React, { Component } from 'react'
import Dropdown from 'components/DropdownLite/Dropdown'


class DropdownLitePage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedValue: 'Select Value here ...'
		}
	}

	onSelectValue = (value) => {
		this.setState({
			selectedValue: value
		})
	}


	render() {
		return (
			<div>
				<p>{this.state.selectedValue}</p>
				<Dropdown items={items} selectedValue={this.onSelectValue} />				
			</div>
		)
	}
}

export default DropdownLitePage

const items = [
	{
		label: 'Buttons',
		value: 'buttons',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Cards',
		value: 'cards',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Dropdowns',
		value: 'dropdowns',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Icons',
		value: 'icons',
		href: 'https://github.com/google/material-design-icons/blob/master/action/2x_web/ic_assessment_black_48dp.png',
		icon: '',
		active: true
	},
	{
		label: 'Loaders',
		value: 'loaders',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Meters',
		value: 'meters',
		href: null,
		icon: '',
		active: true
	},
	{
		label: 'Tags',
		value: 'tags',
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
