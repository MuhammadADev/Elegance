export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export type PaymentMethod = 'cod' | 'bank_transfer' | 'easypaisa' | 'jazzcash';

export interface ShippingDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface BankTransferDetails {
  bankName: string;
  accountTitle: string;
  accountNumber: string;
  transactionId: string;
}

export type OrderStatus = 'processing' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderTrackingDetails {
  orderId: string;
  status: OrderStatus;
  estimatedDelivery: string;
  currentLocation?: string;
  trackingEvents: {
    status: string;
    location: string;
    timestamp: string;
    description: string;
  }[];
}