import React from 'react'
import Image from 'next/image';
import { Product } from '../types'


// Define the props interface
interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
	return (
		<div className='bg-light-gray rounded-xl p-4'>
			<Image
	          src="/images/sample-perfume.png"
	          alt="Featured perfume"
	          width={200}
	          height={200}
	          className="rounded-xl mb-5"
	        />
	        <div>
				<h3 className='text-2xl mb-1.5'>{product.title}</h3>
				<p className='text-base'>€{product.price}</p>
			</div>
		</div>
	)
}

export default FeaturedProduct