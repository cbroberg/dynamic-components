import React, { Component } from 'react'
import { Wrapper, TopContainer, TopImgContainer, TopTextContainer, TabsContainer, Tabs, TabIconContainer, TabLabelContainer, ItemListContainer, SingleItemContainer, SingleLineLoader, CheckboxContainer } from './styles/OrganisationGroupUsersStyle'
import Icon from 'components/Icon/Icon'

class OrganisationGroupUsers extends Component {

	renderItemList = () => {
		var i
		var arr = []
		for (i = 0; i < 9; i++) {
			arr.push(
                <SingleItemContainer>
                    <SingleLineLoader height="23px" width="23px" marginTop="1px" marginBottom="2px" marginLeft="32px" marginRight="36px" borderRadius="100px"/>
                    <SingleLineLoader height="9px" width="69px" marginTop="8px" marginRight="80px" borderRadius="4px"/>
                    <SingleLineLoader height="9px" width="34px" marginTop="8px" marginRight="59px" borderRadius="4px" animationDelay="0.15s" WKanimationDelay="0.15s"/>
                    <SingleLineLoader height="9px" width="66px" marginTop="8px" marginRight="233px" borderRadius="4px" animationDelay="0.25s" WKanimationDelay="0.25s"/>
                    <div>
                        {/*&hellip;*/}
                        <Icon icon={'more_horiz'} size={20} active={true} color={'#5E5E5E'}/>
                    </div>
                    <CheckboxContainer>
                        <input type="checkbox"/>
                    </CheckboxContainer>
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
                        <Tabs width="114px" height="100%" marginRight="1px">
                            <TabIconContainer>
                                <Icon icon={'mood'} size={18} active={true} color={'#5E5E5E'}/>
                            </TabIconContainer>
                            <TabLabelContainer>
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

                        <Tabs width="82px" height="100%" marginRight="1px" backgroundColor="#3B97D3">
                            <TabIconContainer>
                                <Icon icon={'mood'} size={18} active={true} color={'#5E5E5E'}/>
                            </TabIconContainer>
                            <TabLabelContainer textColor="#fff">
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
    

export default OrganisationGroupUsers