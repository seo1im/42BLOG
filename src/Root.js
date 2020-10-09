import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Header, Footer, Home } from "components"

const Root = () => {
    return (
        <BrowserRouter basename="/42BLOG">
            <Header />
            <Home />
            <Footer />
        </BrowserRouter>
    );
}
export default Root;