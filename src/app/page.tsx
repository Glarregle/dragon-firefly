import products from '../mock-backend/products';
import FeaturedProduct from './components/featured-product';

const featuredProducts = [products[0], products[1], products[2]];

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
      <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <FeaturedProduct product={product} key={index}/>
            ))}
          </div>
      </div>
    </div>
  );
}

