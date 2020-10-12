import styled from "styled-components"
import { NavLink } from "react-router-dom"

const BlogHome = styled.div`

`

const TitleDiv = styled.div`
	background-color : grey;

	width : 100%;
	hegiht : 15rem;
	padding-top : 3rem;

	text-align : center;
	line-height : 15rem;
	font-size : 5rem;

`

const BottomDiv = styled.div`
	background-color : white;
	display :flex;
	
	width : 100%;
	height : 60rem;
`

const Articles = styled.div`
	background-color : white;
	
	width : 60rem;
	margin-left : calc((100% - 60rem) / 2);
	
	@media only screen and (max-width: 60rem) {
		margin-left : 0;
		width : 100%
	}
`

const Article = styled.div`
	background-color : white;
	border-bottom : solid 0.01rem grey;
	
	width : 58rem;
	height : 20rem;
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
	font-size : 1rem;
`

const ArticleTitle = styled.div`
	padding-left : 1rem;
	
	font-size : 4rem;
`

const ArticleDescription = styled.div`
	padding-left : 1rem;

	font-size : 1rem;
	word-break : break-all;
`

const CategoryDiv = styled.div`
	background-color : white;
	
	width : 15rem;
	margin-top : 2rem;
	margin-right : calc((100% - 60rem)/2 - 15rem);
	padding-left : 1rem;

	font-size : 1.5rem;

	@media only screen and (max-width: 90rem) {
		display : none;
	}
`

const Category = styled.p`
	margin : 1rem 0.5rem;
	font-size : 1.3rem;
	
	color : grey;
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
				ArticleTitle,
				ArticleDescription,
		CategoryDiv,
			Category,

Link
};