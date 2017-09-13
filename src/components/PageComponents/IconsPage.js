import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import IconCard from 'components/IconCard/IconCard'
import { icons } from 'components/Icon/Icon'

const newArray = []
class IconsPage extends Component {
	pushToNewArray() {
		Object.entries(icons).map((item, index) => {
			return item[1].tags.map((tag) => (
				newArray.push(tag)
			))
		})
	}
	renderDropDownTags() {
		this.pushToNewArray()
		 var array = [...new Set(newArray)]
		console.log(array)
		 return array.map((item, index) => (
			 <option onClick={this.renderIcons(item)} value={item}>{item}</option>	 
		 ))
	}
	renderOnClick() {
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

	renderIcons() {
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
	render() {
		return (
			<div>
				<select>
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