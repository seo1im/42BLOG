import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Header, Footer, Home, Blog } from "components"

const Root = () => {
    return (
        <BrowserRouter basename="/42BLOG">
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/Blog" component={Blog}/>
        </BrowserRouter>
    );
}
export default Root;