import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Layout = () => {
    const  navigate = useNavigate();
    return(
        <div>
            
            <span onClick={()=> {
                navigate('/home')
            } } >home</span>
               <span onClick={()=> {
                navigate('/about')
            } } >about</span>
            <Outlet/>
           
        </div>
    );
}
export default Layout;