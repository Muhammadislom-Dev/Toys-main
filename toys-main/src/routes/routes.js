import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/Product"
import Offer from "../pages/Offer"
export const ROUTES = [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        exact: false,
        path: "/about",
        component: About
    },
    {
        exact: false,
        path: "/users",
        component: About,
    },
    {
        exact: true,
        path: "/product",
        component: Product,
    },
    {
        exact: false,
        path: "/product/:id",
        component: Offer,
    }
]
