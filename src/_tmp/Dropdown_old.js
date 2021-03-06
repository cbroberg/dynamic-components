import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledDropdown, StyledDropdownButton, StyledDropdownList, StyledDropdownListItem } from 'components/DropdownLite/DropdownStyles'
// import { version } from './package.json'

// console.log(version)

class Dropdown extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hover: false,
			width: null,
			height: null,
			value: null
		}
	}

	componentDidMount() {
		
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

	onSelectItem = (itemValue) => {
		this.setState({ value: itemValue })
		this.props.selectedValue(itemValue)
		this.hoverOff()
	}

	render() {
		const { items, label, type } = this.props
		let _width = this.state.width
		let _height = this.state.height
		return (
			<div>
				{type === 'hover' ? 
				<StyledDropdown>
					<StyledDropdownButton 						
						innerRef={(node) => this.getElementSizes(node)}
						onTouchStart={this.hoverOn}
						onTouchEnd={this.hoverOff}
						onMouseEnter={this.hoverOn}
						onMouseLeave={this.hoverOff}>{label}
					</StyledDropdownButton>

					{this.state.hover ?
						<StyledDropdownList
							width={_width}
							height={_height}
							onTouchStart={this.hoverOn}
							onTouchEnd={this.hoverOff}
							onMouseEnter={this.hoverOn}
							onMouseLeave={this.hoverOff}>
							{items.map((item, index) => (
								<StyledDropdownListItem 
									key={index} 
									width={_width} 
									href={item.href} 
									active={item.active} 
									onClick={item.active ? () => this.onSelectItem(item.value) : null} 
									onTouchEnd={item.active ? () => this.onSelectItem(item.value) : null}
									download={''}>{item.label}
								</StyledDropdownListItem>
							))}
						</StyledDropdownList> : null
					}
				</StyledDropdown> : 
				<StyledDropdown> 
					<StyledDropdownButton
						innerRef={(node) => this.getElementSizes(node)} 
						onClick={this.state.hover ? this.hoverOff : this.hoverOn}>{label} 						
					</StyledDropdownButton>

					{this.state.hover ?
						<StyledDropdownList
							width={_width}
							height={_height}
						>
							{items.map((item, index) => (
								<StyledDropdownListItem
									key={index}
									width={_width}
									href={item.href}
									active={item.active} 									
									onClick={item.active ? () => this.onSelectItem(item.value) : null} 									
									download={''}
								>{item.label}
								</StyledDropdownListItem>
							))}
						</StyledDropdownList> : null
					}
				</StyledDropdown>
				}
			</div>
		)
	}
}

Dropdown.propTypes = {
	items: PropTypes.array.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['hover', 'click']).isRequired,
	snap: PropTypes.oneOf(['left', 'right']),
	multiple: PropTypes.bool,
	onSearch: PropTypes.func,
	onChange: PropTypes.func, // value(s)
	placeHolder: PropTypes.string,
	searchPlaceHolder: PropTypes.string,
}

Dropdown.defaultProps = {
	label: 'Select an item',
	type: 'click',
	snap: 'left'
}

export default Dropdown
