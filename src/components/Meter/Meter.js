import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledMeter } from 'components/Meter/MeterStyles'
import CloseOnEscape from './CloseOnEscape'



class Meter extends Component {

	constructor(props) {
		super(props)

		this.state = {
			initial: false,
			limitMeterSize: false,
			max: 100,
			min: 0, 
			series:	Array[1],
			thresholds:	Array[0],
			total: 40
		}
	}

	escaped() {
		console.log('Escaped')
	}

	render() {
		const { color, label, onClick } = this.props
		const MyComponent = ({ onEscape }) => <CloseOnEscape onEscape={onEscape}><span>some stuff here</span></CloseOnEscape>
		return (
			<div>
				<StyledMeter 
					color={color} 
					onClick={onClick}>{label}
				</StyledMeter>
				<MyComponent onEscape={this.escaped} />
			</div>
		)
	}
}

Meter.propTypes = {
	active: PropTypes.bool, // when single value
	activeIndex: PropTypes.number, // for series values
	title: PropTypes.string,
	color: PropTypes.string,
	bgColor: PropTypes.string,
	label: PropTypes.node,
	min: PropTypes.number,
	max: PropTypes.number,
	onActive: PropTypes.func,
	series: PropTypes.arrayOf(PropTypes.shape({
		color: PropTypes.string,
		bgColor: PropTypes.string,
		onClick: PropTypes.func,
		label: PropTypes.string, // only for Spiral
		value: PropTypes.number.isRequired
	})),
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
	stacked: PropTypes.bool,
	tabIndex: PropTypes.string,
	threshold: PropTypes.number,
	thresholds: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.number.isRequired,
		color: PropTypes.string,
		bgColor: PropTypes.string
	})),
	type: PropTypes.oneOf(['bar', 'circle']),
	value: PropTypes.number,
	vertical: PropTypes.bool,
	responsive: PropTypes.bool
}

Meter.defaultProps = {
	type: 'bar'
}

export default Meter

/*
https://github.com/grommet/grommet/blob/master/src/js/components/Meter.js
*/
