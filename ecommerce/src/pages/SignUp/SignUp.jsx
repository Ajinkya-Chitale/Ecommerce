import { Link } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  return (
    <>
      <title>SignUp Page</title>

      <div className='signup-Parent'>
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" name="username" placeholder="Enter your user name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
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

            <button type="submit" className="btn-signup">Create Account</button>

            <div className="links">
              <Link to={'/login'}>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
