import React, { Component } from 'react'
import SourcePointer from 'components/SourcePointer/SourcePointer'
import { Heading, Text } from 'odeum-primitives'

class SourcePointerPage extends Component {

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
			<SourcePointer items={items} label={'Components'} selectedValue={this.onSelectItem} />
		)
	}

	render() {
		let value = this.getDropdownValue()
		return (
			<div>
				<Heading>Select {this.state.value} demo</Heading>
				<Text>{this.state.value === '' ? 'Selected value goes here ...' : 'You selected ' + this.state.value}</Text>
				{this.state.value === '' ? value : value}
			</div>
		)
	}
}

export default SourcePointerPage

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
		href: null,
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
	},
	{
		label: 'Modals',
		value: 'modals',
		href: null,
		icon: '',
		active: false
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
