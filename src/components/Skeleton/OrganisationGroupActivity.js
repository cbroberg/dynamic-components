import React, { Component } from 'react'
import { Wrapper, TopContainer, TopImgContainer, TopTextContainer, TabsContainer, Tabs, TabIconContainer, TabLabelContainer, ItemListContainer, SingleItemContainer, IconContainer, SingleLineLoader } from './styles/OrganisationGroupActivityStyle'
import Icon from 'components/Icon/Icon'

class OrganisationGroupActivity extends Component {

	renderItemList = () => {
		var i
		var arr = []
		for (i = 0; i < 12; i++) {
			arr.push(
                <SingleItemContainer key={i}>
                    <IconContainer>
                        <Icon icon={'mood'} size={15} active={true} color={'#5E5E5E'}/>
                    </IconContainer>
                    <SingleLineLoader height="9px" width="123px" marginTop="8px" marginRight="60px"/>
                    <SingleLineLoader height="9px" width="210px" marginTop="8px" marginRight="77px" animationDelay="0.25s" WKanimationDelay="0.25s"/>
                    <SingleLineLoader height="15px" width="15px" marginTop="5px" marginRight="7px" borderRadius="100px" animationDelay="0.6s" WKanimationDelay="0.6s"/>
                    <SingleLineLoader height="9px" width="98px" marginTop="8px" marginRight="106px" animationDelay="0.6s" WKanimationDelay="0.6s"/>
                    <SingleLineLoader height="9px" width="73px" marginTop="8px" marginRight="108px" animationDelay="0.8s" WKanimationDelay="0.8s"/>
                    <SingleLineLoader height="6px" width="6px" marginTop="9px" animationDelay="0.85s" WKanimationDelay="0.85s"/>
                </SingleItemContainer>
            )
		}
		return arr
	}

	render() {
		return (
            <div>
                <Wrapper>
                    <TopContainer>
                        <TopImgContainer>
                            <SingleLineLoader width="120px" height="120px" borderRadius="120px"/>
                        </TopImgContainer>
                        <TopTextContainer>
                            <SingleLineLoader width="94px" height="14px" marginBottom="14px" marginTop="7px" animationDelay="0.29s" WKanimationDelay="0.29s"/>
                            <SingleLineLoader width="304px" height="26px" marginBottom="5px" animationDelay="0.29s" WKanimationDelay="0.29s"/>
                            <SingleLineLoader width="304px" height="38px" animationDelay="0.29s" WKanimationDelay="0.29s"/>
                        </TopTextContainer>
                    </TopContainer>

                    <TabsContainer>
                        <Tabs width="114px" height="100%" marginRight="1px" backgroundColor="#3B97D3">
                            <TabIconContainer>
                                <Icon icon={'mood'} size={18} active={true} color={'#fff'}/>
                            </TabIconContainer>
                            <TabLabelContainer textColor="#fff">
                                Activities
                            </TabLabelContainer>
                        </Tabs>

                        <Tabs width="83px" height="100%" marginRight="1px">
                            <TabIconContainer>
                                <Icon icon={'mood'} size={18} active={true} color={'#5E5E5E'}/>
                            </TabIconContainer>
                            <TabLabelContainer>
                                Forms
                            </TabLabelContainer>
                        </Tabs>

                        <Tabs width="120px" height="100%" marginRight="1px">
                            <TabIconContainer>
                                <Icon icon={'mood'} size={18} active={true} color={'#5E5E5E'}/>
                            </TabIconContainer>
                            <TabLabelContainer>
                                Registrations
                            </TabLabelContainer>
                        </Tabs>

                        <Tabs width="82px" height="100%" marginRight="1px">
                            <TabIconContainer>
                                <Icon icon={'mood'} size={18} active={true} color={'#5E5E5E'}/>
                            </TabIconContainer>
                            <TabLabelContainer>
                                User
                            </TabLabelContainer>
                        </Tabs>

                        <Tabs width="99px" height="100%">
                            <TabIconContainer>
                                <Icon icon={'mood'} size={18} active={true} color={'#5E5E5E'}/>
                            </TabIconContainer>
                            <TabLabelContainer>
                                Check-in
                            </TabLabelContainer>
                        </Tabs>
                    </TabsContainer>

                    <ItemListContainer>
                        {this.renderItemList()}
                    </ItemListContainer>
                </Wrapper>
			</div>
		)
	}
}
    

export default OrganisationGroupActivity