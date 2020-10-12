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
	height : 3rem;
	line-height : 3rem;
	padding-left : 1rem;
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

export { HeaderDiv, Button, Link, ButtonDiv };