import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import Tag from 'components/Tag/Tag'
import { colors } from 'theme/colors'


class TagsPage extends Component {

	renderTags() {
		return (
			colors.map((color, index) => (
				<Tag
					color={color.value}
					label={color.name}
					url="http://odeumcode.com"
					open={true}
					onClick={(e) => copyToClipboard(e, color.name, true)}
					key={index} />
			))
		)
	}

	render() {
		return (
			<div>
				{this.renderTags()}
			</div>
		)
	}
}

export default TagsPage
