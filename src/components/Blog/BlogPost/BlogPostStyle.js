import styled from "styled-components"

const PostDiv = styled.div`
	
`

const TitleDiv = styled.div`
	border-bottom : solid 0.01rem grey;

	width : 60rem;
	margin-top : 3rem;
	padding-top : 3rem;
	margin-left : calc((100% - 60rem) / 2);
	margin-right : calc((100% - 60rem) / 2);	
	min-height : 10rem;
	

	@media only screen and (max-width: 60rem) {
		margin-left : 0;
		margin-right : 0;
		width : 100%;
	}
`

const Title = styled.div`
	font-size : 4rem;
	text-align : center;
	word-break : break-all;
`

const TitleP = styled.p`
	display : inline-block;
	margin : 2rem 0 0 2rem;
`

const Content = styled.div`	
	width : 60rem;
	margin-top : 2rem;
	margin-left : calc((100% - 58rem) / 2);
	margin-right : calc((100% - 58rem) / 2);	

	@media only screen and (max-width: 60rem) {
		margin-left : 2.5rem;
		margin-right : 2.5rem;
		width : calc(100% - 5rem);
	}
`

export {
PostDiv,
	TitleDiv,
		Title,
		TitleP,
	Content,
}
