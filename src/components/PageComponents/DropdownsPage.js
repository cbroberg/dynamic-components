import React, { Component } from 'react'
import Dropdown from 'components/Dropdown/Dropdown'
import { Photo, TimeInfo, SingleLinkContainer, LinkChildrenContainer, SingleLinkIconContainer } from 'components/Dropdown/DropdownStyles'

class DropdownsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: [
				{ label: 'some content some content some content some content', time: '10 hours ago', flag: true },
				{ label: 'some content some content some content some content', time: '14 hours ago', flag: false },
				{ label: 'some content some content some content some content', time: '15 hours ago', flag: true },
				{ label: 'some content some content some content some content', time: '19 hours ago', flag: true },
				{ label: 'some content some content some content some content', time: '14 hours ago', flag: false },
				{ label: 'some content some content some content some content', time: '16 hours ago', flag: true },
				{ label: 'some content some content some content some content', time: '14 hours ago', flag: true },
				{ label: 'some content some content some content some content', time: '14 hours ago', flag: true },
				{ label: 'some content some content some content some content', time: '14 hours ago', flag: true }
			],
		}
	}

	
	markAsReadHandler = (event) => {
		var temp = this.state.arr
		for (var i = 0; temp.length > i; i++) {
			temp[i].flag = false
		}
		this.setState({ arr: temp })
	}

	renderChildren = () => {
		console.log('hej')
		return this.state.arr.map((data, index) => {
			return <Content key={index} label={data.label} time={data.time} isReaded={data.flag}/>
		 })
	}

	render() {
		return (
			<div>
				<Dropdown markAsReadHandler={this.markAsReadHandler}>
					{this.renderChildren()}
				</Dropdown>
			</div>	
		)
	}
}

export default DropdownsPage

const Content =  (props) => {
	return (
		<SingleLinkContainer 
			isReaded={props.isReaded}
			href={props.link}>

			<SingleLinkIconContainer>
				<Photo src={props.photo}/>
			</SingleLinkIconContainer>

			<LinkChildrenContainer>
				<label>{props.label}</label>
				<TimeInfo>{props.time}</TimeInfo>
			</LinkChildrenContainer>
			
		</SingleLinkContainer>
	)
}
