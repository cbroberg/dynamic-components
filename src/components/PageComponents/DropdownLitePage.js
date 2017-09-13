import React, { Component } from 'react'
import Dropdown from 'components/DropdownLite/Dropdown'
import CloseOnEscape from 'components/DropdownLite/CloseOnEscape'

const escaped = () => {

}

const Close = ({ onEscape }) => <CloseOnEscape onEscape={escaped}><Dropdown items={items} /></CloseOnEscape>


const items = [
	{
		label: 'Buttons',
	},
	{
		label: 'Cards',
	},	
	{
		label: 'Dropdowns',
	},
	{
		label: 'Icons',
	},
	{
		label: 'Loaders',
	},
	{
		label: 'Meters',
	},
	{
		label: 'Tags',
	},
]

class DropdownLitePage extends Component {

	render() {
		return (
			<div>
				<Close />
			</div>
		)
	}
}

export default DropdownLitePage


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
