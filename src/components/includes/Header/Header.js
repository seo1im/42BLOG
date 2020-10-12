import React				from 'react'
import PropTypes			from 'prop-types'
import router				from "react-router-dom"

import * as styled			from "./HeaderStyle"

const Button = ({link}) => (
	<styled.Button>
		<styled.Link exact to={
			link !== "Home" ?
			"/" + link : "/"
		}>{link}</styled.Link>
	</styled.Button>
)

class Header extends React.Component {
    render () {
        return (
            <styled.HeaderDiv>
                Header(Always Shown)
				<styled.ButtonDiv>
					<Button link={"Home"}/>
					<Button link={"Blog"}/>
					<Button link={"Profile"}/>
				</styled.ButtonDiv>
            </styled.HeaderDiv>
        )
    };
}
Header.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}
Header.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}
export default Header;

