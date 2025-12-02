import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import ProductContainer from './ProductContainer';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
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
