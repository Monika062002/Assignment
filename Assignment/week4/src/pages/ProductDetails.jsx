import React from 'react';

const ProductDetails = ({ product, goBack }) => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="mx-auto mb-4" />
      <p className="text-lg mb-2">Price: ${product.price}</p>
      <p className="text-gray-700">This is a detailed description of the product.</p>
      <button
        onClick={goBack}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;