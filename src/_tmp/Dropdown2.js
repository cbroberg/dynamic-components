import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledDropdown, StyledDropdownButton, StyledDropdownList, StyledDropdownListItem } from 'components/DropdownLite/DropdownStyles'
import onClickOutside from 'react-onclickoutside'

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

	onKeydown = ({ keyCode }) => {
		switch (keyCode) {
			case 27: // ESCAPE
				this.setState({ hover: false })
				break
			case 38: // ARROW KEY UP
				break
			case 40: // ARROW KEY DOWN
				break
			case 13: // ENTER				
				break
			default:				
				break
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeydown)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeydown)
	}

	hoverOn = () => {
		this.setState({ hover: true })
	}

	hoverOff = () => {
		this.setState({ hover: false })
	}

	handleClickOutside = () => {
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

	isEven(n) {
		return n % 2 === 0
	}

	onSelectItem = (itemValue) => {
		this.setState({ value: itemValue })
		this.props.selectedValue(itemValue)
		this.setState({ hover: false })
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

export default onClickOutside(Dropdown)
