import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function EditUser() {
  const { userId } = useParams()
  return (
    <>
      <h2>Edit User</h2>
      <ul>
        <li>
          <NavLink to={'../profile'}>user page</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${Number(userId) + 1}/profile`}>
            another user page
          </NavLink>
        </li>
        <li>
          <NavLink to={'/users'}>Users list page</NavLink>
        </li>
      </ul>
    </>
  )
}

export default EditUser
