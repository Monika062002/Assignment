import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyStore</h1>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Products</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;