import React from "react"
import { BrowserRouter } from "react-router-dom"
import App from "components/App"

const Root = () => {
    return (
        <BrowserRouter basename="/42BLOG">
			Root
            <App />
        </BrowserRouter>
    );
}
export default Root;