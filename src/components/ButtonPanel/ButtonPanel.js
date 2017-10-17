import React, { Component } from 'react'
import StyledButtonPanel from './ButtonPanelStyles'


export default class ButtonPanel extends Component {
	render() {
		const { content, children, ...styles } = this.props
		return (
			<StyledButtonPanel {...styles}>
				{content ? content.map((button, index) => React.cloneElement(button, { key: index })) :
					children ? children : null
				}
			</StyledButtonPanel>
		)
	}
}
ButtonPanel.defaultProps = {
	align: 'center',
	direction: 'horizontal',
	wrap: 'nowrap',
	justify: 'center',
	width: 'auto',
	height: 'auto',
	debug: false,
	style: {
		margin: '3px',
	}
}