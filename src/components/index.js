import React, { lazy } from "react"

/* includes */
export const Header = lazy(() => import("./includes/Header/Header"))
export const Footer = lazy(() => import("./includes/Footer/Footer"))
export const Scrolltop = lazy(() => import("./includes/Scrolltop/Scrolltop"))
export const Home = lazy(() => import("./Home/Home"))
export { default as Blog } from "./Blog/Blog"

/*
export { default as Header } from "./includes/Header/Header"
export { default as Footer } from "./includes/Footer/Footer"



export { default as Home } from "./Home/Home"

*/
