import React from 'react';
import ProductItem from '../components/ProductItem';
import Reviews from '../components/Reviews';

const ProductDetails = () => {
  const product = {
    id: 1,
    name: 'Product Name',
    image: 'https://via.placeholder.com/150',
    location: 'A1 Rack No.',
    stock: true
  };

  const reviews = [
    { user: 'Alice', text: 'Great product!', rating: 5 },
    { user: 'Bob', text: 'Not bad.', rating: 4 }
  ];

  return (
    <div>
      <ProductItem product={product} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default ProductDetails;
