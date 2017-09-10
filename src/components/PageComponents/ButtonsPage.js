import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import Button from 'components/Button/Button'
// import { colors } from 'theme/colors'


class ButtonsPage extends Component {

	render() {
		return (
			<div>

				<Button 
					icon='mail_outline' 
					size={18} 
					color={'#3B97D3'}
					onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}>Send Mail
				</Button>
				
				<Button 
					icon='check_circle' 
					size={18} 
					color={'#34495D'}
					onClick={(e) => copyToClipboard(e, 'Your form is saved', true)}>Save
				</Button>
				
				<Button 
					icon='laptop_mac' 
					size={18} 
					color={'#81C1EA'}
					onClick={(e) => copyToClipboard(e, 'Laptop settings', true)}>Laptop Settings
				</Button>

				<Button
					icon='place'
					size={18}
					color={'#5E5E5E'}
					onClick={(e) => copyToClipboard(e, 'Map View', true)}>{/* Map View */}
				</Button>

				<Button
					icon='view_list'
					size={18}
					color={'#FF9600'}
					onClick={(e) => copyToClipboard(e, 'List View', true)}>{/* List View */}
				</Button>

				<Button
					icon='view_module'
					size={18}
					color={'#764EB9'}
					onClick={(e) => copyToClipboard(e, 'Card View', true)}>{/* Card View */}
				</Button>


				<Button
					icon='dashboard'
					size={18}
					color={'#D42027'}
					onClick={(e) => copyToClipboard(e, 'Go to Dashboard', true)}>Go to Dashboard
				</Button>

				<Button
					icon='add_circle'
					size={18}
					color={'#F8BB31'}
					onClick={(e) => copyToClipboard(e, 'Adding new appendix', true)}>Opret nyt tillæg
				</Button>

				<Button
					icon='cloud_upload'
					size={18}
					color={'#25B89A'}
					onClick={(e) => copyToClipboard(e, 'Uploading data ...', true)}>Upload Data
				</Button>

				<Button
					icon='assignment_turned_in'
					size={18}
					color={'#FF9600'}
					onClick={(e) => copyToClipboard(e, 'Reports', true)}>Reports
				</Button>

				<Button
					icon='view_module'
					size={18}
					color={'#764EB9'}
					onClick={(e) => copyToClipboard(e, 'Card View', true)}>Card View
				</Button>

				<Button
					icon='bug_report'
					size={18}
					color={'#3B97D3'}
					onClick={(e) => copyToClipboard(e, 'Bug Report filed ...', true)}>Bug Report
				</Button>

				<Button
					icon='person_add'
					size={18}
					color={'#E98832'}
					active={false}
					inactiveColor={'#006CB2'}
					onClick={(e) => copyToClipboard(e, 'User added', true)}>Add User
				</Button>

				<Button
					icon='input'
					size={18}
					color={'#2AC639'}
					onClick={(e) => copyToClipboard(e, 'Form Field', true)}>
				</Button>

				<Button
					size={18}
					color={'#EA228F'}
					onClick={(e) => copyToClipboard(e, 'User added', true)}>No Icon
				</Button>

				<Button
					icon='access_time'
					size={18}
					color={'#D4CD11'}
					onClick={(e) => copyToClipboard(e, 'Time selected', true)}>Select Time
				</Button>

				<Button
					icon='visibility'
					size={18}
					color={'#000'}
					isDisabled={true}>Disabled
				</Button>

				<Button
					icon='visibility_off'
					size={18}
					active={false}
					onClick={(e) => copyToClipboard(e, 'Default Color', true)}>Default Color
				</Button>

				<Button
					size={18}
					color={'#513085'}
					isDisabled={true}>Disabled
				</Button>

				<Button
					icon='menu'
					size={18}
					color={'#5E5E5E'}
					isDisabled={true}>
				</Button>

			</div>
		)
	}
}

export default ButtonsPage
