import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledTag } from 'components/Tag/TagStyles'


class Tag extends Component {
	render() {
		const { color, label } = this.props
		return (
			<StyledTag color={color} onClick={this.props.onClick}>{label}</StyledTag>
		)
	}
}

Tag.propTypes = {
	color: PropTypes.string,
	label: PropTypes.string
}

Tag.defaultProps = {
	color: '#F8BB31',
	label: 'Default Tag Label'
}

export default Tag
