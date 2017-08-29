# Loader Component

```js

import React, { Component } from 'react'
import StyledLoader from 'components/Loader/StyledLoader'


class Loader extends Component {
	render() {
		return (
			<div>
				<StyledLoader size={this.props.size} velocity={this.props.velocity} />			
			</div>
		)
	}
}

const Loader = (props) => (
	<StyledLoader size={props.size} velocity={props.velocity}  />
)

function Loader(props) {
	return <StyledLoader size={props.size} velocity={props.velocity} />
} 

... 
```