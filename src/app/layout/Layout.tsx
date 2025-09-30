import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <Link to="/signup">Go to Signup</Link>
      <Outlet />
    </div>
  )
}
