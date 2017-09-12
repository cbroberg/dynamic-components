import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CloseOnEscape from './CloseOnEscape'
import Hover from './Hover'

export const MyComponent = ({ onEscape }) => 
	<CloseOnEscape 
		onEscape={onEscape}><div style={{ fontSize: '2.0rem' }}>This is just a text in a div element. Press Esc to make things happen!<p /></div>
	</CloseOnEscape>


class DropdownLite extends Component {

	escaped() {
		console.log('Escaped')
		return (
			<div>
				Shit happens ... NOT!!!
			</div>
		)
	}

	render() {
		const { myProp } = this.props		
		return (
			<div>
				<MyComponent onEscape={this.escaped} myProp={myProp} />
				<Hover /><p/>
			</div>
		)
	}
}


DropdownLite.propTypes = {
	myProp: PropTypes.string
}

DropdownLite.defaultProps = {
	myProp: ''
}

export default DropdownLite


export const options = [
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

/*
<ReactComponent
    onMouseEnter={this.someHandler}
    onMouseLeave={this.someOtherHandler}
/>
*/