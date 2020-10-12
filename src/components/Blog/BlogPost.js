import React				from 'react'
import PropTypes 			from 'prop-types'

import * as styled from "./BlogPostStyle"

const Title = () => (
	<styled.TitleDiv>
		<styled.Title>Title</styled.Title>
		<styled.TitleP>Cat</styled.TitleP>
		<styled.TitleP>Date</styled.TitleP>
		<styled.TitleP>Author</styled.TitleP>
	</styled.TitleDiv>
)

const Content = () => (
	<styled.Content>
		Content Box
	</styled.Content>
)

class BlogPost extends React.Component {
    render () {
        return (
            <styled.PostDiv>
                <Title />
				<Content />
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

