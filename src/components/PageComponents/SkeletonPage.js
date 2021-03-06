import React, { Component } from 'react'
import AllFormsCard from 'components/Skeleton/AllFormsCard'
import AllFormsListView from 'components/Skeleton/AllFormsListView'
import OrganisationListView from 'components/Skeleton/OrganisationListView'
import OrganisationCardView from 'components/Skeleton/OrganisationCardView'
import OrganisationGroupUsers from 'components/Skeleton/OrganisationGroupUsers'
import OrganisationGroupActivity from 'components/Skeleton/OrganisationGroupActivity'

class SkeletonPage extends Component {

	render() {
		return (
			<div>
				<h1>Organisation - card view:</h1>
				<OrganisationCardView />

				<h1>All forms - card view:</h1>
				<AllFormsCard />

				<h1>All forms - list view:</h1>
				<AllFormsListView />

				<h1>Organisation - group users:</h1>
				<OrganisationGroupUsers />

				<h1>Organisation - list view:</h1>
				<OrganisationListView />

				<h1>Organisation - group activity:</h1>
				<OrganisationGroupActivity />
			</div>
		)
	}
}

export default SkeletonPage
