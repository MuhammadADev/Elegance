import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Collections() {
  // Get exactly 4 products for each category, filling with duplicates if needed
  const getProductsByCategory = (category: string) => {
    const categoryProducts = products.filter(product => product.category === category);
    const result = [...categoryProducts];
    
    // If less than 4 products, duplicate existing ones to fill
    while (result.length < 4) {
      result.push({
        ...categoryProducts[result.length % categoryProducts.length],
        id: `${categoryProducts[result.length % categoryProducts.length].id}-${result.length}`
      });
    }
    
    // If more than 4 products, take only first 4
    return result.slice(0, 4);
  };

  const premiumProducts = getProductsByCategory('Premium');
  const luxuryProducts = getProductsByCategory('Luxury');
  const casualProducts = getProductsByCategory('Casual');
  const fusionProducts = getProductsByCategory('Fusion');
  const modernProducts = getProductsByCategory('Modern');

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collections, each featuring unique designs and exceptional craftsmanship.
          </p>
        </div>
        
        {/* Premium Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Premium Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Luxury Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Luxury Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Casual Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Casual Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {casualProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Fusion Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Fusion Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fusionProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Modern Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Modern Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {modernProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}