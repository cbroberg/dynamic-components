import React, { Component } from 'react'
import StyledButtonPanel from './ButtonPanelStyles'


export default class ButtonPanel extends Component {
	render() {
		const { Content, children, ...styles } = this.props
		return (
			<StyledButtonPanel {...styles}>
				{Content ? Content.map((Button, index) => React.cloneElement(Button, { key: index })) :
					children ? children : null
				}
			</StyledButtonPanel>
		)
	}
}
ButtonPanel.defaultProps = {
	align: 'center',
	direction: 'row',
	wrap: 'nowrap',
	justify: 'center',
	width: 'auto',
	height: 'auto',
	debug: false,
	style: {
		margin: '3px',
	}
}