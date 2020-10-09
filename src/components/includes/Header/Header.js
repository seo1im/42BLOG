import React				from 'react'
import PropTypes			from 'prop-types'

import * as styled			from "./HeaderStyle"

class Header extends React.Component {
    render () {
        return (
            <styled.HeaderDiv>
                Header(Always Shown)
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

