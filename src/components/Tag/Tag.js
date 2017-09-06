import React from 'react'
import StyledTag from 'components/Tags/TagStyles'


const Tag = (props) => (
	<StyledTag tag={props.size} velocity={props.velocity} />
)

export default Tag
