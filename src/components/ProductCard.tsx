import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  isNew?: boolean;
}

export default function ProductCard({ product, isNew = false }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();

  const getColorImage = (color: string) => {
    const colorIndex = product.colors.indexOf(color);
    return product.images[colorIndex] || product.images[0];
  };

  const handleAddToCart = () => {
    addToCart(product, product.sizes[0], selectedColor);
    toast.success('Added to cart!');
  };

  return (
    <div className="group w-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
        {isNew && (
          <div className="absolute top-2 left-2 z-10 bg-amber-400 text-white text-xs px-3 py-1 rounded-full">
            New In
          </div>
        )}
        <img
          src={getColorImage(selectedColor)}
          alt={`${product.name} in ${selectedColor}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-semibold text-gray-900">
            Rs. {(product.price * 275).toFixed(2)}
          </span>
          {isNew && (
            <>
              <span className="text-sm text-gray-500 line-through">
                Rs. {(product.price * 275 * 1.4).toFixed(2)}
              </span>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                -40% OFF
              </span>
            </>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full mt-3 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}