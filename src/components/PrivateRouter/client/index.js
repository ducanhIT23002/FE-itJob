// import { useState , useEffect} from "react";
import  cookieUtils  from "../../../helpers/cookie/cookie";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function PrivateRouter() {
        const getcookie = cookieUtils.getCookie("token");
    return (
        <>
        {getcookie ? <Outlet /> : <Navigate to = "/login" />}
        </>
    )
}

export default PrivateRouter