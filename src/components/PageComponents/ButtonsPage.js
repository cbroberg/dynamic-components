import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import Button from 'components/Button/Button'
import ButtonPanel from 'components/ButtonPanel/ButtonPanel'


class ButtonsPage extends Component {

	handleClick = (message) => (e) => {
		e.preventDefault()
		copyToClipboard(e, message, true)
	}

	// Now without preventDefault which is already included in copyToClipboard
	handleClick2 = (message) => {
		return (e) => {
			copyToClipboard(e, message, true)
		}
	}

	render() {
		return (
			<div>
				
				<ButtonPanel justify='left' align='center' direction='horizontal' wrap='wrap' height='auto'>
					<Button
						label={'Send Mail'}
						icon='mail_outline'
						iconSize={18}
						color={'#3B97D3'}
						onClick={this.handleClick2('Your e-mail has been send!')}
					/>

					<Button
						label={'Save'}
						icon='check_circle'
						iconSize={18}
						color={'#34495D'}
						onClick={this.handleClick('Your document has been saved!')}
					/>

					<Button
						label={'Laptop Settings'}
						icon='laptop_mac'
						iconSize={18}
						color={'#81C1EA'}
						onClick={this.handleClick('Laptop settings')}
					/>

					<Button
						label={''}
						icon='place'
						iconSize={18}
						color={'#5E5E5E'}
						onClick={this.handleClick('Map View')}
					/>

					<Button
						label={''}
						icon='view_list'
						iconSize={18}
						color={'#FF9600'}
						onClick={this.handleClick('List View')}
					/>

					<Button
						label={''}
						icon='view_module'
						iconSize={18}
						color={'#764EB9'}
						onClick={this.handleClick('Card View')}
					/>

					<Button
						label={'Go to Dashboard'}
						icon='dashboard'
						iconSize={18}
						color={'#D42027'}
						onClick={this.handleClick('Go to Dashboard')}
					/>

					<Button
						label={'Opret nyt tillæg'}
						icon='add_circle'
						iconSize={18}
						color={'#F8BB31'}
						onClick={this.handleClick('Adding new appendix')}
					/>

					<Button
						label={'Upload Data'}
						icon='cloud_upload'
						iconSize={18}
						color={'#25B89A'}
						onClick={this.handleClick('Uploading data ...')}
					/>

					<Button
						label={'Reports'}
						icon='assignment_turned_in'
						iconSize={18}
						color={'#FF9600'}
						onClick={this.handleClick('Reports')}
					/>

					<Button
						label={'Card View'}
						icon='view_module'
						iconSize={18}
						color={'#764EB9'}
						onClick={this.handleClick('Card View')}
					/>

					<Button
						label={'Bug Report'}
						icon='bug_report'
						iconSize={18}
						color={'#3B97D3'}
						onClick={this.handleClick('Bug Report filed ...')}
					/>

					<Button
						label={'Add User'}
						icon='person_add'
						iconSize={18}
						color={'#E98832'}
						active={false}
						inactiveColor={'#006CB2'}
						onClick={this.handleClick('User added')}
					/>

					<Button
						label={''}
						icon='input'
						iconSize={18}
						color={'#2AC639'}
						onClick={this.handleClick('Form Field')}
					/>

					<Button
						label={'No Icon'}
						iconSize={18}
						color={'#EA228F'}
						onClick={this.handleClick('Button with no icon')}
					/>

					<Button
						label={'Select Time'}
						icon='access_time'
						iconSize={18}
						color={'#D4CD11'}
						onClick={this.handleClick('Time selected')}
					/>

					<Button
						label={'Disabled'}
						icon='visibility'
						iconSize={18}
						color={'#000'}
						isDisabled={true}
					/>

					<Button
						label={'Default Color'}
						icon='visibility_off'
						iconSize={18}
						active={false}
						onClick={this.handleClick('Default Color')}
					/>

					<Button
						label={'Disabled'}
						iconSize={18}
						color={'#513085'}
						isDisabled={true}
					/>

					<Button
						label={''}
						icon='menu'
						iconSize={18}
						color={'#5E5E5E'}
						isDisabled={true}
					/>

					<Button
						label={'Create new'}
						icon='add_circle'
						iconSize={32}
						color={'#3B97D3'}
						size={'large'}
						type={'submit'}
						onClick={this.handleClick('Creating New Form')}
					/>
				</ButtonPanel>
			</div>
		)
	}
}

export default ButtonsPage
