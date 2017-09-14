import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import IconCard from 'components/IconCard/IconCard'
import { icons } from './../Icon/icons'

const newArray = []
class IconsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
		this.renderOnClick = this.renderOnClick.bind(this)
		this.renderDropDownTags = this.renderDropDownTags.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.filter = this.filter.bind(this)

	}
	filter(item) {
		item = this.state.value
		return newArray.filter(word => word === item)
	}

	pushToNewArray() {
		Object.entries(icons).map((item, index) => {
			return item[1].tags.map((tag) => (
				newArray.push(tag)
			))
		})
	}
	renderOnClick(item) {
		item = this.state.value
		if (item) {
			console.log(item)
			return Object.entries(icons).map((icon, index) => {
				if (this.filter(icon)) {
					console.log('hello')
					return (
						<IconCard
							key={index}
							icon={icon[1].name}
							header={icon[1].action}
							content={icon[1].usage}
							tags={['dsjdhsj']}
							png={icon[1].png}
							svg={icon[1].svg}
							onClick={(e) => copyToClipboard(e, icon[1].name, true)}
						/>
					)
				 } else {
					console.log('Error')
					return null
					
				 }
			
			})
		} else {
			return Object.entries(icons).map((icon, index) => {
				return (
					<IconCard
						key={index}
						icon={icon[1].name}
						header={icon[1].action}
						content={icon[1].usage}
						tags={icon[1].tags}
						png={icon[1].png}
						svg={icon[1].svg}
						onClick={(e) => copyToClipboard(e, icon[1].name, true)}
					/>
				)
			})
		}

	}
	renderDropDownTags() {
		this.pushToNewArray()
		var array = [...new Set(newArray)]
		return array.map((item, index) => {
			return (
				<option key={index} value={item}>{item}</option>)
		})
	}

	handleChange(event) {
		this.setState({ value: event.target.value })

	}
	// renderIcons() {
	// 	return Object.entries(icons).map((icon, index) => {
	// 		return (
	// 			<IconCard
	// 				key={index}
	// 				icon={icon[1].name}
	// 				header={icon[1].action}
	// 				content={icon[1].usage}
	// 				tags={icon[1].tags}
	// 				onClick={(e) => copyToClipboard(e, icon[1].name, true)}
	// 			/>
	// 		)
	// 	})
	// }
	render() {
		return (
			<div>
				<select value={this.state.value} onChange={this.handleChange}>
					{this.renderDropDownTags()}
				</select>
				<a href={'https://material.io/icons/'} target={'_new'}>Missing an icon? Fin it here: https://material.io/icons/</a>
				<p />
				{this.renderOnClick()}
			</div>
		)
	}
}

export default IconsPage