import React				from 'react'
import PropTypes 			from 'prop-types'

import * as styled from "./FooterStyle"

class Footer extends React.Component {
    render () {
        return (
            <styled.Footer>
                footer
            </styled.Footer>
        )
    };
}
Footer.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}
Footer.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}
export default Footer;

