import React				from 'react'
import PropTypes 			from 'prop-types'

class Footer extends React.Component {
    render () {
        return (
            <div>
                footer
            </div>
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

