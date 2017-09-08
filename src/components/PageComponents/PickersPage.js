import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ColorPicker from 'components/ColorPicker/ColorPicker'

class PickersPage extends Component {

	render() {
		return (
			<div>
				<ColorPicker />
			</div>
		)
	}
}

PickersPage.propTypes = {
	aaa: PropTypes.string,
	bbb: PropTypes.string
}

PickersPage.defaultProps = {
	aaa: '',
	bbb: ''
}

export default PickersPage

