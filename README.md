# dynamic-components for component library

[Building a React Component Library | Part 1](https://hackernoon.com/building-a-react-component-library-part-1-d8a1e248fe6c)
[Building a React Component Library | Part 2](https://hackernoon.com/building-a-react-component-library-part-2-46fd4f77bb5c)
[Building a React Component Library | Part 3](https://hackernoon.com/building-a-react-component-library-part-3-adb2cd0e021c)
[Building a React Component Library | Part 4]


```js

const loaderSizes = {
	small: {
		'width': '50px',
		'heigth': '50px'
	},
	medium: {
		'width': '80px',
		'heigth': '80px'
	},
	large: {
		'width': '120px',
		'heigth': '120px'
	}
}

${({ size }) => loaderSizes[size]['width'] };
${({ size }) => loaderSizes[size]['heigth'] };



${props => props.height ? '120px' : '50px'};
${props => props.time || '1s'};


import logo from 'framework/assets/eplan_logo.png'
import { LogoLink, LogoDiv, LogoImg } from '../styles/HeaderStyles'

const Logo = () => {
	return (
		<LogoDiv>
			<LogoLink to="/dashboard/general">
				<LogoImg src={logo} alt="Logo"/>
			</LogoLink>
		</LogoDiv>
	)
}

export default Logo


```