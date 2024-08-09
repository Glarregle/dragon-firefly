import products from '../mock-backend/products';

export default function Home() {
  return (
    <div>
      <h1>Perfume Collection</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '20px', width: '200px' }}>
            <img src='https://dummyjson.com/image/150' alt={product.TITLE} style={{ width: '100%' }} />
            <h2>{product.TITLE}, {product.BRAND}</h2>
            <p>{product.VOLUME}</p>
            <p>${product.PRICE}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

