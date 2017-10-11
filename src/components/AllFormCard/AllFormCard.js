import React, { Component } from 'react'
import Icon from 'components/Icon/Icon'
import { FormBox, AnimatedTop, AnimatedBottom, IconButton } from 'components/AllFormCard/AllFormCardStyles'

class AllFormCard extends Component {

	render() {
		const { icon1, icon2, icon3, icon4, iconSize, color, color4, onClick1, onClick2, onClick3, onClick4 } = this.props
		return (
			<div>
				<FormBox>
					<AnimatedTop />
						{this.props.children}
					<AnimatedBottom >
						<IconButton onClick={onClick1}>		
							<Icon 
								icon={icon1} 
								iconSize={iconSize} 
								color={color} 
							/>
						</IconButton>
						<IconButton onClick={onClick2}>
							<Icon 
								icon={icon2} 
								iconSize={iconSize} 
								color={color} 
							/>
						</IconButton>
						<IconButton onClick={onClick3}>
							<Icon 
								icon={icon3} 
								iconSize={iconSize} 
								color={color} 
							/>
						</IconButton>
						<IconButton onClick={onClick4}>
							<Icon 
								icon={icon4} 
								iconSize={iconSize} 
								color={color4} 
							/>
						</IconButton>
					</AnimatedBottom>
				</FormBox>
			</div>
		)
	}
}



export default AllFormCard