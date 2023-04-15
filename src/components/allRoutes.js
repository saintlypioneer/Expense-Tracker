import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// ELEMENTS
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";

function AllRoutes (props){

    const {isLoggedin} = useSelector(state=>state.user);

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
            element: <div>
                {isLoggedin?<Dashboard />:<Navigate to='/login' />}
            </div>
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