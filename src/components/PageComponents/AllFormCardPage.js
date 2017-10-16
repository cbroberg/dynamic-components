import React, { Component } from 'react'
import FormCard from 'components/AllFormCard/AllFormCard'
import { Icon } from 'odeum-ui'
import { Container, ContentContainer, LabelHeader, Header, IconDiv, Label, Contentdiv, Paragraf, ProgressContent, Progress, ProgressDiv, ProgressMeter } from 'components/AllFormCard/AllFormCardStyles'

class AllFormCardPage extends Component {
	constructor(props) {
		super(props)
		this.state = ({
			outOF: 10
		})
	}

	calc = (number1, numvber2) => {
		var temp = '' + number1 / numvber2 * 100 + '' 
		temp = temp.split('.')
	  return temp[0] + '%'
	}

	render() {
		return (
			<div>
				<FormCard icon1={'add_circle_outline'} icon2={'mode_edit'} icon3={'share'} icon4={'library_add'} iconSize={60} color={'#5E5E5E'} onClick1={this.test} >
					<Content 
						headertext={'Header'} 
						activeHeader={'Active'} 
						registrationHeader={'Registration'} 
						responsible={'Responsible'} 
						date={'2017/02/20'} 
						number={'100'} 
						people={'Kasper Frida'} 
						progressOut={5}
						OutOf={this.state.outOF}
						progressMeter={this.calc(5, this.state.outOF)}
					/>
				</FormCard>
			</div>
		)
	}
}

export default AllFormCardPage


const Content = (props) => {
	return (
		<Container>

			<Header>
				<IconDiv><Icon icon={'stars'} iconSize={30} color={'#F39C12'}/></IconDiv> 
				<Label>{props.headertext}</Label>
			</Header>

			<Contentdiv>

				<ContentContainer>
					<LabelHeader>{props.activeHeader}</LabelHeader>
					<Paragraf>{props.date}</Paragraf>
				</ContentContainer>
				<ContentContainer>
					<LabelHeader>{props.registrationHeader}</LabelHeader>
					<Paragraf>{props.number}</Paragraf>
				</ContentContainer>
				<ContentContainer>
					<LabelHeader>{props.responsible}</LabelHeader>
					<Paragraf>{props.people}</Paragraf>
				</ContentContainer>

			</Contentdiv>

			<ProgressContent>
				<Progress>Trin {props.progressOut} af {props.OutOf} </Progress>
				<ProgressDiv><ProgressMeter progress={props.progressMeter}>{props.progressMeter}</ProgressMeter></ProgressDiv>
			</ProgressContent>

		</Container>
	)
}