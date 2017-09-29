import React, { Component } from 'react'
import Dropdown from 'components/Dropdown/Dropdown'

class DropdownsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: [
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '10 hours ago' },
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '14 hours ago' },
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '15 hours ago' },
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '19 hours ago' },
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '14 hours ago' },
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '16 hours ago' },
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '14 hours ago' },
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '14 hours ago' },
				{ label: 'some content some content some content some content', href: 'https://www.youtube.com/', time: '14 hours ago' }
			],
		}
	}

	render() {
		return (
			<div>
				<Dropdown data={this.state.arr}>
					{this.state.arr.map((data, index) => (
						<label key={index} href={data.href} icon={data.icon}>
						{data.label}
						</label>
					))} 
				</Dropdown>
			</div>
		)
	}
}

export default DropdownsPage

