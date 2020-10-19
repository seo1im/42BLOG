import React, { Suspense } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Header, Footer, Scrolltop, Home, Blog } from "components"

const Root = () => {
    return (
        <BrowserRouter basename="/42BLOG">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Scrolltop />
                <Route exact path="/" component={Home}/>
                <Route path="/Blog" component={Blog}/>
                <Footer />
            </Suspense>
        </BrowserRouter>
    );
}
export default Root;