import React from 'react'
import router, { NavLink } from "react-router-dom"
import { Header, Footer } from "components"

import * as styled from "./HomeStyle"

const Button = () => (
    <div>
        button
    </div>
)

class Home extends React.Component {    
    render () {
        return (
            <styled.HomeDiv>
                <styled.HomeButton style={{
                    position : "relative",
                    top : "20rem",
                    left : "10rem"
                }}>
                    <NavLink activeClassName={'selected'} to='/next' />
                </styled.HomeButton>
            </styled.HomeDiv>
        )
    };
}

export default Home;

