import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';

export default function Navbar() {
  const { cart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/collections', label: 'Collections' },
    { path: '/new-arrivals', label: 'New Arrivals' },
    { path: '/best-sellers', label: 'Best Sellers' },
    { path: '/sale', label: 'Sale' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:hidden"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
              <Link to="/" className="ml-2 text-2xl font-bold text-gray-800">
                Elegance
              </Link>
            </div>
            
            <div className="hidden sm:flex space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${
                    isActive(path)
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-600'
                  } hover:text-gray-900`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/order-tracking"
                className={`${
                  isActive('/order-tracking') ? 'bg-gray-100' : ''
                } px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors hidden sm:block`}
              >
                Track Order
              </Link>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="relative cursor-pointer"
              >
                <ShoppingBag className="h-6 w-6 text-gray-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } sm:hidden bg-white border-t border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  isActive(path)
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600'
                } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-gray-900`}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/order-tracking"
              className={`${
                isActive('/order-tracking')
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600'
              } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-gray-900`}
              onClick={closeMobileMenu}
            >
              Track Order
            </Link>
          </div>
        </div>
      </nav>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}