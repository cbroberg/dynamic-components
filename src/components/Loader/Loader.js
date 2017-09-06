import React from 'react'
import StyledLoader from 'components/Loader/LoaderStyles'


const Loader = (props) => (
	<StyledLoader size={props.size} velocity={props.velocity}  />
)

export default Loader

