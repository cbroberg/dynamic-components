import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import copy from 'copy-to-clipboard'
import IconCard from 'components/IconCard/IconCard'
import { icons } from 'components/Icon/Icon'


class IconsPage extends Component {

	notify = (message) => toast.success(message)

	copyToClipboard(e, text) {
		// e.preventDefault()
		copy(text)
		this.notify(`"${text}" ... has been copyied to the clipboard`)
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
					onClick={(e) => this.copyToClipboard(e, icon[1].name)}
				/>
			)
		})
	}

	render() {
		return (
			<div>
				{this.renderIcons()}
			</div>
		)
	}
}

IconsPage.propTypes = {
	aaa: PropTypes.string,
	bbb: PropTypes.string
}

IconsPage.defaultProps = {
	aaa: '',
	bbb: ''
}

export default IconsPage

