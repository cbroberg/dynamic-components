import React, { Component } from 'react'
import { Divider, StyledToast } from 'AppStyles'
import { ButtonsPage, ColorsPage, IconsPage, MetersPage, TagsPage, LoadersPage, CardsPage, PickersPage } from 'components/PageComponents'
import Card from 'components/Card/Card'

class Pages extends Component {
	state = {
		activePage: 0
	}

	selectPageIndex(activePage) {
		this.setState({ activePage })

	}

	renderPages() {
		const { pages, disabled } = this.props
		return pages.map((page, index) => {
			const isActive = this.state.activePage === index
			const isDisabled = disabled.includes(index)
			return (
				<Card
					key={index}
					isActive={isActive}
					hasImage={false} 
					isDisabled={isDisabled} 
					bgColor='#F8BB31' 
					disabledColor='#E74C3C'
					header={page.label}
					content={page.description}
					onClick={isDisabled ? null : () => this.selectPageIndex(index)}
				/>
			)
		})
	}

	renderPageContent() {
		const { pages } = this.props
		const { activePage } = this.state
		return (
			<div>
				<Divider>
					{pages[activePage].content}
				</Divider>
			</div>
		)

	}

	render() {
		const pages = (
			<div key="pages">
				{this.renderPages()}
			</div>
		)
		const pagecontent = (
			<div key="pagecontent">
				{this.renderPageContent()}
			</div>
		)

		return (
			<div key="PageContents">
				{[pages, pagecontent]}
			</div>
		)
	}
}

class App extends Component {

	render() {
		const pageData = [
			{
				label: 'Buttons',
				description: 'This is our buttons',
				content: <ButtonsPage />
			},
			{
				label: 'Cards',
				description: 'This is our cards',
				content: <CardsPage />
			},
			{
				label: 'Colors',
				description: 'This is our colors',
				content: <ColorsPage />
			},
			{
				label: 'Icons',
				description: 'This is our icons',
				content: <IconsPage />
			},
			{
				label: 'Loaders',
				description: 'This is our loaders',
				content: <LoadersPage />
			},
			{
				label: 'Meters',
				description: 'This is our meters',
				content: <MetersPage />
			},
			{
				label: 'Pickers',
				description: 'This is our pickers',
				content: <PickersPage />
			},
			{
				label: 'Tags',
				description: 'This is our tags',
				content: <TagsPage />
			},
			{
				label: 'Disabled',
				description: 'This is disabled',
				content: null
			},
		]
		return (
			<div>
				<Pages pages={pageData} disabled={[8]} />
				<StyledToast
					position='top-right'
					type='default'
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					pauseOnHover
				/>
			</div>
		)
	}
}

export default App
