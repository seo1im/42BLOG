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
                    top : "80%",
                    left : "20%"
                }} />
                <Button position={{
                    position : "absolute",
                    top : "80%",
                    left : "70%"
                }} />
            </styled.HomeDiv>
        )
    };
}

export default Home;

