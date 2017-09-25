import React, { Component } from 'react'
import { Wrapper, TopContainer, IconContainer, CardContainer, AnimatedTop, AnimatedBottom, SingleLineLoader } from './styles/OrganisationCardViewStyle'
import Icon from 'components/Icon/Icon'

class OrganisationCardView extends Component {

	renderLoaders = () => {
		var i
		var arr = []
		for (i = 0; i < 18; i++) {
			arr.push(
                    <CardContainer key={i}>
                        <AnimatedTop/>
                        <AnimatedBottom>
                            <SingleLineLoader height="7px" width="82px" marginLeft="10px" marginTop="9px"/>
                            <SingleLineLoader height="7px" width="55px" marginLeft="10px" marginTop="4px" marginBottom="10px"/>
                        </AnimatedBottom>
                    </CardContainer>)
		}
		return arr
	}

	render() {
		return (
            <div>
                <Wrapper>
                    <TopContainer>
                        <IconContainer>
                            <Icon icon={'search'} size={20} active={true} color={'white'}/>
                        </IconContainer>
                    </TopContainer>
                    {this.renderLoaders()}
                </Wrapper>
			</div>
		)
	}                    
}


export default OrganisationCardView