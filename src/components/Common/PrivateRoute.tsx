import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { AdminLayout } from '../Layout';
export interface PrivateRouteProps {}

export const PrivateRoute = (props: RouteProps) => {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) return <Navigate to="/login" />;

    console.log(isLoggedIn);
    return <AdminLayout />;
};
