import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Elegance</h3>
            <p className="text-gray-400">
              Discover the perfect blend of tradition and modernity with our premium 3-piece suits designed for the contemporary woman.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/new-arrivals" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/best-sellers" className="text-gray-400 hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/sale" className="text-gray-400 hover:text-white transition-colors">Sale Items</Link></li>
              <li><Link to="/collections" className="text-gray-400 hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/order-tracking" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping-policy" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns-exchange" className="text-gray-400 hover:text-white transition-colors">Returns & Exchange</Link></li>
              <li><Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-gray-400">support@elegance.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-gray-400">123 Fashion Street, NY 10001</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}