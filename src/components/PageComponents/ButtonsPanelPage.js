import React, { Component } from 'react'
import { copyToClipboard } from 'helpers'
import Button from 'components/Button/Button'
import ButtonPanel from 'components/ButtonPanel/ButtonPanel'
import styled from 'styled-components'

//This is used just for demo purposes
const Div = styled.div`
	display:flex;
	flex-flow: ${(props) => props.flex}
`
class ButtonsPage extends Component {

	render() {
		return (
			<div>
				Panel (direction row default props) with content, default props
				<Div flex={'column nowrap'} >
					<ButtonPanel justify='left' debug={true} content={[
						<Button
							label='Button 1 with a long name'
							icon='mail_outline'
							iconSize={18}
							color={'#3B97D3'}
							onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
						/>,
						<Button
							label='Button 2 with a long name'
							icon='settings'
							iconSize={18}
							color={'#3B97D3'}
							onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
						/>,
						<Button
							label='Button 3 with a long name'
							icon='menu'
							iconSize={18}
							color={'#3B97D3'}
							onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
						/>]
					} />
					<ButtonPanel justify='right' debug={true} content={[
						<Button
							label='Button 1'
							icon='mail_outline'
							iconSize={18}
							color={'#3B97D3'}
							onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
						/>,
						<Button
							label='Button 2'
							icon='settings'
							iconSize={18}
							color={'#3B97D3'}
							onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
						/>,
						<Button
							label='Button 3'
							icon='menu'
							iconSize={18}
							color={'#3B97D3'}
							onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
						/>]
					} />
				</Div>
				<div>
					Panel Row(default) with Children, default props
				<Div flex={'column nowrap'}>
						<ButtonPanel>
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
						</ButtonPanel>
						<ButtonPanel debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
						</ButtonPanel>
					</Div>
				</div>
				<div>
					Panel Column with Children, default props
					<Div flex='row nowrap'>
						<ButtonPanel direction='column' height='auto' width='auto'>
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
						</ButtonPanel>
						<ButtonPanel direction='column' debug={true} height='auto' width='auto'>
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
						</ButtonPanel>
					</Div>
				</div>
				<div>
					Panel Column with content
					<Div flex='row nowrap'>
						<ButtonPanel direction='column'
							content={[
								<Button
									label='Button 1'
									icon='mail_outline'
									iconSize={18}
									color={'#3B97D3'}
									onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
								/>,
								<Button
									label='Button 2'
									icon='settings'
									iconSize={18}
									color={'#3B97D3'}
									onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
								/>,
								<Button
									label='Button 3'
									icon='menu'
									iconSize={18}
									color={'#3B97D3'}
									onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
								/>]
							} />
						<ButtonPanel direction='column' justify='left' debug={true} content={[
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>,
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>,
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>]
						}>

						</ButtonPanel>
					</Div>
				</div>
				<div>
					Panel Row with Children, justify space-between
					<Div flex='row nowrap' style={{ width: '100%' }}>
						<ButtonPanel direction='row' width={'100%'} justify='spaceBetween'>
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
						</ButtonPanel>
						<ButtonPanel direction='row' debug={true} justify={'spaceBetween'} width={'100%'}>
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
						</ButtonPanel>
					</Div>
				</div>
				<div>
					Panel Column with content
					<Div flex='row nowrap'>
						<ButtonPanel direction='row' justify={'spaceBetween'} width={'100%'}
							content={[
								<Button
									label='Button 1'
									icon='mail_outline'
									iconSize={18}
									color={'#3B97D3'}
									onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
								/>,
								<Button
									label='Button 2'
									icon='settings'
									iconSize={18}
									color={'#3B97D3'}
									onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
								/>,
								<Button
									label='Button 3'
									icon='menu'
									iconSize={18}
									color={'#3B97D3'}
									onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
								/>]
							} />
						<ButtonPanel direction='row' debug={true} justify={'spaceBetween'} width={'100%'}
						 content={[
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>,
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>,
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>]
						}>

						</ButtonPanel>
					</Div>
				</div>
				<div>
					Panel Row with Children, justify right
					<Div flex='row nowrap' style={{ width: '100%' }}>
						<ButtonPanel direction='row' width={'100%'} justify='right'>
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
						</ButtonPanel>
						<ButtonPanel direction='row' debug={true} justify={'right'} width={'100%'}>
							<Button
								label='Button 1'
								icon='mail_outline'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 2'
								icon='settings'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
							<Button
								label='Button 3'
								icon='menu'
								iconSize={18}
								color={'#3B97D3'}
								onClick={(e) => copyToClipboard(e, 'Mail is now send', true)}
							/>
						</ButtonPanel>
					</Div>
				</div>
			</div >
		)
	}
}

export default ButtonsPage
