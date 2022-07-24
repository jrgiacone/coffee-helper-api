import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

const Nav = () => {
  return (
    <nav>
      <Link to="/coffee">V60</Link>
      <Dashboard />
    </nav>
  )
}

export default Nav