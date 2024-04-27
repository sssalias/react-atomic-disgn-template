import {ReactNode} from "react";
import IndexPage from "../components/pages/IndexPage/IndexPage.tsx";
import {Route, Routes} from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate.tsx";

interface IRoute {
    path: string
    element: ReactNode
}


const routes: IRoute[] = [
    {path: '/', element: <IndexPage/>},
    {path: '/profile', element: <MainTemplate><h1>Profile</h1></MainTemplate>}
]

const Router = () => {
    return (
        <Routes>
            {routes.map(route => <Route path={route.path} element={route.element}/>)}
        </Routes>
    )
}

export default Router