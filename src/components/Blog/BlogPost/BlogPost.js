import React, { lazy, Suspense }		from 'react'
import PropTypes 			from 'prop-types'

import * as styled from "./BlogPostStyle"
import posts from 'posts'

const Button = ({link, str}) => (
	str === "Previous" ? 
		<styled.ButtonLeft>
			<styled.Link to={link}>
				{str}
			</styled.Link>
		</styled.ButtonLeft> :
		<styled.ButtonRight>
		<styled.Link to={link}>
			{str}
		</styled.Link>
	</styled.ButtonRight>
)

const Title = ({info}) => (
	<styled.TitleDiv>
		<styled.TitleP>{info.Category}</styled.TitleP>
		<styled.TitleP>{info.Date}</styled.TitleP>
		<styled.TitleP><b>{info.Auther}</b></styled.TitleP>
		<styled.Title>{info.Title}</styled.Title>
		<styled.TitleP style={{margin : "0.5rem 0 0 2.5rem"}}>{info.Description}</styled.TitleP>
	</styled.TitleDiv>
)

const Content = ({post}) => {
	return(		
		<styled.Content>
			<div dangerouslySetInnerHTML={{__html : post.html}} className="markdown"/>
		</styled.Content>
)}

//

class BlogPost extends React.Component {
    render () {
		const { category, id } = this.props.match.params;
		const { posts } = this.props

		const post = posts.filter(post => (
			post.attributes.Id == id && post.attributes.Category == category
		))[0];

		if (!post)
			post = posts[0];
			
        return (
            <styled.PostDiv>
                <Title info={post.attributes}/>
				<Content post={post}/>
				{post.attributes.pre !== 0 ? <Button 
					link={`/Blog/${post.attributes.Category}/${post.attributes.pre}`}
					str={"Previous"} />: <div/>}
				{post.attributes.next !== 0 ? <Button
					link={`/Blog/${post.attributes.Category}/${post.attributes.next}`}
					str={"Next"}/>: <div/>}
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

