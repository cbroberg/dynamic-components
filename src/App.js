import React, { Component } from 'react'
import { Divider, StyledToast } from 'AppStyles'
import { ButtonsPage, ColorsPage, DropdownsPage, DropdownLitePage, IconsPage, MetersPage, TagsPage, LoadersPage, CardsPage, PickersPage, SkeletonPage, ModalPage, LoginModalPage, SourcePointerPage, DynamicSkeletonPage } from 'components/PageComponents'
import Card from 'components/Card/Card'

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
				content: <ButtonsPage />
			},
			{
				label: 'Cards',
				description: 'Cards (1)',
				content: <CardsPage />
			},
			{
				label: 'Colors',
				description: 'Colors (2)',
				content: <ColorsPage />
			},
			{
				label: 'Dropdown',
				description: 'Dropdown (3)',
				content: <DropdownsPage />
			},
			{
				label: 'Dropdown Lite',
				description: 'Dropdown Lite (4)',
				content: <DropdownLitePage />
			},
			{
				label: 'Dynamic Skeleton',
				description: 'Dynamic Skeletons (5)',
				content: < DynamicSkeletonPage />
			},
			{
				label: 'Icons',
				description: 'Icons (6)',
				content: <IconsPage />
			},
			{
				label: 'Loaders',
				description: 'Loaders (7)',
				content: <LoadersPage />
			},
			{
				label: 'Loginmodal',
				description: 'Login Modal (8)',
				content: <LoginModalPage />
			},
			{
				label: 'Meters',
				description: 'Meters (9)',
				content: <MetersPage />
			},
			{
				label: 'Modal',
				description: 'Modal (10)',
				content: <ModalPage />
			},
			{
				label: 'Pickers',
				description: 'Pickers (11)',
				content: <PickersPage />
			},
			{
				label: 'Skeletons',
				description: 'Skeletons (12)',
				content: <SkeletonPage />
			},
			{
				label: 'SourcePointer',
				description: 'SourcePointer (13)',
				content: <SourcePointerPage />
			},
			{
				label: 'Tags',
				description: 'Tags (14)',
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
						<DropdownLitePage />
					</div>
				}
			</div>
		)
	}
}

export default App
