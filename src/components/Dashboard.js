import { useState } from "react"
import { Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError('')

    try {
      await logout()
      navigate('/login' , {replace: true})
    } catch {
      setError('Failed to log out')
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email: </strong>{currentUser.email}
          <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
              Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  )
}

export default Dashboard