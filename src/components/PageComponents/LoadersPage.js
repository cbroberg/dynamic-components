import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from 'components/Loader/Loader'


class LoadersPage extends Component {

	render() {
		return (
			<div>
				<Loader size='xxxs' velocity='fast' />
				<Loader size='xxs' velocity='fast' />
				<Loader size='xs' velocity='superfast' />
				<Loader size='small' />
				<Loader velocity='medium' />
				<Loader size='large' />
				<Loader size='xl' velocity='slow' />

			</div>
		)
	}
}

LoadersPage.propTypes = {
	aaa: PropTypes.string,
	bbb: PropTypes.string
}

LoadersPage.defaultProps = {
	aaa: '',
	bbb: ''
}

export default LoadersPage

