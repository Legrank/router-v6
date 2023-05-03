import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function UsersLayout() {
  return (
    <div>
      <h2>UsersLayout</h2>
      <NavLink to={'/'}>Home Page</NavLink>
      <Outlet />
    </div>
  )
}

export default UsersLayout
