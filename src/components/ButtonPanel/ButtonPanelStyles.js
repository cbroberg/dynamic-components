import styled from 'styled-components'

const alignment = {
	center: 'center',
	left: 'flex-start',
	right: 'flex-end'
}
const justify = {
	center: 'center',
	left: 'flex-start',
	right: 'flex-end',
	spaceBetween: 'space-between'
}

const StyledButtonPanel = styled.div`
display:flex;
flex-flow: ${props => props.direction + ' ' + props.wrap};
justify-content: ${props => justify[props.justify]};
align-items: ${props => alignment[props.align]};
width: ${(props) => props.width};
height: ${props => props.height};
border: ${props => props.debug ? '1px solid black' : ''};

`

export default StyledButtonPanel