import withSplitting from "utils/withSplitting"

/* includes */
export const Header = withSplitting(() => import("./includes/Header/Header"))
export const Footer = withSplitting(() => import("./includes/Footer/Footer"))
export const Scrolltop = withSplitting(() => import("./includes/Scrolltop/Scrolltop"))
export const Home = withSplitting(() => import("./Home/Home"))
export const Blog = withSplitting(() => import("./Blog/Blog"))
/*
export { default as Header } from "./includes/Header/Header"
export { default as Footer } from "./includes/Footer/Footer"
export { default as Scrolltop } from "./includes/Scrolltop/Scrolltop"


export { default as Home } from "./Home/Home"
export { default as Blog } from "./Blog/Blog"
*/
