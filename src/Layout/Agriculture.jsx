import React from 'react'
import { Outlet } from 'react-router-dom'
import AgricultureHeader from '../components/AgricultureHeader'

const Agriculture = () => {
  return (
    <div>
        <AgricultureHeader/>
        <Outlet></Outlet>
    </div>
  )
}

export default Agriculture