import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'


export const removeDuplicates = (arrArg) => arrArg.filter((elem, pos, arr) => arr.indexOf(elem) === pos)

const notification = (message) => toast.success(message)

export const copyToClipboard = (e, message, notify) => {
	e.preventDefault()
	copy(message)
	if (notify) {
		notification(message)
	}
}

export const numCharsInLongestStringInArray = (array) => {
	return array.reduce((a, b) => { return a.length > b.length ? a : b }).length
}
