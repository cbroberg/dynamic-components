import React, { Component } from 'react'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'
import Tag from 'components/Tag/Tag'
import { colors } from 'theme/colors'


class TagsPage extends Component {

	notify = (message) => toast.success(message)

	copyToClipboard(e, text) {
		// e.preventDefault()
		copy(text)
		this.notify(`"${text}" ... has been copyied to the clipboard`)
	}

	renderTags() {
		return (
			colors.map((color, index) => (
				<Tag
					color={color.value}
					label={color.name}
					url="http://odeumcode.com"
					open={true}
					onClick={(e) => this.copyToClipboard(e, color.name)}
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
