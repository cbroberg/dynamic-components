import styled, { css } from 'styled-components'

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
	display: flex;
	overflow: hidden;
	flex-flow: ${props => props.direction + ' ' + props.wrap};
	justify-content: ${props => justify[props.justify]};
	align-items: ${props => alignment[props.align]};
	width: ${(props) => props.width};
	height: ${props => props.height};
	border: ${props => props.debug ? '1px solid black' : ''};
	${props => props.direction === 'row' && props.justify === 'spaceBetween' && css`
		& > div {
			&:first-of-type{
				margin-left:0px;
			}
			&:last-of-type{
				margin-right:0px;
			}
		}
	`}
	${props => props.direction === 'row' && props.justify === 'left' && css`
		& > div {
			&:first-of-type{
				margin-left:0px;
				}
		}`
	};

	${props => props.direction === 'row' && props.justify === 'right' && css`
		& > div {
			&:last-of-type{
				margin-right:0px;
			}
		}`
	};
`

export default StyledButtonPanel