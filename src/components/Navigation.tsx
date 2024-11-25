import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/programs', label: 'Programs' },
    { to: '/team', label: 'Team' },
    { to: '/support', label: 'Support' }
  ];

  return (
    <nav className="bg-secondary-dark py-2">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-white hover:text-primary-light'
                }`}
              >
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="underline"
                    className="border-b-2 border-primary"
                  />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;