import Main from "../pages/Main"
import Restaurant from "../pages/Restaurant"

export const routes = [
    { path: "/", component: Main, exact: true },
    {path: "/restaurant/*", component: Restaurant, exact: true},
    {path: "/restaurant", component: Restaurant, exact: true}
]