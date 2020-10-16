import styled from "styled-components"
import { NavLink } from "react-router-dom"

const PostDiv = styled.div`
	
`

const TitleDiv = styled.div`
	border-bottom : solid 0.01rem grey;

	width : 50rem;
	margin-top : 3rem;
	padding-top : 2rem;
	padding-bottom : 1.5rem;
	margin-left : calc((100% - 50rem) / 2);
	margin-right : calc((100% - 50rem) / 2);	
	min-height : 10rem;
	

	@media only screen and (max-width: 50rem) {
		margin-left : 1rem;
		margin-right : 1rem;
		width : calc(100% - 2rem);
	}
`

const Title = styled.div`
	margin-left : 2rem;
	font-size : 4rem;
	word-break : break-all;
`

const TitleP = styled.p`
	display : inline-block;
	margin : 2rem 0 2rem 2rem;
`

const TitleImg = styled.img.attrs({
	src : "https://raw.githubusercontent.com/seo1im/42BLOG/master/src/images/backSource/profile.jpg"
})`
	width : 5rem;
	border-radius : 70%;
	overflow: hidden;
	border : solid 0.01rem black;
`

const Content = styled.div`	
	width : 60rem;
	margin-top : 2rem;
	margin-bottom : 5rem;
	margin-left : calc((100% - 58rem) / 2);
	margin-right : calc((100% - 58rem) / 2);	

	@media only screen and (max-width: 60rem) {
		margin-left : 2.5rem;
		margin-right : 2.5rem;
		width : calc(100% - 5rem);
	}
`

const Button = styled.div`
	width : 10rem;
	border-left : solid 5px #40a899;
`

const Link = styled(NavLink)`
	text-decoration : none;
	font-weight : bold;
	color : grey;
`

export {
PostDiv,
	TitleDiv,
		Title,
		TitleP,
		TitleImg,
	Content,
	Button,
		Link
}
