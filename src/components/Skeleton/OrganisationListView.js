import React, { Component } from 'react'
import { MainWrapper, Wrapper, ContentContainer, SkeletonContainer, SingleLineLoader, SearchBarButtonDiv, SearchBarDiv, SearchBarInput, SearchBarInputWrapper } from './styles/OrganisationListViewStyle'
import Icon from 'components/Icon/Icon'

class OrganisationListView extends Component {

	/* Array for small wrapper */
	renderLoaders1 = () => {
		var i
		var arr = []
		for (i = 0; i < 9; i++) {
			arr.push(
				<SkeletonContainer key={i}>
					<SingleLineLoader height="12px" width="12px" marginTop="7px" marginLeft="18px" marginRight="23px" borderRadius="50px" />
					<SingleLineLoader height="8.65px" width="119px" marginTop="8px" borderRadius="4px" />
				</SkeletonContainer>)
		}
		return arr
	}

	/* Array for large wrapper */
	renderLoaders2 = () => {
		var i
		var arr = []
		for (i = 0; i < 9; i++) {
			arr.push(
				<SkeletonContainer key={i}>
					<SingleLineLoader height="12px" width="12px" marginTop="7px" marginLeft="18px" marginRight="23px" borderRadius="50px" />
					<SingleLineLoader height="8.65px" width="220px" marginTop="8px" borderRadius="4px" />
				</SkeletonContainer>)
		}
		return arr
	}

	render() {
		return (
			<div>
				<MainWrapper>
					{/* Small wrapper */}
					<Wrapper marginRight="43px">
						<SkeletonContainer backgroundColor="#2C3E50" />

						<SearchBarDiv>
							<form>
								<SearchBarInputWrapper>
									<SearchBarInput placeholder="Søg" />
								</SearchBarInputWrapper>
							</form>
							<SearchBarButtonDiv>
								<Icon icon={'search'} size={18} active={true} />
							</SearchBarButtonDiv>
						</SearchBarDiv>
						<ContentContainer>
							{this.renderLoaders1()}
						</ContentContainer>
					</Wrapper>

					{/* Large wrapper */}
					<Wrapper width="543px">
						<SkeletonContainer width="543px" backgroundColor="#2C3E50" />

						<SearchBarDiv>
							<form>
								<SearchBarInputWrapper width="511px">
									<SearchBarInput placeholder="Søg" width="501px" />
								</SearchBarInputWrapper>
							</form>
							<SearchBarButtonDiv>
								<Icon icon={'search'} size={18} active={true} />
							</SearchBarButtonDiv>
						</SearchBarDiv>

						<ContentContainer>
							{this.renderLoaders2()}
						</ContentContainer>
					</Wrapper>
				</MainWrapper>
			</div>
		)
	}
}

export default OrganisationListView