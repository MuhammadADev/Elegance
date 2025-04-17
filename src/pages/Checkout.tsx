import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { pakistaniBanks } from '../data/banks';
import { createOrder } from '../services/orders';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type PaymentMethod = 'cod' | 'bank_transfer' | 'easypaisa' | 'jazzcash';

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountTitle: '',
    accountNumber: '',
    transactionId: ''
  });

  const [mobilePayment, setMobilePayment] = useState({
    phoneNumber: '',
    transactionId: ''
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleBankDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBankDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleMobilePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobilePayment(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsProcessing(true);

      let paymentDetails = undefined;
      
      if (paymentMethod === 'bank_transfer') {
        paymentDetails = bankDetails;
      } else if (['easypaisa', 'jazzcash'].includes(paymentMethod)) {
        paymentDetails = {
          ...mobilePayment,
          provider: paymentMethod
        };
      }

      await createOrder({
        items: cart,
        total: total * 275,
        shippingDetails,
        paymentMethod,
        paymentDetails
      });

      clearCart();
      toast.success('Order placed successfully!');
      navigate('/order-tracking');
    } catch (error: any) {
      toast.error(error.message || 'Failed to place order');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
            <p className="mt-2 text-gray-600">Add some items to your cart to checkout</p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Details */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Details</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={shippingDetails.fullName}
                      onChange={handleShippingChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={shippingDetails.email}
                      onChange={handleShippingChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={shippingDetails.phone}
                      onChange={handleShippingChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={shippingDetails.address}
                      onChange={handleShippingChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={shippingDetails.city}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                        Province
                      </label>
                      <input
                        type="text"
                        id="province"
                        name="province"
                        required
                        value={shippingDetails.province}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      required
                      value={shippingDetails.postalCode}
                      onChange={handleShippingChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="cod" className="text-sm font-medium text-gray-700">
                      Cash on Delivery
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="bank_transfer"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={paymentMethod === 'bank_transfer'}
                      onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="bank_transfer" className="text-sm font-medium text-gray-700">
                      Bank Transfer
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="easypaisa"
                      name="paymentMethod"
                      value="easypaisa"
                      checked={paymentMethod === 'easypaisa'}
                      onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="easypaisa" className="text-sm font-medium text-gray-700">
                      Easypaisa
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="jazzcash"
                      name="paymentMethod"
                      value="jazzcash"
                      checked={paymentMethod === 'jazzcash'}
                      onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="jazzcash" className="text-sm font-medium text-gray-700">
                      JazzCash
                    </label>
                  </div>
                </div>

                {/* Bank Transfer Details */}
                {paymentMethod === 'bank_transfer' && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
                        Bank
                      </label>
                      <select
                        id="bankName"
                        name="bankName"
                        required
                        value={bankDetails.bankName}
                        onChange={handleBankDetailsChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <option value="">Select Bank</option>
                        {pakistaniBanks.map(bank => (
                          <option key={bank.code} value={bank.name}>
                            {bank.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="accountTitle" className="block text-sm font-medium text-gray-700">
                        Account Title
                      </label>
                      <input
                        type="text"
                        id="accountTitle"
                        name="accountTitle"
                        required
                        value={bankDetails.accountTitle}
                        onChange={handleBankDetailsChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                        Account Number
                      </label>
                      <input
                        type="text"
                        id="accountNumber"
                        name="accountNumber"
                        required
                        value={bankDetails.accountNumber}
                        onChange={handleBankDetailsChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">
                        Transaction ID
                      </label>
                      <input
                        type="text"
                        id="transactionId"
                        name="transactionId"
                        required
                        value={bankDetails.transactionId}
                        onChange={handleBankDetailsChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                )}

                {/* Mobile Payment Details */}
                {(paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash') && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={mobilePayment.phoneNumber}
                        onChange={handleMobilePaymentChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">
                        Transaction ID
                      </label>
                      <input
                        type="text"
                        id="transactionId"
                        name="transactionId"
                        required
                        value={mobilePayment.transactionId}
                        onChange={handleMobilePaymentChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 px-4 rounded-md text-white text-sm font-medium transition-colors
                  ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                    <img
                      src={item.images[item.colors.indexOf(item.selectedColor)]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.selectedColor} / {item.selectedSize} / Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Rs. {(item.price * item.quantity * 275).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>Rs. {(total * 275).toFixed(2)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}