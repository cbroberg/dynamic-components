import React, { Component } from 'react'

export default class HandleKeys extends Component {
	
	constructor(props) {
		super(props)
	
		this.handleKeyDown = this.handleKeyDown.bind(this)
	
		this.state = {
			cursor: 0,
			items: [
				{
					label: 'Buttons',
					value: 'buttons',
					href: null,
					icon: '',
					active: true
				},
				{
					label: 'Cards',
					value: 'cards',
					href: null,
					icon: '',
					active: true
				},
				{
					label: 'Dropdowns',
					value: 'dropdowns',
					href: null,
					icon: '',
					active: true
				},
				{
					label: 'Icons',
					value: 'icons',
					href: null,
					icon: '',
					active: true
				},
				{
					label: 'Loaders',
					value: 'loaders',
					href: null,
					icon: '',
					active: true
				},
				{
					label: 'Meters',
					value: 'meters',
					href: null,
					icon: '',
					active: true
				},
				{
					label: 'Tags',
					value: 'tags',
					href: null,
					icon: '',
					active: true
				},
				{
					label: 'Modals',
					value: 'modals',
					href: null,
					icon: '',
					active: false
				}
			]

		}
	}

	handleKeyDown(e) {
		const { cursor, items } = this.state
		// arrow up/down button should select next/previous list element
		if (e.keyCode === 38 && cursor > 0) {
			this.setState(prevState => ({
				cursor: prevState.cursor - 1
			}))
		} else if (e.keyCode === 40 && cursor < items.length - 1) {
			this.setState(prevState => ({
				cursor: prevState.cursor + 1
			}))
		}
	}

	render() {
		const { cursor, items } = this.state

		return (
			<div>
				<input onKeyDown={this.handleKeyDown} />
				<ul>
					{
						items.map((item, i) => (
							<li
								key={item.value}
								className={`${cursor === i ? 'active' : ''}`}
							>
								<span>{item.label}</span>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}