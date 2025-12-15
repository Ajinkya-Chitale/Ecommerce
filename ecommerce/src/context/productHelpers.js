import { createContext, useContext } from "react";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

export {ProductContext, useProduct};