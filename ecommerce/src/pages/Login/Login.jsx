import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthenticatedContext } from "../../context/AuthContext";
import api from "../../api";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

const Login = () => {
  const { loginFormData, setLoginFormData, setToken, setIsAuthenticated, errorMessage, setErrorMessage, handleErrorCloseModal } = useContext(AuthenticatedContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Login Function
  const loginFunc = async () => {
      try {
          const response = await api.post('/auth/login', JSON.stringify(loginFormData));
          
          if(response.status !== 201) {
              throw new Error(`HTTP error! status: ${response.status}`)
          }

          setToken(response.data.token);
          sessionStorage.setItem('token', response.data.token);
          setIsAuthenticated(true);

          // Get the path from location state, default to '/' home page
          const redirectPath = location.state?.from || '/';

          // Redirect the user to the intended page, replacing the login entry in the history
          navigate(redirectPath, {replace: true});
      }
      catch(err) {
        if(err.response.status === 401) {
          setErrorMessage(err.response.data);
          setLoginFormData({
            username: "",
            password: "",
          })
        }
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunc();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [name]: value,
    }))  
  }

  return (
    <>
      <title>Login Page</title>

      <div className="login-Parent">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginFormData.username}
                placeholder="Enter your user name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginFormData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-login">Login</button>

            <div className="links">
              <Link to={"/signup"}>Sign up</Link>
            </div>
          </form>
          <div>
            <h3>Test Credentials</h3>
            <p>Username: johnd</p>
            <p>Password: m38rmF$</p>
          </div>
        </div>
      </div>

      {/* The Error Modal component */}
      <ErrorModal 
        show={!!errorMessage} // Modal shows if errorMessage is not null/empty
        message={errorMessage}
        onClose={handleErrorCloseModal}
      />
    </>
  );
};

export default Login;
