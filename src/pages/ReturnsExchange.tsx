import React from 'react';
import { RefreshCw, Package, Clock, CheckCircle } from 'lucide-react';

export default function ReturnsExchange() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Exchange Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We want you to be completely satisfied with your purchase. Learn about our returns and exchange process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <RefreshCw className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Returns Process</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>1. Initiate return within 30 days of purchase</li>
              <li>2. Ensure items are unworn with original tags</li>
              <li>3. Pack items securely in original packaging</li>
              <li>4. Use provided return shipping label</li>
              <li>5. Drop off at authorized shipping location</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Package className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Exchange Options</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• Exchange for different size or color</li>
              <li>• Store credit for future purchases</li>
              <li>• Full refund to original payment method</li>
              <li>• Expedited exchange processing available</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Return Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Eligible for Returns:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Unworn items with original tags</li>
                <li>• Items in original packaging</li>
                <li>• Items purchased within 30 days</li>
                <li>• Damaged or defective items</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Non-Returnable Items:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Worn or used items</li>
                <li>• Items without original tags</li>
                <li>• Custom or altered items</li>
                <li>• Final sale items</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Processing Times</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• Returns processed within 3-5 business days</li>
              <li>• Refunds issued within 7-10 business days</li>
              <li>• Exchanges shipped within 2-3 business days</li>
              <li>• Email notifications at each step</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Quality Guarantee</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• 100% satisfaction guaranteed</li>
              <li>• Free returns for defective items</li>
              <li>• Quality inspection before shipping</li>
              <li>• Dedicated customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}