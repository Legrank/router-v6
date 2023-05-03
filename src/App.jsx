import { NavLink, Navigate, useRoutes } from 'react-router-dom'
import Home from './home'
import UsersLayout from './usersLayout'
import User from './user'
import EditUser from './editUser'
import UserList from './userList'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'users',
    element: <UsersLayout />,
    children: [
      {
        path: '',
        element: <UserList />,
      },
      {
        path: ':userId',
        children: [
          {
            path: '',
            element: <Navigate to="profile" />,
          },
          {
            path: 'profile',
            element: <User />,
          },
          {
            path: 'edit',
            element: <EditUser />,
          },
          {
            path: '*',
            element: <Navigate to={'profile'} />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]

function App() {
  const elements = useRoutes(routes)
  return (
    <div className="App">
      <h2>App</h2>

      <NavLink to={'/users'}>User List Page</NavLink>

      {elements}
    </div>
  )
}

export default App
