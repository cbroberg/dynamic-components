import React, { Component } from 'react'
import { SkeletonLoader } from 'components/DynamicSkeleton/SkeletonStyles'

var skeletonLoaderStyles

class Skeleton extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
		}
		this.renderChild = this.renderChild.bind(this)
		this.cssProps = this.cssProps.bind(this)
		this.inLine = this.inLine.bind(this)
	}
    
	componentDidUpdate() {
		this.state.isLoading ? this.setState({ isLoading: false }) : null
		console.log(this.state.isLoading)
	}

	cssProps(rules) {
		var regex = /([\w-]*)\s*:\s*([^;]*)/g
		var match, properties = {}
		while (match = regex.exec(rules)) properties[this.inLine(match[1])] = match[2].trim() 
		return properties
	}

	inLine(cssTemp1) {
		var css = ""
		var i = 0
		var cssTemp = cssTemp1
		var stringTemp = cssTemp.split("-")
		css = stringTemp[0]
		while (stringTemp.length > i ) {
			if (i > 0) {
				css += stringTemp[i].replace(stringTemp[i].charAt(0), stringTemp[i].charAt(0).toUpperCase())
			}
			i++
		}
		return css
	}

	renderChild() {
		var temp1 = []
		var temp2 = []
		var temp3 = []
		React.Children.map(this.props.children, child => { 
			temp1.push(child)
		})
		SkeletonLoader.componentStyle.rules.forEach(function(element) {
			skeletonLoaderStyles += element.toString()
		}, this)

		temp2.push(skeletonLoaderStyles)
		temp1.forEach(function(element) {
			if (typeof(element.type) !== 'string') {
				temp2.unshift(element.type.componentStyle.rules[0].toString())
				var properties = this.cssProps(temp2)
				temp3.push(properties)
				temp2.shift()
			} else if (typeof(element.type) === "string") {
				temp3.push(element.props.className)
			}
		}, this)
		return temp3.map((properties, index) =>  <div key={index}>{typeof(properties) !== 'string' ? <div style={properties}/> : <div className={properties} style={this.cssProps(skeletonLoaderStyles)}/>}</div>)
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