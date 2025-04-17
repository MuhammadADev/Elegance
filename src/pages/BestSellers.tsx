import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function BestSellers() {
  // For demo purposes, showing the top 6 most expensive products as best sellers
  const bestSellers = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 6);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Sellers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most loved pieces that have captured hearts with their exquisite designs and superior quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}