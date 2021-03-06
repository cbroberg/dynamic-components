import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledDropdownContainer, StyledDropdown, StyledDropdownButton, StyledDropdownList, StyledDropdownListItem } from 'components/DropdownLite/DropdownStyles'
import onClickOutside from 'react-onclickoutside'
// TODO: Check https://stackoverflow.com/questions/32553158/detect-click-outside-react-component 

// import { version } from './package.json'
// console.log(version)

class Dropdown extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hover: false,
			mouse: false,
			width: null,
			height: null,
			value: null,
			hoverValue: null
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeydown)
	}
	
	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeydown)
	}
	
	onKeydown = ({ keyCode }) => {
		const { hover, mouse, hoverValue } = this.state
		switch (keyCode) {
			case 27: // ESCAPE
				this.setState({ hover: false })
				break
			case 38: // ARROW KEY UP
				break
			case 40: // ARROW KEY DOWN
				break
			case 13: // ENTER
				if (hover && mouse) {
					this.setState({ hover: false })
					this.onSelectItem(hoverValue)
				}
				break
			default:
				break
		}
	}

	onMouseEnter = (itemValue) => {
		this.setState({ mouse: true, hoverValue: itemValue })
	}
	
	onMouseLeave = () => {
		this.setState({ mouse: false })
	}

	hoverOn = () => {
		this.setState({ hover: true })
	}

	hoverOff = () => {
		this.setState({ hover: false })
	}

	handleClickOutside = () => {
		const { type } = this.props
		if (type !== 'touch') {
			this.setState({ hover: false })
		}
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
		this.setState({ hover: false, mouse: false })
	}

	renderTouch = () => {
		const { items, label } = this.props
		const { width, height } = this.state
		return (
			<StyledDropdown>
				<StyledDropdownButton
					innerRef={(node) => this.getElementSizes(node)}
					onClick={this.state.hover ? this.hoverOff : this.hoverOn}>{label}
				</StyledDropdownButton>

				{this.state.hover ?
					<StyledDropdownList
						width={width}
						height={height}>

						{items.map((item, index) => (
							<StyledDropdownListItem
								key={index}
								width={width}
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
		)
	}

	renderHover = () => {
		const { items, label } = this.props
		const { width, height } = this.state
		return (
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
						width={width}
						height={height}
						onTouchStart={this.hoverOn}
						onTouchEnd={this.hoverOff}
						onMouseEnter={this.hoverOn}
						onMouseLeave={this.hoverOff}>
						{items.map((item, index) => (
							<StyledDropdownListItem
								key={index}
								width={width}
								href={item.href}
								active={item.active}
								onClick={item.active ? () => this.onSelectItem(item.value) : null}
								onTouchEnd={item.active ? () => this.onSelectItem(item.value) : null}
								download={''}>{item.label}
							</StyledDropdownListItem>
						))}
					</StyledDropdownList> : null
				}
			</StyledDropdown>
		)
	}

	renderClick = () => {
		const { items, label } = this.props
		const { width, height } = this.state
		return (
			<StyledDropdown>
				<StyledDropdownButton
					innerRef={(node) => this.getElementSizes(node)}
					onClick={this.state.hover ? this.hoverOff : this.hoverOn}>{label}
				</StyledDropdownButton>

				{this.state.hover ?
					<StyledDropdownList
						width={width}
						height={height}>

						{items.map((item, index) => (
							<StyledDropdownListItem
								key={index}
								width={width}
								href={item.href}
								active={item.active}
								onClick={item.active ? () => this.onSelectItem(item.value) : null}
								onMouseEnter={item.active ? () => this.onMouseEnter(item.value) : null}
								onMouseLeave={this.onMouseLeave}
								download={''}
							>{item.label}
							</StyledDropdownListItem>
						))}

					</StyledDropdownList> : null
				}
			</StyledDropdown>
		)
	}

	render() {
		const { type } = this.props
		switch (type) {
			case 'touch':
				return (
					<StyledDropdownContainer>
						{this.renderTouch()}
					</StyledDropdownContainer>
					
				)
			case 'hover':
				return (
					<StyledDropdownContainer>
						{this.renderHover()}
					</StyledDropdownContainer>
				)
			case 'click':
				return (
					<StyledDropdownContainer>
						{this.renderClick()}
					</StyledDropdownContainer>
				)
			default:
				break
		}
	}
}

Dropdown.propTypes = {
	items: PropTypes.array.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['hover', 'click', 'touch']).isRequired,
	snap: PropTypes.oneOf(['left', 'right']),
	sourcepointer: PropTypes.bool,
	multiple: PropTypes.bool,
	onSearch: PropTypes.func,
	onChange: PropTypes.func, // value(s)
	placeHolder: PropTypes.string,
	searchPlaceHolder: PropTypes.string,
}

Dropdown.defaultProps = {
	label: 'Select an item',
	type: 'click',
	snap: 'left',
	sourcepointer: false,
}

export default onClickOutside(Dropdown)
