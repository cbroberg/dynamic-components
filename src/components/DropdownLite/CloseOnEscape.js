import { Component, Children } from 'react'
import PropTypes from 'prop-types'

class CloseOnEscape extends Component {
	constructor() {
		super()
		this.onEscape = this.onEscape.bind(this)
	}

	onEscape({ keyCode }) {
		if (keyCode === 27) {
			this.props.onEscape()
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onEscape)
		console.log('Esc mounted')
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onEscape)
		console.log('Escaped will unmount')
	}

	render() {
		return Children.only(this.props.children)
	}
}

CloseOnEscape.propTypes = {
	onEscape: PropTypes.func.isRequired
}

export default CloseOnEscape

/*
	onEscape = ({ keyCode }) => {
		if (keyCode === 27) {
			this.props.onEscape()
		}
	}
*/