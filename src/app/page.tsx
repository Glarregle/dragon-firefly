import FeaturedProduct from './components/featured-product';
import FeaturedProducts from './components/featured-products';
import Link from 'next/link'
import { Product } from './types'

export default async function Home() {
  
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/perfumes`);
  if (!res.ok) {
    console.log('Failed to fetch data:', res);
    return <div>Error fetching products.</div>;
  }

  const { data }: { data: Product[] } = await res.json();
  const products = data;

  return (
    <div className='flex flex-col flex-auto'>
      <h1>Perfume Collection</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.slice(0, 4).map((product: Product) => (
          <div key={product.id} style={{ margin: '20px', width: '200px' }}>
            <img src='https://dummyjson.com/image/150' alt={product.title} style={{ width: '100%' }} />
            <h2>{product.title}, {product.brand}</h2>
            <p>{product.volume}</p>
            <p>${product.price}</p>
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

