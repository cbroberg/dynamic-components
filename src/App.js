import React, { Component } from 'react'
import { Divider, StyledToast } from 'AppStyles'
import Card from 'components/Card/Card'
import * as Page from 'components/PageComponents'
	

class Pages extends Component {
	state = {
		activePage: 8
	}

	selectPageIndex(activePage) {
		this.setState({ activePage })

	}

	renderPages() {
		const { pages, disabled } = this.props
		return pages.map((page, index) => {
			const isActive = this.state.activePage === index
			//TODO: Use Polyfill to support Internet Explorer and Opera - Andrei
			/* 
			 if (!String.prototype.includes) {
     			String.prototype.includes = function() {
        			'use strict';
        			return String.prototype.indexOf.apply(this, arguments) !== -1;
   			  };
 			}
			*/
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
		// Add routes to pages so they can be accessed through /buttons, /cards ... 
		const pageData = [
			{
				label: 'Buttons',
				description: 'Buttons (0)',
				content: <Page.ButtonsPage />
			},
			{
				label: 'Cards',
				description: 'Cards (1)',
				content: <Page.CardsPage />
			},
			{
				label: 'Colors',
				description: 'Colors (2)',
				content: <Page.ColorsPage />
			},
			{
				label: 'Dropdown',
				description: 'Dropdown (3)',
				content: <Page.DropdownsPage />
			},
			{
				label: 'Dropdown Lite',
				description: 'Dropdown Lite (4)',
				content: <Page.DropdownLitePage />
			},
			{
				label: 'Dynamic Skeleton',
				description: 'Dynamic Skeletons (5)',
				content: <Page.DynamicSkeletonPage />
			},
			{
				label: 'Icons',
				description: 'Icons (6)',
				content: <Page.IconsPage />
			},
			{
				label: 'Loaders',
				description: 'Loaders (7)',
				content: <Page.LoadersPage />
			},
			{
				label: 'Loginmodal',
				description: 'Login Modal (8)',
				content: <Page.LoginModalPage />
			},
			{
				label: 'Meters',
				description: 'Meters (9)',
				content: <Page.MetersPage />
			},
			{
				label: 'Modal',
				description: 'Modal (10)',
				content: <Page.ModalPage />
			},
			{
				label: 'Pickers',
				description: 'Pickers (11)',
				content: <Page.PickersPage />
			},
			{
				label: 'Skeletons',
				description: 'Skeletons (12)',
				content: <Page.SkeletonPage />
			},
			{
				label: 'SourcePointer',
				description: 'SourcePointer (13)',
				content: <Page.SourcePointerPage />
			},
			{
				label: 'Tags',
				description: 'Tags (14)',
				content: <Page.TagsPage />
			},
			{
				label: 'Toggle Switch',
				description: 'Toggle Switch (15)',
				content: <Page.ToggleSwitchPage />
			},
			{
				label: 'Disabled',
				description: 'This is disabled',
				content: null
			},
		]
		return (
			<div>
				{this.props.version === 1 ?
					<div>
						<Pages pages={pageData} disabled={[pageData.length - 1]} />
						<StyledToast
							position='top-right'
							type='default'
							autoClose={2000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							pauseOnHover
						/>
					</div> :
					<div>
						<Page.DropdownLitePage />
					</div>
				}
			</div>
		)
	}
}

export default App
