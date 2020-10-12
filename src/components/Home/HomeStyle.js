import styled 		from "styled-components"
import { NavLink }	from "react-router-dom"

/* Div Style */
// TODO : background images setting according width
const HomeDiv = styled.div`
	background : url(https://raw.githubusercontent.com/seo1im/42BLOG/master/src/images/Homebackground.jpg);
	
	width	: 100%;
	height	: 100rem;	
`

const Title = styled.div`
	display		: inline-block;
	position	: absolute;
	top			: 30%;

	font-size	: 3rem;
	text-align	: center;

	width 		: 100%;
`

const HomeButton = styled.div`
	display		: inline-block;
	position	: ${props => props.position.position};
	top 		: ${props => props.position.top};
	left		: ${props => props.position.left};

	background-color : blue;
	
	line-height : 2rem;
	text-align : center;

	width	: 9rem;
	height	: 4rem;
`

const Link = styled(NavLink)`
	text-decoration : none;
	color : black;
`


export { HomeDiv, Link, HomeButton, Title }