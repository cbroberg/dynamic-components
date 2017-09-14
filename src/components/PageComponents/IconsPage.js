import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import IconCard from 'components/IconCard/IconCard'
import { icons } from './../Icon/icons'

const newArray = []
class IconsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tagName: ''
		}
		this.renderIcons = this.renderIcons.bind(this)
		this.renderDropDownTags = this.renderDropDownTags.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.filterNewIcons = this.filterNewIcons.bind(this)
	}

	filterNewIcons() {
		var filterArray = []
		Object.entries(icons).map((icon) =>
			icon[1].tags.filter(i => i === this.state.tagName ? filterArray.push(icon) : null))
		return filterArray
	}

	pushToNewArray() {
		Object.entries(icons).map((item, index) => {
			return item[1].tags.map((tag) => (
				newArray.push(tag)
			))
		})
	}

	renderIcons() {
		var tagName = this.state.tagName
		if (tagName) {
			return this.filterNewIcons().map((icon, index) => {
				return (
					<IconCard
						key={index}
						icon={icon[1].name}
						header={icon[1].action}
						content={icon[1].usage}
						tags={icon[1].tags}
						onClick={(e) => copyToClipboard(e, icon[1].name, true)}
					/>
				)
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
		this.setState({ tagName: event.target.value })

	}
	//Den Gammel Function 
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
				{this.renderIcons()}

			</div>
		)
	}
}

export default IconsPage