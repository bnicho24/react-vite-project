import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
    const authToken = JSON.parse(localStorage.getItem("user"));
    if(authToken === null) {
      return <Navigate to='/' replace />
    }
  return (
    <div><Outlet /></div>
  )
}

export default Protected