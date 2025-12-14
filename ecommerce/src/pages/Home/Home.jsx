import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import ProductContainer from './ProductContainer';
import api from '../../api';
import { useLoader } from '../../context/LoaderHelpers';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [products, setProducts] = useState([]);
  const {isLoading, showLoader, hideLoader} = useLoader();

  useEffect(() => {
    const getProducts = async () => {
      showLoader();
      try {
        const response = await api.get('/products');

        if(response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        setProducts(response.data);
        hideLoader();
      }
      catch (err) {
        console.log('Not able to fetch products data.', err);
      }
    }

    getProducts();
  }, [])

  return (
    <>
      <title>Ecommerce</title>
      {isLoading ? <Loader /> : (
        <>
          <Header />
          <div className="home-page">
            <div className="products-grid">
              {
                products.map((product) => {
                  return(
                    <ProductContainer key={product.id} product={product} />
                  )
                })
              }
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
