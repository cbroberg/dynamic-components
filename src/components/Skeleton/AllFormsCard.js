import React, { Component } from 'react'
import { FormBox, AnimatedTop, AnimatedMiddle, AnimatedBottom, SingleLineLoader } from './styles/AllFormsCardStyle'

class AllFormsCard extends Component {

	render() {
		return (
			<div>
				{/* #1 */}
				<FormBox>
					<AnimatedTop/>
					<AnimatedMiddle>
						<SingleLineLoader height="9px" width="157.29px" marginLeft="15px" marginTop="16.5px"/><br/>
						<SingleLineLoader height="9px" width="113.29px" marginLeft="15px" marginTop="4.5px"/><br/>
						<SingleLineLoader height="9px" width="133.29px" marginLeft="15px" marginTop="4.5px"/>
						<SingleLineLoader height="11.33px" width="157.29px" marginTop="20px" marginBottom="7.5px" marginRight="15px" marginLeft="15px" borderRadius="2px"/>
					</AnimatedMiddle>
					<AnimatedBottom/>
                </FormBox>
                
				{/* #2 */}
				<FormBox>
					<AnimatedTop/>
					<AnimatedMiddle>
						<SingleLineLoader height="9px" width="157.29px" marginLeft="15px" marginTop="16.5px"/><br/>
						<SingleLineLoader height="9px" width="157.29px" marginLeft="15px" marginTop="4.5px"/><br/>
						<SingleLineLoader height="9px" width="157.29px" marginLeft="15px" marginTop="4.5px"/>
						<SingleLineLoader height="11.33px" width="157.29px" marginTop="20px" marginBottom="7.5px" marginRight="15px" marginLeft="15px" borderRadius="2px"/>
					</AnimatedMiddle>
					<AnimatedBottom/>
                </FormBox>
                
				{/* #3 */}
				<FormBox>
					<AnimatedTop/>
					<AnimatedMiddle>
						<SingleLineLoader height="9px" width="130px" marginLeft="15px" marginTop="16.5px"/><br/>
						<SingleLineLoader height="9px" width="145px" marginLeft="15px" marginTop="4.5px"/><br/>
						<SingleLineLoader height="9px" width="90px" marginLeft="15px" marginTop="4.5px"/>
						<SingleLineLoader height="11.33px" width="157.29px" marginTop="20px" marginBottom="7.5px" marginRight="15px" marginLeft="15px" borderRadius="2px"/>
					</AnimatedMiddle>
					<AnimatedBottom/>
                </FormBox>
                
				{/* #4 */}
				<FormBox>
					<AnimatedTop/>
					<AnimatedMiddle>
						<SingleLineLoader height="9px" width="157.29px" marginLeft="15px" marginTop="16.5px"/><br/>
						<SingleLineLoader height="9px" width="130px" marginLeft="15px" marginTop="4.5px"/><br/>
						<SingleLineLoader height="9px" width="157.29px" marginLeft="15px" marginTop="4.5px"/>
						<SingleLineLoader height="11.33px" width="157.29px" marginTop="20px" marginBottom="7.5px" marginRight="15px" marginLeft="15px" borderRadius="2px"/>
					</AnimatedMiddle>
					<AnimatedBottom/>
				</FormBox>
			</div>
		)
	}                    
}

export default AllFormsCard