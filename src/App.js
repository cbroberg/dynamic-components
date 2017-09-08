import React, { Component } from 'react'
import { Divider, StyledToast, Button } from 'AppStyles'
import { ColorsPage, IconsPage, TagsPage, LoadersPage, CardsPage, PickersPage } from 'components/PageComponents'


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
			// const isActive = this.state.activePage === index
			const isDisabled = disabled.includes(index)
			return (
				<Button
					key={index}
					disable={isDisabled}
					//	className={isDisabled ? 'tab disabled' : isActive ? 'tab active' : 'tab'}
					onClick={isDisabled ? null : () => this.selectPageIndex(index)}
				>{page.label}
				</Button>
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
				label: 'Cards',
				content: <CardsPage />
			},
			{
				label: 'Colors',
				content: <ColorsPage />
			},
			{
				label: 'Icons',
				content: <IconsPage />
			},
			{
				label: 'Loaders',
				content: <LoadersPage />
			},
			{
				label: 'Pickers',
				content: <PickersPage />
			},
			{
				label: 'Tags',
				content: <TagsPage />
			},
			{
				label: 'Disabled',
				content: <TagsPage />
			},
		]
		return (
			<div>
				<Pages pages={pageData} disabled={[6]} />
				<StyledToast
					position='top-right'
					type='default'
					autoClose={3000}
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
