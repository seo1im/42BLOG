import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Header, Footer, Home, BlogHome, BlogPost } from "components"

const Root = () => {
    return (
        <BrowserRouter basename="/42BLOG">
            <Header />
            <Route exact path="/" component={BlogPost}/>
            <Route path="/Blog" component={BlogHome}/>
            <Footer />
        </BrowserRouter>
    );
}
export default Root;