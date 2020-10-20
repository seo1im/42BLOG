import React from "react"
import post from "../Libft_1.md"

const LazyMd = ({test}) => {
	console.log(test);
	return (
	<div dangerouslySetInnerHTML={{__html : post.html}} className="markdown"/>
)}

export default LazyMd