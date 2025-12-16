import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { ProductContext } from "./productHelpers"
import { useLoader } from "./LoaderHelpers";
import api from "../api";

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    const { showLoader, hideLoader } = useLoader();
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const timerRef = useRef(null);
    const clearError = () => setError(null);

    // Memoized filtered products based on search query
    const filteredProducts = useMemo(() => {
        if (!searchQuery) return originalProducts;
        
        return originalProducts.filter((product) => {
            return product.title.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery);
        });
    }, [searchQuery, originalProducts]);

    // Debounce function to limit the rate of function calls
    const debounce = (func, delay = 300) => {
        return (...args) => {
            clearTimeout(timerRef.current);

            timerRef.current = setTimeout( () => {
                func(...args);
            }, delay)
        }
    }

    // Function to fetch products from API
    const getProducts = async () => {
      showLoader();
      setError(null);
      try {
        const response = await api.get('/products');

        if(response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        setProducts(response.data);
        setOriginalProducts(response.data);
        hideLoader();
      }
      catch (err) {
        setError(err.message);
        hideLoader();
      }
    }
    
    // Function to handle product search
    const handleSearchProduct = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchQuery(value);
    }

    // Debounced version of the search handler
    const debouncedSearch = useCallback(debounce(handleSearchProduct), [originalProducts]);

    // Update products when filteredProducts changes
    useEffect(() => {
        setProducts(filteredProducts);
    }, [filteredProducts]);

    // Cleanup on unmount
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <ProductContext.Provider value={{ getProducts, products, setProducts, debouncedSearch, error, clearError }}>
            { children }
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductContextProvider}