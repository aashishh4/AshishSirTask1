import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useAuth } from './Contextlogin';

function PrivateRouting({ element, ...rest }) {
    const { isAuth } = useAuth();

    return isAuth ? (
        <Routes>

            <Route {...rest} element={element} />
        </Routes>
    ) : (
        <>
         <Navigate to="/home" replace />
        
        </>
       
    );
}

export default PrivateRouting;
 