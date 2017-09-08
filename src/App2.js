import React, { Component } from 'react'
import * as Icons from 'react-icons/lib/md'
import copy from 'copy-to-clipboard'
import { Button, Header } from 'AppStyles'
import { TwitterPicker } from 'react-color'
import { colors, getUniqueColors } from 'theme/colors'
import Tag from 'components/Tag/Tag'
import { ColorsPage, IconsPage, TagsPage, LoadersPage, CardsPage, PickersPage } from 'components/PageComponents'

const colorPalette = getUniqueColors(colors)

class Tabs extends Component {
	state = {
		activeIndex: 0
	}

	selectTabIndex(activeIndex) {
		this.setState({ activeIndex })
	}

	renderTabs() {
		const { data, disabled } = this.props
		return data.map((tab, index) => {
			// const isActive = this.state.activeIndex === index
			const isDisabled = disabled.includes(index)
			return (
				<Button
					key={index}
					disable={isDisabled}
					//	className={isDisabled ? 'tab disabled' : isActive ? 'tab active' : 'tab'}
					onClick={isDisabled ? null : () => this.selectTabIndex(index)}
				>{tab.label}
				</Button>
			)
		})
	}

	renderPanel() {
		const { data } = this.props
		const { activeIndex } = this.state
		return (
			<div>
				<Header>
					{data[activeIndex].content}
				</Header>
			</div>
		)

	}

	render() {
		const tabs = (
			<div key="tabs">
				{this.renderTabs()}
			</div>
		)
		const panel = (
			<div key="panels">
				{this.renderPanel()}
			</div>
		)

		return (
			<div key="TabPanels">
				{[tabs, panel]}
			</div>
		)
	}
}

class App extends Component {

	render() {
		const tabData = [
			{
				label: <Icons.MdCloudDownload size={50} />,
				content: <TwitterPicker colors={colorPalette} color="#3B97D3" /> /* 'This is our download service' */
			},
			{
				label: <Icons.MdCloudUpload size={50} />,
				content: DisplayTags()
			},
			{
				label: <Icons.MdLanguage size={50} />,
				content: 'This is our translation service'
			},
			{
				label: <Icons.MdDateRange size={50} color={'orange'} />,
				content: 'This is our date selector service'
			},

		]
		return (
			<div>
				<Tabs
					data={tabData}
					disabled={[3]}
				/>
			</div>
		)
	}
}

export default App

function DisplayTags() {
	return (
		colors.map((color, index) => (
			<Tag
				color={color.value}
				label={color.name}
				url="http://odeumcode.com"
				open={true}
				onClick={(e) => copyToClipboard(e, color.name)}
				key={index} />
		))
	)
}

function copyToClipboard(e, text) {
	// e.preventDefault()
	copy(text)
}