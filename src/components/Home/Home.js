import React from 'react'
import router from "react-router-dom"
import { Header, Footer } from "components"

import * as styled from "./HomeStyle"

const Button = ({position}) => (
    <styled.HomeButton position={position}>
        <styled.Link exact to={'/'}>Button</styled.Link>
    </styled.HomeButton>
)

const Title = () => (
    <styled.Title>
        Welcome Comment
    </styled.Title>
)

class Home extends React.Component {    
    render () {
        return (
            <styled.HomeDiv>

                <Title />    

                <Button position={{
                    position : "absolute",
                    top : "70%",
                    left : "20%"
                }} />
                <Button position={{
                    position : "absolute",
                    top : "70%",
                    left : "70%"
                }} />
            </styled.HomeDiv>
        )
    };
}

Home.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}
Home.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}

export default Home;

