import { createContext, useState } from "react";

const AuthenticatedContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    return (
        <AuthenticatedContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthenticatedContext.Provider>
    )
}

export  {AuthenticatedContext, AuthContextProvider}
