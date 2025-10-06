import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black bg-opacity-70 backdrop-blur-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-purple-400">AI Image Generator</h1>
      <ul className="flex space-x-4 text-white">
        <li><Link to="/" className="hover:text-purple-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-purple-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-purple-300">Contact</Link></li>
        <li><Link to="/privacy" className="hover:text-purple-300">Privacy</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
