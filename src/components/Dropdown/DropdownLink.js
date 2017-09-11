import React, { Component } from 'react'
import Icon from './../Icon/Icon'
import { LinkChildrenContainer, SlIconContainer, SingleLinkContainer } from 'components/Dropdown/DropdownStyles'

class DropDownLink extends Component {
	render() {
		return (
			<SingleLinkContainer padding={this.props.padding} bgColor={this.props.color} hoverColor={this.props.hoverColor} borderColor={this.props.borderColor} href={this.props.href}>
				<SlIconContainer iconPadding={this.props.iconPadding}><Icon icon={this.props.icon} active={this.props.active} size={this.props.size}/></SlIconContainer>
				<LinkChildrenContainer txtColor={this.props.txtColor}> {this.props.children }</LinkChildrenContainer>
			</SingleLinkContainer>
		)
	}
}

export default DropDownLink
