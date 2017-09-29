import React, { Component } from 'react'
import { SkeletonLoader, SkeletonDiv } from 'components/DynamicSkeleton/SkeletonStyles'


var skeletonLoaderStyles = ""

class Skeleton extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
		}
		this.renderChild = this.renderChild.bind(this)
	}
    
	componentDidUpdate() {
		if (this.state.isLoading) {
			this.setState({
				isLoading: false
			})
		}
	}

	renderChild() {
		var temp1 = []
		skeletonLoaderStyles = ""
		SkeletonLoader.componentStyle.rules.forEach(function(element) {
			skeletonLoaderStyles += element.toString()
		}, this)
		var css = ""
		React.Children.map(this.props.children, child => {
			if (typeof(child.type) !== 'string') {
				css += child.type.componentStyle.rules[0].toString() + skeletonLoaderStyles.toString()
				temp1.push(css)
				css = ""
			}
		})
		return temp1.map((properties, index) =>  < SkeletonDiv key={index} innerRef={(skeletonDivRef) => {return skeletonDivRef !== null ? skeletonDivRef.style = properties : null}} />)
	}
        
	render() {
		return (
            <div>
                {this.state.isLoading ?
            <div>
                {this.renderChild()}</div> :
                <div>{this.props.children}</div>}
           </div>
		)
	}
}

export default Skeleton