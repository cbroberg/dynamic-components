import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import Icon, { components } from 'components/Icon'
// import * as iconname from 'components/iconnames'
import { DisplayIcon, CopyButton } from 'components/Styles'


class App extends Component {

	renderIcons() {
		return Object.entries(components).map((icon, index) => {
			return (
				<DisplayIcon key={index}>
					<div>
						<CopyToClipboard text={icon[1].value}><CopyButton>{icon[1].value}</CopyButton></CopyToClipboard>
					</div>
					<div>
						<Icon key={index} icon={icon[1].value} size={50}  />
					</div>
					<div>
						<CopyToClipboard text={`<Icon icon={${icon[1].value}}/>`}><CopyButton>{`<Icon icon={${icon[1].value}}/>`}</CopyButton></CopyToClipboard>
					</div>
				</DisplayIcon>
			)
		})
	}

	render() {
		return (
			<div>
				{this.renderIcons()}
			</div>
		)
	}
}

export default App

	
/*

text={`<Icon icon={${icon[1].value}} />`}



		return comps.map((icon, index) => {
			return (
				<Icon key={index} icon={icon} size={75} />
				// <div>
				// 	{components[i].value}
				// </div
			)
		})
	}

*/