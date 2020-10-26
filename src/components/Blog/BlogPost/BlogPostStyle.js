import styled from "styled-components"
import { NavLink } from "react-router-dom"

const PostDiv = styled.div`
	
`

const TitleDiv = styled.div`
	border-bottom : solid 0.01rem grey;

	margin-top : 3rem;
	padding-top : 2rem;
	padding-bottom : 4rem;
	padding-left : calc((100% - 58rem) / 2);
	padding-right : calc((100% - 58rem) / 2);
	min-height : 10rem;
	

	@media only screen and (max-width: 60rem) {
		padding-left : calc((100% - 58rem) / 2);
		padding-right : calc((100% - 58rem) / 2);
		width : 100%;
	}
`

const Title = styled.div`
	margin-top : 2rem;
	margin-left : 3rem;
	font-size : 4rem;
	font-weight : bold;
	word-break : keep-all;
`

const TitleP = styled.p`
	display : inline-block;
	margin : 2rem 0 0 3rem;
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

const ButtonLeft = styled.div`
	background-color : #EDEDED;
	border-left : solid 5px #40a899;

	position : absolute;
	left : 3rem;

	width : 10rem;
	height : 2.5rem;
	margin-bottom : 3rem;
	padding-left : 2rem;

	line-height : 2.5rem;
`

const ButtonRight = styled.div`
	background-color : #EDEDED;
	border-right : solid 5px #40a899;

	position : absolute;
	right : 3rem;

	width : 10rem;
	height : 2.5rem;
	margin-bottom : 3rem;
	padding-left : 2rem;

	line-height : 2.5rem;
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
	ButtonLeft,
	ButtonRight,
		Link
}
