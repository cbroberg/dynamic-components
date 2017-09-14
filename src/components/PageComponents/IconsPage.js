import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import IconCard from 'components/IconCard/IconCard'
import { icons } from 'components/Icon/icons'


class IconsPage extends Component {

	renderIcons() {
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

	render() {
		return (
			<div>
				<a href={'https://material.io/icons/'} target={'_new'}>Missing an icon? Fin it here: https://material.io/icons/</a>
				<p/>
				{this.renderIcons()}
			</div>
		)
	}
}

export default IconsPage

