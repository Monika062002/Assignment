import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="border rounded p-4 shadow hover:shadow-lg cursor-pointer"
      onClick={() => onClick(product)}
    >
      <img src={product.image} alt={product.name} className="h-40 mx-auto mb-4" />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-blue-500 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;