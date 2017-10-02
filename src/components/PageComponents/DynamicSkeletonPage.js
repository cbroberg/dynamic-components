import React, { Component } from 'react'
import Skeleton from 'components/DynamicSkeleton/Skeleton.js'
import { Label1, Label2, Label3 } from 'components/DynamicSkeleton/Styles'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = ({
			body: ''
		})
	}

	componentDidMount() {
		setTimeout(() => this.setState(
			{
				body: 'Some Content Some Content Some Content'
			}
    ), 3000)
	}
  

	render() {
		return (
      <div>
       <Skeleton><Label1>{this.state.body}</Label1><label>hej</label><Label2>{this.state.body}</Label2><Label3>{this.state.body}</Label3></Skeleton>
      </div>
		)
	}
}

export default App
