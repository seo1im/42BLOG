import React				from 'react'
import PropTypes 			from 'prop-types'

import * as styled from "./BlogHomeStyle"

const Title = ({category}) => (
	<styled.TitleDiv>
		{category ? category : "Seolim`s 42 BLOG"}
	</styled.TitleDiv>
)

const Article = ({info}) => (
	<styled.Article>
		<styled.ArticleHeader>
			<styled.ArticleHeaderP>{info.Category}</styled.ArticleHeaderP>
			<styled.ArticleHeaderP>{info.Date}</styled.ArticleHeaderP>
			<styled.ArticleHeaderP>{info.Auther}</styled.ArticleHeaderP>
		</styled.ArticleHeader>
		<styled.ArticleTitle>
			<styled.Link exact to={`/Blog/${info.Category}/${info.Id}`} color="black">{info.Title}</styled.Link>
		</styled.ArticleTitle>
		<styled.ArticleDescription>
			<styled.Link exact to={`/Blog/${info.Category}/${info.Id}`} color= "black">{info.Description}</styled.Link>
		</styled.ArticleDescription>
	</styled.Article>
)

const Articles = ({posts, category}) => (

	<styled.Articles>
		{
			category ? 
			posts.map((post, i) => {
				if (post.attributes.Category == category)
					return <Article info={post.attributes} key={i}/>
			}) : 
			posts.map((post, i) => {
				return <Article info={post.attributes} key={i}/>
			})
		}
	</styled.Articles>
)

const Category = () => (
	<styled.CategoryDiv>
		Category
		<styled.Category>
			<styled.Link exact to="/Blog/Cat1" color="grey">Cat1</styled.Link>
		</styled.Category>
		<styled.Category>
			<styled.Link exact to="/Blog/Cat2" color="grey">Cat2</styled.Link>
		</styled.Category>
	</styled.CategoryDiv>
)

class BlogHome extends React.Component {
    render () {
		const { category } = this.props.match.params
		const { posts } = this.props

		console.log(this.props)

        return (
            <styled.BlogHome>
                <Title category={category}/>
				<styled.BottomDiv>
					<Articles posts={posts} category={category}/>
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

