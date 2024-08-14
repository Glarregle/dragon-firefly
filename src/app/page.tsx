import FeaturedProduct from './components/featured-product';
import Link from 'next/link'
import products from '../mock-backend/products';
import FeaturedProducts from './components/featured-products';

export default function Home() {

  return (
    <div className='flex flex-col flex-auto'>
      <h1>Perfume Collection</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.slice(0, 4).map((product, index) => (
          <div key={index} style={{ margin: '20px', width: '200px' }}>
            <img src='https://dummyjson.com/image/150' alt={product.TITLE} style={{ width: '100%' }} />
            <h2>{product.TITLE}, {product.BRAND}</h2>
            <p>{product.VOLUME}</p>
            <p>${product.PRICE}</p>
          </div>
        ))}
      </div>
      <h2 className='text-2xl mb-4'>Featured products</h2>

      {/* Composition over inheritance approach */}
      <FeaturedProducts>
        {(product) => 
          <Link href="/product">
            <FeaturedProduct product={product} />
          </Link>
        }
      </FeaturedProducts>

    </div>
  );
}

