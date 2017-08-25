import React, { Component } from 'react'
import Icon, { components } from 'components/Icon'

// for (let i in components) {
// 	console.log(components[i].value)
// }


class App extends Component {

	renderIcons() {
		// const data = []
		// this.data = components
		// return data.map((icon, index) => {
		// 	console.log('Icon: ' + icon[index].value)
		for (let i in components) {
			console.log(components[i].value)
			return (
				<div>
					<Icon icon={components[i].value} size={75} />
				</div>
			)
		}
	}

	render() {
		return (
			<div>
				{this.renderIcons()}
				{/* <Icon /> {/* default size=50 */}
				{/* <Icon icon="cloud_upload" size={75} /> */}
				{/* <Icon icon="cloud_download" size={75} /> */}
				{/* <Icon icon="menu" size={75} /> */}

			</div>
		)
	}
}

export default App
