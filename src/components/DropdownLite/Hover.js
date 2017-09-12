import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledDropdownLite, StyledDropdownLiteButton, StyledDropdownLiteContent, StyledDropdownLiteContentItem } from 'components/DropdownLite/DropdownLiteStyles'

class Hover extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			hover: false,
		}
		
		this.hoverOn = this.hoverOn.bind(this)
		this.hoverOff = this.hoverOff.bind(this)
	}

	
	hoverOn() {
		this.setState({ hover: true })
	}

	hoverOff() {
		this.setState({ hover: false })
	}

	show() {
		console.log('Show')
		return (
			<div>
				Shit happens ... 
			</div>
		)
	}

	render() {
		// const { hover } = this.state.hover
		return (
			<div>
				{console.log(this.state.hover)}
				<StyledDropdownLite>
					<StyledDropdownLiteButton 
						onTouchStart={this.hoverOn} 
						onTouchEnd={this.hoverOff}
						onMouseEnter={this.hoverOn} 
						onMouseLeave={this.hoverOff}>Dropdown
					</StyledDropdownLiteButton>
					{this.state.hover ? 
					<StyledDropdownLiteContent 
						onTouchStart={this.hoverOn}
						onTouchEnd={this.hoverOff}
						onMouseEnter={this.hoverOn} 
						onMouseLeave={this.hoverOff}>
						<StyledDropdownLiteContentItem href='#'>List Item 1
						</StyledDropdownLiteContentItem>
						<StyledDropdownLiteContentItem href='#'>List Item 2
						</StyledDropdownLiteContentItem>
						<StyledDropdownLiteContentItem href='#'>List Item 3
						</StyledDropdownLiteContentItem>
					</StyledDropdownLiteContent> : '' }
				</StyledDropdownLite>
			</div>

			// <div
				
			// 	onMouseEnter={this.hoverOn}
			// 	onMouseLeave={this.hoverOff}
			// >
			// 	My class is: {this.state.hover ? 'Christian' : 'Mette Bugge'}
			// </div>
		)
	}
}


Hover.propTypes = {
	myProp: PropTypes.string
}

Hover.defaultProps = {
	myProp: ''
}

export default Hover

