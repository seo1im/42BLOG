import styled 		from "styled-components"
import { NavLink }	from "react-router-dom" 

const HeaderDiv = styled.div`
	background-color : white;
	border-bottom : 0.1mm solid #e6e5e3;

	position :fixed;
	top: 0;
	left: 0;
	z-index : 5;

	width : calc(100% - 1rem);
	height : 4rem;
	line-height : 4rem;
	padding-left : 1rem;
`

const HeaderTitle = styled.p`
	display : inline-block;
	margin : 0;
	position : absolute;
	left : 6rem;
	font-size : 1.5rem;
`

const ButtonDiv = styled.div`
	display : inline-block;
	text-align : left;
	
	position : absolute;
	right : 0rem;
`

const Button = styled.div`
	display		: inline-block;
	
	line-height : 2rem;
	text-align : center;
	
	margin-right : 1rem;
`

const Link = styled(NavLink)`
	text-decoration : none;
	color : black;
`

export {
HeaderDiv, 
	HeaderTitle,
	ButtonDiv,
		Button,
Link  };