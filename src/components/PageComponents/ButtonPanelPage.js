import React, { Component } from 'react'
import Button from 'components/Button/Button'
import ButtonPanel from 'components/ButtonPanel/ButtonPanel'
import styled from 'styled-components'

//This is used just for demo purposes
const Div = styled.div`
	display: flex;
	flex-flow: ${(props) => props.flex}
`
class ButtonPanelPage extends Component {

	render() {
		return (
			<div>
				ButtonPanel (direction horizontal default props) with content component array, default props
				<Div flex={'column nowrap'} >
					<ButtonPanel justify='left' debug={true} content={[
						<Button
							label='Button 1 with a long name'
							icon='mail_outline'
							color={'#3B97D3'}
						/>,
						<Button
							label='Button 2 with a long name'
							icon='settings'
							color={'#3B97D3'}
						/>,
						<Button
							label='Button 3 with a long name'
							icon='menu'
							color={'#3B97D3'}
						/>]
					} />
					<ButtonPanel justify='right' debug={true} content={[
						<Button
							label='Button 1'
							icon='mail_outline'
							color={'#3B97D3'}
						/>,
						<Button
							label='Button 2'
							icon='settings'
							color={'#3B97D3'}
						/>,
						<Button
							label='Button 3'
							icon='menu'
							color={'#3B97D3'}
						/>]
					} />
				</Div>
				<div>
					ButtonPanel (direction horizontal default) with children, default props
					<Div flex={'column nowrap'} >
						<ButtonPanel debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>
						</ButtonPanel>
						<ButtonPanel debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>
						</ButtonPanel>
					</Div>
				</div>
				<div>
					ButtonPanel (direction vertical) with children, default props
					<Div flex='horizontal nowrap'>
						<ButtonPanel direction='vertical' height='auto' width='auto' debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>
						</ButtonPanel>
						<ButtonPanel direction='vertical' height='auto' width='auto' debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>
						</ButtonPanel>
					</Div>
				</div>
				<div>
					ButtonPanel (direction vertical) with content component array
					<Div flex='horizontal nowrap'>
						<ButtonPanel direction='vertical' debug={true}
							content={[
								<Button
									label='Button 1'
									icon='mail_outline'
									color={'#3B97D3'}	
								/>,
								<Button
									label='Button 2'
									icon='settings'
									color={'#3B97D3'}	
								/>,
								<Button
									label='Button 3'
									icon='menu'
									color={'#3B97D3'}	
								/>]
							} />
						<ButtonPanel direction='vertical' justify='left' debug={true} content={[
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>,
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>,
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>]
						}>

						</ButtonPanel>
					</Div>
				</div>
				<div>
					ButtonPanel (direction horizontal) with children, justify space-between
					<Div flex='horizontal nowrap' style={{ width: '100%' }}>
						<ButtonPanel direction='horizontal' width={'100%'} justify='spaceBetween' debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>
						</ButtonPanel>
						<ButtonPanel direction='horizontal' justify={'spaceBetween'} width={'100%'} debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>
						</ButtonPanel>
					</Div>
				</div>
				<div>
					ButtonPanel (direction vertical) with content component array
					<Div flex='horizontal nowrap'>
						<ButtonPanel direction='horizontal' justify={'spaceBetween'} width={'100%'} debug={true}
							content={[
								<Button
									label='Button 1'
									icon='mail_outline'
									color={'#3B97D3'}	
								/>,
								<Button
									label='Button 2'
									icon='settings'
									color={'#3B97D3'}	
								/>,
								<Button
									label='Button 3'
									icon='menu'
									color={'#3B97D3'}	
								/>]
							} />
						<ButtonPanel direction='horizontal' justify={'spaceBetween'} width={'100%'} debug={true} 
						 content={[
								<Button
									label='Button 1'
									icon='mail_outline'
									color={'#3B97D3'}
								/>,
								<Button
									label='Button 2'
									icon='settings'
									color={'#3B97D3'}
								/>,
								<Button
									label='Button 3'
									icon='menu'
									color={'#3B97D3'}
								/>]
							}>

						</ButtonPanel>
					</Div>
				</div>
				<div>
					ButtonPanel (direction horizontal) with children, justify right
					<Div flex='horizontal nowrap' style={{ width: '100%' }}>
						<ButtonPanel direction='horizontal' width={'100%'} justify='right' debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>
						</ButtonPanel>
						<ButtonPanel direction='horizontal' justify={'right'} width={'100%'} debug={true}>
							<Button
								label='Button 1'
								icon='mail_outline'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 2'
								icon='settings'
								color={'#3B97D3'}
							/>
							<Button
								label='Button 3'
								icon='menu'
								color={'#3B97D3'}
							/>
						</ButtonPanel>
					</Div>
				</div>
			</div >
		)
	}
}

export default ButtonPanelPage
