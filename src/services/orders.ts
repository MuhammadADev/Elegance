import { supabase } from '../lib/supabase';
import type { CartItem } from '../types';

export interface CreateOrderParams {
  items: CartItem[];
  total: number;
  shippingDetails: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
  };
  paymentMethod: 'cod' | 'bank_transfer' | 'easypaisa' | 'jazzcash';
  paymentDetails?: {
    bankName?: string;
    accountTitle?: string;
    accountNumber?: string;
    transactionId?: string;
    phoneNumber?: string;
    provider?: string;
  };
}

export async function createOrder({
  items,
  total,
  shippingDetails,
  paymentMethod,
  paymentDetails
}: CreateOrderParams) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User must be authenticated to create an order');

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        total_amount: total,
        status: 'pending'
      })
      .select()
      .single();

    if (orderError) throw orderError;

    const orderItems = items.map(item => ({
      order_id: order.id,
      product_id: item.id,
      quantity: item.quantity,
      size: item.selectedSize,
      color: item.selectedColor,
      price: item.price
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) throw itemsError;

    const { error: shippingError } = await supabase
      .from('shipping_details')
      .insert({
        order_id: order.id,
        ...shippingDetails
      });

    if (shippingError) throw shippingError;

    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .insert({
        order_id: order.id,
        method: paymentMethod,
        amount: total,
        status: paymentMethod === 'cod' ? 'pending' : 'completed'
      })
      .select()
      .single();

    if (paymentError) throw paymentError;

    if (paymentMethod === 'bank_transfer' && paymentDetails) {
      const { error: bankError } = await supabase
        .from('bank_transfer_details')
        .insert({
          payment_id: payment.id,
          bank_name: paymentDetails.bankName,
          account_title: paymentDetails.accountTitle,
          account_number: paymentDetails.accountNumber,
          transaction_id: paymentDetails.transactionId
        });

      if (bankError) throw bankError;
    } else if (['easypaisa', 'jazzcash'].includes(paymentMethod) && paymentDetails) {
      const { error: mobileError } = await supabase
        .from('mobile_payment_details')
        .insert({
          payment_id: payment.id,
          provider: paymentMethod,
          phone_number: paymentDetails.phoneNumber!,
          transaction_id: paymentDetails.transactionId!
        });

      if (mobileError) throw mobileError;
    }

    return order;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}