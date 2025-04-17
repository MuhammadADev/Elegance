import React from 'react';
import { Truck, Clock, Globe, Shield } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our shipping process and delivery times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Truck className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Shipping Methods</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• Standard Shipping (5-7 business days)</li>
              <li>• Express Shipping (2-3 business days)</li>
              <li>• Next Day Delivery (order before 2 PM)</li>
              <li>• International Shipping (10-15 business days)</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Shipping Destinations</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• Free shipping on domestic orders over $200</li>
              <li>• We ship to all 50 US states</li>
              <li>• International shipping available to select countries</li>
              <li>• Additional fees may apply for remote areas</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-gray-600">Shipping Method</th>
                  <th className="px-6 py-3 text-gray-600">Estimated Time</th>
                  <th className="px-6 py-3 text-gray-600">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Standard Shipping</td>
                  <td className="px-6 py-4">5-7 business days</td>
                  <td className="px-6 py-4">$9.99</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Express Shipping</td>
                  <td className="px-6 py-4">2-3 business days</td>
                  <td className="px-6 py-4">$19.99</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Next Day Delivery</td>
                  <td className="px-6 py-4">1 business day</td>
                  <td className="px-6 py-4">$29.99</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">International Shipping</td>
                  <td className="px-6 py-4">10-15 business days</td>
                  <td className="px-6 py-4">Starting at $39.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Processing Time</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• Orders are processed within 24-48 hours</li>
              <li>• Custom orders may require additional time</li>
              <li>• Order confirmation email sent immediately</li>
              <li>• Tracking number provided once shipped</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Shipping Insurance</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• All orders are insured during transit</li>
              <li>• Coverage for loss or damage</li>
              <li>• Signature confirmation available</li>
              <li>• Real-time tracking updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}