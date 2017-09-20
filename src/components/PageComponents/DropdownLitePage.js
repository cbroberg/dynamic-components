import React, { Component } from 'react'
import Dropdown from 'components/DropdownLite/Dropdown'
import { Heading, Text } from 'odeum-primitives'

class DropdownLitePage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			value: ''
		}
	}

	onSelectItem = (value) => {
		this.setState({ value })
	}

	getDropdownValue = () => {
		return (
			<Dropdown items={items} label={'Components'} selectedValue={this.onSelectItem} />
		)
	}

	render() {
		let value = this.getDropdownValue()
		return (
			<div>
				<Heading>Select {this.state.value} demo</Heading>
				<Text>{this.state.value === '' ? 'Selected value goes here ...' : this.state.value}</Text>
				{this.state.value === '' ? value : value}
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
