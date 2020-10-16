import styled from "styled-components"
import { NavLink } from "react-router-dom"

const BlogHome = styled.div`

`

const TitleDiv = styled.div`
	background-color : black;

	width : 100%;
	height : 25rem;
	padding-top : 3rem;

	text-align : center;
	color : white;
	line-height : 25rem;
	font-size : 5rem;
`

const BottomDiv = styled.div`
	background-color : white;
	margin-top : 3rem;
	display :flex;
	width : 100%;
`

const Articles = styled.div`
	background-color : white;
	
	width : 50rem;
	margin-left : calc((100% - 60rem) / 2);
	
	@media only screen and (max-width: 60rem) {
		margin-left : 1.5rem;
		margin-right : 1.5rem;
		width : calc(100% - 3rem);
	}
`

const Article = styled.div`
	background-color : white;
	border-bottom : solid 0.01rem grey;
	
	width : 48rem;
	min-height : 15rem;
	margin : 0 1rem;

	@media only screen and (max-width: 60rem) {
		width : calc(100% - 2rem);
	}
`

const ArticleHeader = styled.div`
	padding : 2rem 1rem;
`
const ArticleHeaderP = styled.p`
	display : inline-block;
	margin : 0 1rem 0 0;
	font-size : 1.2rem;
`

const ArticleHeaderImg = styled.img.attrs({
	src : "https://raw.githubusercontent.com/seo1im/42BLOG/master/src/images/backSource/profile.jpg"
})`
	width : 3rem;
	margin-right : 1rem;
	border-radius : 1rem;
`

const ArticleTitle = styled.div`
	padding-left : 1rem;
	margin-left : 0.3rem;
	margin-bottom : 1rem;
	font-size : 3rem;
	font-weight : bold;
`

const ArticleDescription = styled.div`
	padding-left : 1rem;

	margin-left : 0.5rem;
	font-size : 1rem;
	word-break : break-all;
`

const CategoryDiv = styled.div`
	background-color : white;
	
	width : 10rem;
	margin-top : 2rem;
	margin-right : calc((100% - 65rem)/2);
	padding-left : 1rem;

	font-size : 1.5rem;
	color : #50c79f;

	@media only screen and (max-width: 60rem) {
		display : none;
	}
`

const Category = styled.p`
	margin : 0.5rem 0 0 0;
	font-size : 1.1rem;
`

const Link = styled(NavLink)`
	text-decoration : none;
	color : ${props => props.color};
`

export { 
BlogHome,
	TitleDiv, 
	BottomDiv, 
		Articles, 
			Article, 
				ArticleHeader,
					ArticleHeaderP,
					ArticleHeaderImg,
				ArticleTitle,
				ArticleDescription,
		CategoryDiv,
			Category,

Link
};