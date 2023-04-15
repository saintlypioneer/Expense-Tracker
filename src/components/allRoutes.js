import { Route, Routes } from "react-router-dom";

// ELEMENTS
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";

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
            element: <Dashboard />
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