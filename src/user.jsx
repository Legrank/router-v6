import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams()
  return (
    <>
      <h2>User</h2>
      <ul>
        <li>
          <NavLink to={'/users'}>Users List</NavLink>
        </li>
        <li>
          <NavLink to={'../edit'}>Edit User</NavLink>
        </li>
      </ul>

      <p>userId:{userId}</p>
    </>
  )
}

export default User
