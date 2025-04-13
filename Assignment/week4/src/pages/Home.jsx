import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import ProductDetails from './ProductDetails';

const productsData = [
  { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Phone', price: 499, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Headphones', price: 199, image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} goBack={() => setSelectedProduct(null)} />
      ) : (
        <ProductList products={productsData} onProductClick={setSelectedProduct} />
      )}
      <Footer />
    </>
  );
};

export default Home;