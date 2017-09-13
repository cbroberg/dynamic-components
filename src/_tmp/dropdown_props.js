const valueType = PropTypes.oneOfType([
	PropTypes.shape({
		label: PropTypes.node,
		value: PropTypes.any
	}),
	PropTypes.string,
	PropTypes.number
])

Select.propTypes = {
	inline: PropTypes.bool,
	multiple: PropTypes.bool,
	onSearch: PropTypes.func,
	onChange: PropTypes.func, // (value(s))
	placeHolder: PropTypes.string,
	searchPlaceHolder: PropTypes.string,
	options: PropTypes.arrayOf(valueType).isRequired,
	value: PropTypes.oneOfType([valueType, PropTypes.arrayOf(valueType)])
}