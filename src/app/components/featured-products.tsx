import React from 'react'
import { Product } from '../types'

interface FeaturedProductsProps {
  children: (product: Product) => React.ReactElement;
}

const FeaturedProducts = async ({ children } : FeaturedProductsProps) => {

  // GET featured products

  // TODO: generate static segments for the featured products, so is server side
  // then generate segments with prodcuts ids

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/perfumes?featured=true`, { cache: 'no-store' });
  
  if (!res.ok) {
    console.log('Failed to fetch data:', res);
    return <div>Error fetching products.</div>;
  }
  
  const { data } = await res.json();
  const featuredProducts: Product[] = data;

  return (
	  <div className="container mx-auto px-4 py-8">

	    <div className="grid grid-cols-3 gap-8">
	      {featuredProducts.map((product: Product) => (
	      	// This approach abstracts the key management.
	      	// Defining the key prop within the component is optimal and aligns with best practices. 
	      	// It's cleaner, more maintainable, and less error-prone. 
	        React.cloneElement(children(product), { key: product.id })
	      ))}
	    </div>
	  </div>
  );
}

export default FeaturedProducts