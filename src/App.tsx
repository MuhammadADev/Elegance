import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collections from './pages/Collections';
import NewArrivals from './pages/NewArrivals';
import Sale from './pages/Sale';
import BestSellers from './pages/BestSellers';
import Contact from './pages/Contact';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnsExchange from './pages/ReturnsExchange';
import SizeGuide from './pages/SizeGuide';
import OrderTracking from './pages/OrderTracking';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/returns-exchange" element={<ReturnsExchange />} />
              <Route path="/size-guide" element={<SizeGuide />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
            <Toaster position="top-center" />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;