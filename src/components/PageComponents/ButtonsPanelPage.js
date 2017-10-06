import React, { Component } from 'react'
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
				ButtonPanel (direction row default props) with content component array, default props
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
					ButtonPanel (direction row default) with children, default props
				<Div flex={'column nowrap'}>
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
					ButtonPanel (direction column) with children, default props
					<Div flex='row nowrap'>
						<ButtonPanel direction='column' height='auto' width='auto' debug={true}>
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
						<ButtonPanel direction='column' height='auto' width='auto' debug={true}>
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
					ButtonPanel (direction column) with content component array
					<Div flex='row nowrap'>
						<ButtonPanel direction='column' debug={true}
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
						<ButtonPanel direction='column' justify='left' debug={true} content={[
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
					ButtonPanel (direction row) with children, justify space-between
					<Div flex='row nowrap' style={{ width: '100%' }}>
						<ButtonPanel direction='row' width={'100%'} justify='spaceBetween' debug={true}>
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
						<ButtonPanel direction='row' justify={'spaceBetween'} width={'100%'} debug={true}>
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
					ButtonPanel (direction column) with content component array
					<Div flex='row nowrap'>
						<ButtonPanel direction='row' justify={'spaceBetween'} width={'100%'} debug={true}
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
						<ButtonPanel direction='row' justify={'spaceBetween'} width={'100%'} debug={true} 
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
					ButtonPanel (direction row) with children, justify right
					<Div flex='row nowrap' style={{ width: '100%' }}>
						<ButtonPanel direction='row' width={'100%'} justify='right' debug={true}>
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
						<ButtonPanel direction='row' justify={'right'} width={'100%'} debug={true}>
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

export default ButtonsPage
