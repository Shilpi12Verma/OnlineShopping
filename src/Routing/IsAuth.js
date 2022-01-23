import React from 'react'
import { Navigate,Outlet } from 'react-router'

const IsAuth = () => {
    const Value=window.localStorage.getItem('Token')
    return Value ? <Outlet/> : <Navigate to = "/login_page"/>;
 };

export default IsAuth

