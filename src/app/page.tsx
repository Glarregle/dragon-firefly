import FeaturedProduct from './components/featured-product';
import FeaturedProducts from './components/featured-products';
import Image from 'next/image'
import Link from 'next/link'
import { Product } from './types'

export default async function Home() {
  
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${apiBaseUrl}/api/perfumes`)
  if (!res.ok) {
    console.log('Failed to fetch data:', res);
    return <div>Error fetching products.</div>;
  }

  const { data }: { data: Product[] } = await res.json();
  const products = data;

  return (
    <div className='flex flex-col flex-auto container px-12 pt-20 mx-auto h-full bg-white'>

      <h1 className='text-2xl mb-4'>Welcome to Scent.SK </h1>

      <div className='relative w-full h-100 shrink-0'>
        <Image
          src="/images/home-perfumes.jpg"
          fill={true}
          style={{objectFit: "cover", objectPosition: "center bottom"}}
          alt="Home poster"
        />
      </div>
      <p className='mt-4'>Discover the finest selection of perfumes curated for the discerning connoisseur. We believe in the power of scent to elevate every moment.</p>

{/*      <h1>Perfume Collection</h1>

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
*/}
      <h2 className='text-2xl mt-12 mb-4'>Featured products</h2>

      {/* Composition over inheritance approach */}
      <div className='mb-8 shrink-0'>
        <FeaturedProducts>
          {(product) => 
            <Link href="/product">
              <FeaturedProduct product={product} />
            </Link>
          }
        </FeaturedProducts>
      </div>

    </div>
  );
}

