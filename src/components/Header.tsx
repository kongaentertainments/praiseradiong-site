import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-secondary dark:bg-gray-800 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                <span className="text-primary">Praise</span>
                <span className="text-white mx-1">Radio</span>
                <span className="text-primary">NG</span>
              </h1>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex space-x-6 mx-6">
            <Link to="/" className="text-white hover:text-primary transition-colors text-sm">Home</Link>
            <Link to="/programs" className="text-white hover:text-primary transition-colors text-sm">Programs</Link>
            <Link to="/prayer" className="text-white hover:text-primary transition-colors text-sm">Prayer</Link>
            <Link to="/support" className="text-white hover:text-primary transition-colors text-sm">Support Us</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/praiseradio2018"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaFacebook size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/praiseradiong"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaInstagram size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;