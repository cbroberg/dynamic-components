import React, { Component } from 'react'
import { SkeletonContainer, SingleLineLoader, Wrapper } from './styles/AllFormsListViewStyle'

class AllFormsListView extends Component {

	renderLoaders = () => {
		var i
		var arr = []
		for (i = 0; i < 8; i++) {
			arr.push(
				<SkeletonContainer>
					<SingleLineLoader height="12px" width="12px" marginTop="7px" marginLeft="13px" marginRight="22px" borderRadius="50px"/>
					<SingleLineLoader height="8.65px" width="88px" marginTop="8.5px" marginRight="48px" borderRadius="4px"/>
					<SingleLineLoader height="8.65px" width="59px" marginTop="8.5px" marginRight="41px" borderRadius="4px" animationDelay="0.15s" WKanimationDelay="0.15s"/>
					<SingleLineLoader height="8.65px" width="46px" marginTop="8.5px" marginRight="36px" borderRadius="4px" animationDelay="0.25s" WKanimationDelay="0.25s"/>
					<SingleLineLoader height="12px" width="160px" marginTop="7px" marginRight="60px" borderRadius="4px" animationDelay="0.3s" WKanimationDelay="0.3s"/>
					<SingleLineLoader height="8.65px" width="59px" marginTop="8.5px" marginRight="48px" borderRadius="4px" animationDelay="0.7s" WKanimationDelay="0.7s"/>
					<SingleLineLoader height="8.65px" width="47px" marginTop="8.5px" borderRadius="4px" animationDelay="0.85s" WKanimationDelay="0.85s"/>
				</SkeletonContainer>)
		}
		return arr
	}

	render() {
		return (
			<div>
				<Wrapper>
					<SkeletonContainer backgroundColor="#2C3E50"/>
					{this.renderLoaders()}
				</Wrapper>
			</div>
		)
	}
}

export default AllFormsListView