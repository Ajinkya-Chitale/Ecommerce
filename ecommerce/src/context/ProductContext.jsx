import { useState } from "react";
import { ProductContext } from "./productHelpers"
import { useLoader } from "./LoaderHelpers";
import api from "../api";

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    const { showLoader, hideLoader } = useLoader();

    const getProducts = async () => {
      showLoader();
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
        console.log('Not able to fetch products data.', err);
      }
    }
    
    // Function to handle product search
    const handleSearchProduct = (e) => {
        const searchQuery = e.target.value.toLowerCase();

        if(searchQuery !== '') {
            const filteredProducts = originalProducts.filter((product) => {
                return product.title.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery)
            })

            setProducts(filteredProducts);
        }
        else {
            setProducts(products);
        }
    }

    return (
        <ProductContext.Provider value={{ getProducts, products, setProducts, handleSearchProduct }}>
            { children }
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductContextProvider}