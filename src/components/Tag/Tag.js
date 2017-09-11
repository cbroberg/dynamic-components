import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledTag } from 'components/Tag/TagStyles'


class Tag extends Component {

	handleOpen(open) {
		if (open)
			return '_new'
	}

	render() {
		const { color, label, url, open, onClick } = this.props
		return (
			<StyledTag 
				color={color} 
				href={url} 
				target={this.handleOpen(open)}
				onClick={onClick}>{label}
			</StyledTag>
		)
	}
}

Tag.propTypes = {
	color: PropTypes.string,
	label: PropTypes.string,
	url: PropTypes.string,
	open: PropTypes.bool
}

Tag.defaultProps = {
	color: '#F8BB31',
	label: 'Default Tag Label',
	url: '',
	open: false
}

export default Tag
