import React, { Component } from 'react'
import './ElementWidth.css'

class ElementWidth extends Component {

	constructor(props) {
		super(props)

		this.state = {
			width: null
		}
		this.columns = ['hello', 'this is a bit more text', 'this is a bit more text ... and even more']
	}

	render() {
		return <div ref={(node) => this.calcWidth(node)}>
			{
				this.columns.map((column) => {
					return <div style={{ width: this.state.width }} className="column">{column}</div>
				})
			}
		</div>
	}

	calcWidth(node) {
		if (node && !this.state.width) {
			this.setState({
				width: node.offsetHeight
			})
			console.log(node.offsetWidth)
		}
	}
}

export default ElementWidth
