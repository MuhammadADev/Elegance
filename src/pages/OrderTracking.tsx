import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const mockOrderData: Record<string, OrderTrackingDetails> = {
  'ORD123456': {
    orderId: 'ORD123456',
    status: 'shipped',
    estimatedDelivery: '2025-03-25',
    currentLocation: 'New York City Distribution Center',
    trackingEvents: [
      {
        status: 'Order Placed',
        location: 'Online',
        timestamp: '2025-03-20 09:30:00',
        description: 'Order confirmed and payment received'
      },
      {
        status: 'Processing',
        location: 'Main Warehouse',
        timestamp: '2025-03-21 10:15:00',
        description: 'Order is being prepared for shipment'
      },
      {
        status: 'Shipped',
        location: 'New York City Distribution Center',
        timestamp: '2025-03-22 14:20:00',
        description: 'Package has been shipped'
      }
    ]
  }
};

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [trackingDetails, setTrackingDetails] = useState<OrderTrackingDetails | null>(null);
  const [error, setError] = useState('');

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Simulate API call with mock data
    const orderDetails = mockOrderData[orderId];
    if (orderDetails) {
      setTrackingDetails(orderDetails);
    } else {
      setError('Order not found. Please check the order ID and try again.');
    }
  };

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-6 w-6 text-yellow-500" />;
      case 'confirmed':
        return <CheckCircle className="h-6 w-6 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-6 w-6 text-purple-500" />;
      case 'delivered':
        return <Package className="h-6 w-6 text-green-500" />;
      case 'cancelled':
        return <AlertCircle className="h-6 w-6 text-red-500" />;
      default:
        return <Clock className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your order ID to track your package and see real-time delivery updates.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleTracking} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your Order ID (e.g., ORD123456)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Track
              </button>
            </div>
            {error && (
              <p className="mt-2 text-red-600 text-sm">{error}</p>
            )}
          </form>

          {trackingDetails && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Order {trackingDetails.orderId}</h2>
                    <p className="text-gray-600">Estimated Delivery: {trackingDetails.estimatedDelivery}</p>
                  </div>
                  <div className="flex items-center">
                    {getStatusIcon(trackingDetails.status)}
                    <span className="ml-2 text-sm font-medium capitalize">{trackingDetails.status}</span>
                  </div>
                </div>
                {trackingDetails.currentLocation && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-600">Current Location</p>
                    <p className="font-medium text-gray-900">{trackingDetails.currentLocation}</p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Tracking History</h3>
                <div className="space-y-6">
                  {trackingDetails.trackingEvents.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-900">{event.status}</p>
                          <span className="text-sm text-gray-500">• {event.timestamp}</span>
                        </div>
                        <p className="text-gray-600">{event.location}</p>
                        <p className="text-sm text-gray-500">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}