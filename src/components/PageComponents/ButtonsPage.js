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
					onClick={(e) => copyToClipboard(e, 'mail_outline', true)}>Send mail
				</Button>
				
				<Button 
					icon='check_circle' 
					size={18} 
					color={'#34495D'}
					onClick={(e) => copyToClipboard(e, 'check_circle', true)}>Save
				</Button>
				
				<Button 
					icon='laptop_mac' 
					size={18} 
					color={'#81C1EA'}
					onClick={(e) => copyToClipboard(e, 'laptop_mac', true)}>Laptop settings
				</Button>

				<Button
					icon='settings_cell'
					size={18}
					color={'#FF9600'}
					onClick={(e) => copyToClipboard(e, 'settings_cell', true)}>Call me
				</Button>

				<Button
					icon='dashboard'
					size={18}
					color={'#D42027'}
					onClick={(e) => copyToClipboard(e, 'dashboard', true)}>Go to dashboard
				</Button>

				<Button
					icon='add_circle'
					size={18}
					color={'#F8BB31'}
					onClick={(e) => copyToClipboard(e, 'add_circle', true)}>Opret nyt tillæg
				</Button>

				<Button
					icon='cloud_upload'
					size={18}
					color={'#25B89A'}
					onClick={(e) => copyToClipboard(e, 'cloud_upload', true)}>Opret nyt tillæg
				</Button>

				<Button
					icon='assignment_turned_in'
					size={18}
					color={'#FF9600'}
					onClick={(e) => copyToClipboard(e, 'assignment_turned_in', true)}>Reports
				</Button>

				<Button
					icon='view_module'
					size={18}
					color={'#764EB9'}
					onClick={(e) => copyToClipboard(e, 'view_module', true)}>Card view
				</Button>

			</div>
		)
	}
}

export default ButtonsPage
