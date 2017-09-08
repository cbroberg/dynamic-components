import React, { Component } from 'react'
import { toast } from 'react-toastify'
import copy from 'copy-to-clipboard'
import { StyledToast, Button } from 'AppStyles'
// import Loader from 'components/Loader/Loader'
// import Card from 'components/Card/Card'
// import Tag from 'components/Tag/Tag'

import IconCard from 'components/IconCard/IconCard'
import { icons } from 'components/Icon/Icon'

// import ColorCard from 'components/ColorCard/ColorCard'
// import { colors } from 'theme/colors'

// import ColorPicker from 'components/ColorPicker/ColorPicker'


const cardImages = []
cardImages.push(require('assets/avatar_female.png')) // 0
cardImages.push(require('assets/avatar_male.png')) // 1
cardImages.push(require('assets/christian.png')) // 2
cardImages.push(require('assets/mette.png')) // 3
cardImages.push(require('assets/mathilde.png')) // 4
cardImages.push(require('assets/viola.png')) // 5
cardImages.push(require('assets/frederik.png')) // 6

const notify = (message) => toast.success(message)

function copyToClipboard(e, text) {
	// e.preventDefault()
	copy(text)
	notify(`"${text}" ... has been copyied to the clipboard`)
}

function renderIcons() {
	
	return Object.entries(icons).map((icon, index) => {
		return (
			<IconCard
				key={index}
				icon={icon[1].name}
				header={icon[1].action}
				content={icon[1].usage}
				tags={icon[1].tags}
				onClick={(e) => copyToClipboard(e, icon[1].name)}
			/>
		)
	})
}

class Pages extends Component {
	state = {
		activeIndex: 0
	}

	selectPageIndex(activeIndex, pages) {
		this.setState({ activeIndex })
		console.log(activeIndex)
		console.log(pages[activeIndex])
		// return pages[activeIndex].content
		renderIcons()
	}

	renderPages() {
		const { pages, disabled } = this.props
		return pages.map((page, index) => {
			// const isActive = this.state.activeIndex === index
			const isDisabled = disabled.includes(index)
			return (
				<Button
					key={index}
					disable={isDisabled}
					//	className={isDisabled ? 'page disabled' : isActive ? 'page active' : 'page'}
					onClick={isDisabled ? null : () => this.selectPageIndex(index, pages)}
				>{page.label} {/* {page.content} */}
				</Button>
			)
		})
	}

	renderContent() {
		const { pageData } = this.props
		const { activeIndex } = this.state
		return (
			<div>
				{pageData[activeIndex].content}
			</div>
		)
	}

	render() {
		const pages = (
			<div>
				{this.renderPages()}
			</div>
		)

		const content = (
			<div>
				{this.renderContent()}
			</div>
		)
		return (
			<div>
				{pages}{content}
			</div>
		)
	}
}

class App2 extends Component {

	render() {
		const pageData = [
			{
				label: 'Colors',
				content: 'This is our available color palette'
			},
			{
				label: 'Icons',
				content: renderIcons()
			},
			{
				label: 'Tags',
				content: 'This is our tags'
			},
			{
				label: 'Loaders',
				content: 'This is our loaders'
			},
			{
				label: 'Cards',
				content: 'This is our cards'
			},
			{
				label: 'Pickers',
				content: 'This is our color pickers'
			},

		]
		return (
			<div>
				<Pages pages={pageData} disabled={[3]} />
				<StyledToast
					position='top-right'
					type='default'
					autoClose={3000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					pauseOnHover
				/>
			</div>
		)
	}
}

export default App2
