import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './App'

require('typeface-source-sans-pro')

class AppHotLoader extends Component {
	render() {
		return (
			<App version={1} />	
		)
	}
}

export default AppHotLoader

render(
	<AppHotLoader />,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./index'.default, () => {
		const NextApp = require('./index').default
		render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}

// render(<App version={1} />, document.getElementById('root'))