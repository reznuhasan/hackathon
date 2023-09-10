import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const auth=localStorage.getItem('user')
  return auth===true?<Outlet/>:<Login/>
}

export default PrivateRoute