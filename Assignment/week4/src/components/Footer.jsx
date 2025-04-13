import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4">
      <p>Follow us on:</p>
      <div className="space-x-4 mt-2">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">Twitter</a>
        <a href="#" className="hover:underline">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;