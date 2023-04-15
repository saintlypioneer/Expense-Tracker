import { Route, Routes } from "react-router-dom";

// ELEMENTS
import Login from "./pages/login";
import Signup from "./pages/signup";

function AllRoutes (props){

    const routes = [
        {
            path: "/",
            element: "This page is empty 😅"
        },{
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/dashboard",
            element: "DASHBOARD"
        },
    ];

    return(
        <Routes>
            {
                routes.map((route)=>{
                    return (
                        <Route path={route.path} element={route.element} />
                    );
                })
            }
        </Routes>
    );
}

export default AllRoutes;