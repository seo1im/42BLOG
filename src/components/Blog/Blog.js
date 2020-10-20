import React, { lazy }	from 'react'
import { Route } 		from 'react-router-dom'
import PropTypes 		from 'prop-types'

import BlogHome	from "./BlogHome/BlogHome"
import BlogPost from "./BlogPost/BlogPost"

import posts from "posts"
import information from "information/information"

class Blog extends React.Component {
    render () {
		const match = this.props.match

        return (
			<div>
				<Route exact path={match.path} render={({match})=>(<BlogHome match={match} posts={posts} information={information}/>)} />
				<Route exact path={`${match.path}/:category`} render={({match})=>(<BlogHome match={match} posts={posts} information={information}/>)}/>
				<Route path={`${match.path}/:category/:id`} render={({match})=>(<BlogPost match={match} posts={posts} information={information}/>)}/>
			</div>
        )
    };
}
Blog.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}
Blog.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}
export default Blog;

