import styled from "styled-components"

/* Div Style */
// TODO : background images setting according width
const HomeDiv = styled.div`
	background-color : grey;
	
	width	: 100%;
	height	: 50rem;	
`

const HomeButton = styled.button`
	background-color : blue;
	
	display : inline-block;

	width	: 6rem;
	height	: 2rem;

	$.selected {
		background-color : red;
	}
`


export { HomeDiv, HomeButton }