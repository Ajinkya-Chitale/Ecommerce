import { createContext, useContext } from "react";

const AuthenticatedContext = createContext();

const useAuth = () => useContext(AuthenticatedContext);

export {AuthenticatedContext, useAuth};