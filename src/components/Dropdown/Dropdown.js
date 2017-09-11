import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledDropdown } from 'components/Dropdown/DropdownStyles'


class Dropdown extends Component {

	render() {
		const { myProp } = this.props
		return (
			<StyledDropdown myProp={myProp}>{this.props.children}
			</StyledDropdown>
		)
	}
}

Dropdown.propTypes = {
	myProp: PropTypes.string
}

Dropdown.defaultProps = {
	myProp: ''
}

export default Dropdown
