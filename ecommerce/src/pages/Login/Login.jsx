import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <>
      <title>Login Page</title>

      <div className="login-Parent">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" name="username" placeholder="Enter your user name" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn-login">Login</button>

            <div className="links">
              <Link to={'/signup'}>Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
