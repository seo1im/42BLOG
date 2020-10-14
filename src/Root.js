import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Header, Footer, Home, Blog } from "components"

const Root = () => {
    return (
        <BrowserRouter basename="/42BLOG">
            <Header />
            <Route exact path="/" component={Blog}/>
            <Route path="/Blog" component={Blog}/>
            <Footer />
        </BrowserRouter>
    );
}
export default Root;