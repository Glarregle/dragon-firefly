import React from 'react'
import products from '../../mock-backend/products';
import { Product } from '../types'

interface FeaturedProductsProps {
  children: (product: Product) => React.ReactElement;
}

const FeaturedProducts = async ({ children } : FeaturedProductsProps) => {

  // GET featured products

  // function to fetch featured products
  // or create a featured products list component that requests these, via server rendering
  // generate static segments for the featured products, so is server side
  // perfume product `featured: boolean = true`
  // fetch featured featured API response with three products
  // then generate segments with prodcuts ids


  // Fetch data in the server component
  // const fetchFeaturedProducts = async () => {
  //   const res = await fetch('https://api.example.com/products?featured=true');
  //   const data: Product[] = await res.json();
  //   return data;
  // };

  // const products = fetchFeaturedProducts();

  const featuredProducts = [products[0], products[1], products[2]];
  

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