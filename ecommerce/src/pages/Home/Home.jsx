import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import ProductContainer from './ProductContainer';
import api from '../../api';
import Login from '../Login/Login';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('/products');
      setProducts(response.data);
    }

    getProducts();
  }, [])

  return (
    <>
      <title>Ecommerce</title>
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
  )
}

export default Home
