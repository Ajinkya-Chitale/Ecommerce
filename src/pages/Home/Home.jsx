import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import ProductContainer from './ProductContainer';
import { useLoader } from '../../context/LoaderHelpers';
import Loader from '../../components/Loader/Loader';
import { useProduct } from '../../context/productHelpers';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

const Home = () => {
  const { getProducts, products, error, clearError } = useProduct();
  const { isLoading } = useLoader();

  // Fetch products when the component mounts
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <title>Ecommerce</title>
      {error && <ErrorModal show={true} message={error} onClose={clearError} />}
      {isLoading ? <Loader /> : (
        <>
          <Header />
          <div className="home-page">
            {
            products.length > 0 ?
              <div className="products-grid">
                {
                  products.map((product) => {
                    return(
                      <ProductContainer key={product.id} product={product} />
                    )
                  })
                }
              </div> :
              <h2 className="no-products">No products matched your search.</h2>
            }
          </div>
        </>
      )}
    </>
  )
}

export default Home
