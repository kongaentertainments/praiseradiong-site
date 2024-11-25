import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-dark text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
            <p className="text-gray-300">Email: info@praiseradiong.co</p>
            <p className="text-gray-300">Phone: +234 123 456 7890</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/prayer" className="text-gray-300 hover:text-primary transition-colors">
                  Prayer Request
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-primary transition-colors">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Newsletter</h4>
            <p className="text-gray-300 mb-2">Subscribe to our updates</p>
            <Newsletter />
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; 2023 PraiseRadioNG.co - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;