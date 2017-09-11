import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledXTemplate } from 'components/XTemplate/XTemplateStyles'


class XTemplate extends Component {

	render() {
		const { myProp } = this.props
		return (
			<StyledXTemplate myProp={myProp}>{this.props.children}
			</StyledXTemplate>
		)
	}
}

XTemplate.propTypes = {
	myProp: PropTypes.string
}

XTemplate.defaultProps = {
	myProp: ''
}

export default XTemplate
