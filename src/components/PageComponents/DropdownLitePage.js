import React, { Component } from 'react'
import Dropdown from 'components/DropdownLite/Dropdown'
import { Heading, Text } from 'odeum-primitives'
import { numCharsInLongestStringInArray } from '../../helpers'


class DropdownLitePage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			value: '',
			onTouch: false
		}
	}

	componentDidMount() {
		document.addEventListener('touchstart', this.onFirstTouch, false)
	}

	componentWillUnmount() {
		document.removeEventListener('touchstart', this.onFirstTouch, false)
	}

	onFirstTouch = () => {
		this.setState({ onTouch: true })
	}


	onSelectItem = (value) => {
		this.setState({ value })
	}

	getDropdownValue = () => {
		return (
			<Dropdown 
				type={this.state.onTouch ? 'touch' : 'click'} 
				items={items} 
				label={'Components'} 
				selectedValue={this.onSelectItem} 
			/>
		)
	}

	numChars = (array) => {
		let arr = []
		array.map((item, index) => {
			return arr[index] = item.label
		})
		return numCharsInLongestStringInArray(arr)
	}

	render() {
		let value = this.getDropdownValue()
		return (
			<div>
				{this.state.value === '' ? value : value}				
				<Heading>Demo {this.state.value}</Heading>
				{this.state.onTouch ? <Text>You are using a touch device</Text> : <Text>You are NOT using a touch device</Text>} {this.numChars(items)}	
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

// ARRAY FOR NEXT STEPS
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
