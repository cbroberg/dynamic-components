import React from 'react'
import StyledTags from 'components/Tags/StyledTags'


const Tags = (props) => (
	<StyledTags tags={props.size} velocity={props.velocity} />
)

export default Tags
