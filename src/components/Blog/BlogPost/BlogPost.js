import React				from 'react'
import PropTypes 			from 'prop-types'

import * as styled from "./BlogPostStyle"

const Title = ({info}) => (
	<styled.TitleDiv>
		<styled.Title>{info.Title}</styled.Title>
		<styled.TitleP>{info.Category}</styled.TitleP>
		<styled.TitleP>{info.Date}</styled.TitleP>
		<styled.TitleP>{info.Auther}</styled.TitleP>
	</styled.TitleDiv>
)

const Content = ({post}) => {
	return(
	<styled.Content>
		<post.content />
	</styled.Content>
)}

class BlogPost extends React.Component {
    render () {
		const { category, id } = this.props.match.params;
		const { posts } = this.props

		const post = posts.filter(post => (
			post.arg.Id == id && post.arg.Category == category
		))[0];

		console.log(post.content);

        return (
            <styled.PostDiv>
                <Title info={post.arg}/>
				<Content post={post}/>
            </styled.PostDiv>
        )
    };
}

BlogPost.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}
BlogPost.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}
export default BlogPost;

