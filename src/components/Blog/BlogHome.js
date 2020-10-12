import React				from 'react'
import PropTypes 			from 'prop-types'

import * as styled from "./BlogHomeStyle"

const Title = () => (
	<styled.TitleDiv>
		TITLE
	</styled.TitleDiv>
)

const Article = () => (
	<styled.Article>
		<styled.ArticleHeader>
			<styled.ArticleHeaderP>Cat</styled.ArticleHeaderP>
			<styled.ArticleHeaderP>Date</styled.ArticleHeaderP>
			<styled.ArticleHeaderP>Author</styled.ArticleHeaderP>
		</styled.ArticleHeader>
		<styled.ArticleTitle>
			<styled.Link exact to="/" color="black">Title</styled.Link>
		</styled.ArticleTitle>
		<styled.ArticleDescription>
			<styled.Link exact to="/" color= "black">Description</styled.Link>
		</styled.ArticleDescription>
	</styled.Article>
)

const Articles = () => (
	<styled.Articles>
		<Article/>
		<Article/>
	</styled.Articles>
)

const Category = () => (
	<styled.CategoryDiv>
		Category
		<styled.Category>
			<styled.Link exact to="/" color="grey">Cat</styled.Link>
		</styled.Category>
		<styled.Category>
			<styled.Link exact to="/" color="grey">Cat</styled.Link>
		</styled.Category>
	</styled.CategoryDiv>
)

class BlogHome extends React.Component {
    render () {
        return (
            <styled.BlogHome>
                <Title />
				<styled.BottomDiv>
					<Articles />
					<Category />
				</styled.BottomDiv>
            </styled.BlogHome>
        )
    };
}

BlogHome.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}
BlogHome.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}
export default BlogHome;

