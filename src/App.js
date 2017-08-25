import React, { Component } from 'react'
import Icon, { components } from 'components/Icon'
import * as iconname from 'components/iconnames'

let comps = []

for (let i in components) {
	// console.log(components[i].value)
	comps.push(components[i].value)
	// console.log(comps)
}


class App extends Component {

	renderIcons() {
		return comps.map((icon, index) => {
			return (
				<Icon key={index} icon={icon} size={75} />
				// <div>
				// 	{components[i].value}
				// </div
			)
		})
	}

	render() {
		return (
			<div>
				{this.renderIcons()}
				<Icon icon={iconname.ICON_SEARCH} size={75} />
			</div>
		)
	}
}

export default App

// <Icon icon="cloud_upload" size={75} />
// <Icon icon="cloud_download" size={75} />
// <Icon icon="menu" size={75} />
