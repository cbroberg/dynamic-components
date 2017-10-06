import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import Button from 'components/Button/Button'
import ButtonPanel from 'components/ButtonPanel/ButtonPanel'
class ButtonsPage extends Component {

	render() {
		return (
			<div>
				
				<ButtonPanel justify='left' align='center' direction='row' wrap='wrap' height='auto'>
					<Button
						label={'Send Mail'}
						icon='mail_outline'
						iconSize={18}
						color={'#3B97D3'}
						onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
					/>

					<Button
						label={'Save'}
						icon='check_circle'
						iconSize={18}
						color={'#34495D'}
						onClick={(e) => copyToClipboard(e, 'Your form is saved', true)}
					/>

					<Button
						label={'Laptop Settings'}
						icon='laptop_mac'
						iconSize={18}
						color={'#81C1EA'}
						onClick={(e) => copyToClipboard(e, 'Laptop settings', true)}
					/>

					<Button
						label={''}
						icon='place'
						iconSize={18}
						color={'#5E5E5E'}
						onClick={(e) => copyToClipboard(e, 'Map View', true)}
					/>

					<Button
						label={''}
						icon='view_list'
						iconSize={18}
						color={'#FF9600'}
						onClick={(e) => copyToClipboard(e, 'List View', true)}
					/>

					<Button
						label={''}
						icon='view_module'
						iconSize={18}
						color={'#764EB9'}
						onClick={(e) => copyToClipboard(e, 'Card View', true)}
					/>

					<Button
						label={'Go to Dashboard'}
						icon='dashboard'
						iconSize={18}
						color={'#D42027'}
						onClick={(e) => copyToClipboard(e, 'Go to Dashboard', true)}
					/>

					<Button
						label={'Opret nyt tillæg'}
						icon='add_circle'
						iconSize={18}
						color={'#F8BB31'}
						onClick={(e) => copyToClipboard(e, 'Adding new appendix', true)}
					/>

					<Button
						label={'Upload Data'}
						icon='cloud_upload'
						iconSize={18}
						color={'#25B89A'}
						onClick={(e) => copyToClipboard(e, 'Uploading data ...', true)}
					/>

					<Button
						label={'Reports'}
						icon='assignment_turned_in'
						iconSize={18}
						color={'#FF9600'}
						onClick={(e) => copyToClipboard(e, 'Reports', true)}
					/>

					<Button
						label={'Card View'}
						icon='view_module'
						iconSize={18}
						color={'#764EB9'}
						onClick={(e) => copyToClipboard(e, 'Card View', true)}
					/>

					<Button
						label={'Bug Report'}
						icon='bug_report'
						iconSize={18}
						color={'#3B97D3'}
						onClick={(e) => copyToClipboard(e, 'Bug Report filed ...', true)}
					/>

					<Button
						label={'Add User'}
						icon='person_add'
						iconSize={18}
						color={'#E98832'}
						active={false}
						inactiveColor={'#006CB2'}
						onClick={(e) => copyToClipboard(e, 'User added', true)}
					/>

					<Button
						label={''}
						icon='input'
						iconSize={18}
						color={'#2AC639'}
						onClick={(e) => copyToClipboard(e, 'Form Field', true)}
					/>

					<Button
						label={'No Icon'}
						iconSize={18}
						color={'#EA228F'}
						onClick={(e) => copyToClipboard(e, 'Button with no icon', true)}
					/>

					<Button
						label={'Select Time'}
						icon='access_time'
						iconSize={18}
						color={'#D4CD11'}
						onClick={(e) => copyToClipboard(e, 'Time selected', true)}
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
						onClick={(e) => copyToClipboard(e, 'Default Color', true)}
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
						onClick={(e) => copyToClipboard(e, 'Creating New Form', true)}
					/>
				</ButtonPanel>
			</div>
		)
	}
}

export default ButtonsPage
