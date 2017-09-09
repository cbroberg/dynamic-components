function getColor(props) {
	if (props.isDisabled) {
		return props.disabledColor
	} else if (props.isActive) {
		return '#E98832'
	}
	return props.bgColor
}

