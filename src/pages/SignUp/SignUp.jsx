import { Link } from 'react-router-dom';
import './SignUp.css';
import api from '../../api';
import { useAuth } from '../../context/authHelpers';

const SignUp = () => {
  const {signUpFormData, setSignUpFormData} = useAuth();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setSignUpFormData((prev) => ({
      ...prev,
      [name]: value
    }))  
  }

  const signUpFunc = async () => {
    try {
      const response = await api.post("/users", JSON.stringify(signUpFormData));

      if(response.status !== 201) {
        throw new Error(response);
      }
      const data = await response.data;
      console.log(data.id);
      setSignUpFormData({
        username: "",
        email: "",
        password: ""
      })
    }
    catch(err) {
      console.log(err.data);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpFunc();
  }

  return (
    <>
      <title>SignUp Page</title>

      <div className='signup-Parent'>
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" name="username" placeholder="Enter your user name" value={signUpFormData.username} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={signUpFormData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={signUpFormData.password}
                onChange={handleChange}
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
