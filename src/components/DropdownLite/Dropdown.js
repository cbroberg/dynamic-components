import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledDropdown, StyledDropdownButton, StyledDropdownList, StyledDropdownListItem, Transition } from 'components/DropdownLite/DropdownStyles'

class Dropdown extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hover: false,
			width: null,
			height: null,
		}
	}

	componentDidMount() {
		console.log('Component mounted')
	}

	hoverOn = () => {
		this.setState({ hover: true })
	}

	hoverOff = () => {
		this.setState({ hover: false })
	}

	getElementSizes = (node) => {
		if (node && !this.state.width) {
			this.setState({
				width: (node.offsetWidth + Math.round(node.offsetWidth / 2)) + 'px',
				height: (node.offsetHeight - 4) + 'px'
			})
		}
	}

	render() {
		const { items } = this.props
		let _width = this.state.width
		let _height = this.state.height
		return (
			<div>
			<Transition />

				<StyledDropdown>

					<StyledDropdownButton 						
						innerRef={(node) => this.getElementSizes(node)}
						onTouchStart={this.hoverOn}
						onTouchEnd={this.hoverOff}
						onMouseEnter={this.hoverOn}
						onMouseLeave={this.hoverOff}>Components
					</StyledDropdownButton>

					{this.state.hover ?
						<StyledDropdownList
							width={_width}
							height={_height}
							onTouchStart={this.hoverOn}
							onTouchEnd={this.hoverOff}
							onMouseEnter={this.hoverOn}
							onMouseLeave={this.hoverOff}
						>
							{items.map((item, index) => (
								<StyledDropdownListItem 
									key={index} 
									width={_width} 
									href={item.href} 
									download=''>{item.label}
								</StyledDropdownListItem>
							))}

						</StyledDropdownList> : null
					}

				</StyledDropdown>
			</div>
		)
	}
}

Dropdown.propTypes = {
	items: PropTypes.array.isRequired,
	type: PropTypes.oneOf(['hover', 'click']).isRequired,
	snap: PropTypes.oneOf(['left', 'right']),
	multiple: PropTypes.bool,
	onSearch: PropTypes.func,
	onChange: PropTypes.func, // (value(s))
	placeHolder: PropTypes.string,
	searchPlaceHolder: PropTypes.string,
}

Dropdown.defaultProps = {
	type: 'hover',
	snap: 'left'
}

export default Dropdown
