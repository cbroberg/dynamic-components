import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledDropdownLite, StyledDropdownLiteButton, StyledDropdownLiteContent, StyledDropdownLiteContentLink } from 'components/DropdownLite/DropdownLiteStyles'
import CloseOnEscape from './CloseOnEscape'

export const MyComponent = ({ onEscape }) => 
	<CloseOnEscape 
		onEscape={onEscape}><div style={{ fontSize: '2.0rem' }}>This is just a text in a div element. Press Esc to make things happen!</div>
	</CloseOnEscape>


class DropdownLite extends Component {

	escaped() {
		console.log('Escaped')
		return (
			<div>
				Shit happens ... 				
			</div>
		)
	}

	render() {
		const { myProp } = this.props		
		return (
			<div>
				<StyledDropdownLite myProp={myProp}>

					<StyledDropdownLiteButton>
						Dropdown
					</StyledDropdownLiteButton>

					<StyledDropdownLiteContent>

						<StyledDropdownLiteContentLink href='#'>Link 1
						</StyledDropdownLiteContentLink>
						<StyledDropdownLiteContentLink href='#'>Link 2
						</StyledDropdownLiteContentLink>
						<StyledDropdownLiteContentLink href='#'>Link 3
						</StyledDropdownLiteContentLink>


					</StyledDropdownLiteContent>
				
				</StyledDropdownLite>
				
				{/* <MyComponent onEscape={this.escaped} myProp={myProp} /> */}
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