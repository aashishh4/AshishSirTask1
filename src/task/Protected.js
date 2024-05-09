import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Contextlogin';

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  const { isAuth } = useAuth();
useEffect(()=>{
  if (!isAuth) {
    navigate('/');  
}
},[])
return(
    <div>
        <Component/>
    </div>
)
   
}

export default Protected;
