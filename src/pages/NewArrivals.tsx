import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function NewArrivals() {
  // Get first row (4 products) for new items
  const newProducts = products.slice(0, 4);
  // Get remaining products
  const otherProducts = products.slice(4, 16);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium 3-piece suits, featuring elegant designs and exceptional craftsmanship.
          </p>
        </div>

        {/* New Products with Badge */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} isNew={true} />
          ))}
        </div>

        {/* Other Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}