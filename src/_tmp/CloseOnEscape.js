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
			console.log('Escape pressed ... ')
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onEscape)
		console.log('OnEscape mounted')
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

const Component = ({ onEscape }) => <CloseOnEscape onEscape={onEscape}><span>some stuff here</span></CloseOnEscape>

const escaped = () => {

}

const Close = ({ onEscape }) => <CloseOnEscape onEscape={escaped}><Dropdown items={items} /></CloseOnEscape>


https://github.com/conorhastings/react-close-on-escape

*/