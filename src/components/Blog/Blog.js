import React		from 'react'
import { Route } 	from 'react-router-dom'
import PropTypes 	from 'prop-types'
import { Record }	from "immutable"

import BlogHome	from "./BlogHome/BlogHome"
import BlogPost from "./BlogPost/BlogPost"

class Blog extends React.Component {
	constructor (props)	{
		super(props)

		this.state = {
			//TODO : Post Setting
		}
	}

    render () {
		const match = this.props.match
        return (
			<div>
				<Route exact path={match.path} component={BlogHome} />
				<Route exact path={`${match.path}/:cat`} component={BlogHome}/>
				<Route path={`${match.path}/:cat/:post`} component={BlogPost}/>
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

