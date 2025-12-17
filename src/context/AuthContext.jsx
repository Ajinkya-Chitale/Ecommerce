import { useState } from "react";
import { AuthenticatedContext } from "./authHelpers";

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: "",
    });
    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [token, setToken] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null); // Stores the error message, null means modal is hidden

    // Function to handle error modal - close
    const handleErrorCloseModal = () => {
        setErrorMessage(null); // Closes the modal by clearing the error message
    }
    
    return (
        <AuthenticatedContext.Provider value={{isAuthenticated, loginFormData, setLoginFormData, setIsAuthenticated, token, setToken, errorMessage, setErrorMessage, handleErrorCloseModal, signUpFormData, setSignUpFormData}}>
            {children}
        </AuthenticatedContext.Provider>
    )
}

export  {AuthenticatedContext, AuthContextProvider}
