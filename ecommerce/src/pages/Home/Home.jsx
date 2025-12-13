import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import ProductContainer from './ProductContainer';
import api from '../../api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get('/products');

        if(response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        setProducts(response.data);
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
