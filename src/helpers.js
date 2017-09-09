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


/* 
const copyToClipboard = (e, text) => {
	copy(text)
	notify(`"${text}" ... has been copyied to the clipboard`)
}
*/

