/*
  # Create orders and payment related tables

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `status` (order_status)
      - `total_amount` (numeric)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, references orders)
      - `product_id` (text)
      - `quantity` (integer)
      - `size` (text)
      - `color` (text)
      - `price` (numeric)
    
    - `shipping_details`
      - `id` (uuid, primary key)
      - `order_id` (uuid, references orders)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `address` (text)
      - `city` (text)
      - `province` (text)
      - `postal_code` (text)
    
    - `payments`
      - `id` (uuid, primary key)
      - `order_id` (uuid, references orders)
      - `method` (payment_method)
      - `status` (payment_status)
      - `amount` (numeric)
      - `transaction_id` (text)
      - `created_at` (timestamp)
    
    - `bank_transfer_details`
      - `id` (uuid, primary key)
      - `payment_id` (uuid, references payments)
      - `bank_name` (text)
      - `account_title` (text)
      - `account_number` (text)
      - `transaction_id` (text)
    
    - `mobile_payment_details`
      - `id` (uuid, primary key)
      - `payment_id` (uuid, references payments)
      - `provider` (text)
      - `phone_number` (text)
      - `transaction_id` (text)

  2. Enums
    - order_status
    - payment_method
    - payment_status

  3. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create enums
CREATE TYPE order_status AS ENUM (
  'pending',
  'processing',
  'shipped',
  'delivered',
  'cancelled'
);

CREATE TYPE payment_method AS ENUM (
  'cod',
  'bank_transfer',
  'easypaisa',
  'jazzcash'
);

CREATE TYPE payment_status AS ENUM (
  'pending',
  'completed',
  'failed',
  'refunded'
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users,
  status order_status DEFAULT 'pending',
  total_amount numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders ON DELETE CASCADE,
  product_id text NOT NULL,
  quantity integer NOT NULL,
  size text NOT NULL,
  color text NOT NULL,
  price numeric NOT NULL
);

-- Create shipping_details table
CREATE TABLE IF NOT EXISTS shipping_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  province text NOT NULL,
  postal_code text NOT NULL
);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders ON DELETE CASCADE,
  method payment_method NOT NULL,
  status payment_status DEFAULT 'pending',
  amount numeric NOT NULL,
  transaction_id text,
  created_at timestamptz DEFAULT now()
);

-- Create bank_transfer_details table
CREATE TABLE IF NOT EXISTS bank_transfer_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id uuid REFERENCES payments ON DELETE CASCADE,
  bank_name text NOT NULL,
  account_title text NOT NULL,
  account_number text NOT NULL,
  transaction_id text NOT NULL
);

-- Create mobile_payment_details table
CREATE TABLE IF NOT EXISTS mobile_payment_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id uuid REFERENCES payments ON DELETE CASCADE,
  provider text NOT NULL,
  phone_number text NOT NULL,
  transaction_id text NOT NULL
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipping_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE bank_transfer_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE mobile_payment_details ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (order_id IN (
    SELECT id FROM orders WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can insert their own order items"
  ON order_items
  FOR INSERT
  TO authenticated
  WITH CHECK (order_id IN (
    SELECT id FROM orders WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can view their own shipping details"
  ON shipping_details
  FOR SELECT
  TO authenticated
  USING (order_id IN (
    SELECT id FROM orders WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can insert their own shipping details"
  ON shipping_details
  FOR INSERT
  TO authenticated
  WITH CHECK (order_id IN (
    SELECT id FROM orders WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can view their own payments"
  ON payments
  FOR SELECT
  TO authenticated
  USING (order_id IN (
    SELECT id FROM orders WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can insert their own payments"
  ON payments
  FOR INSERT
  TO authenticated
  WITH CHECK (order_id IN (
    SELECT id FROM orders WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can view their own bank transfer details"
  ON bank_transfer_details
  FOR SELECT
  TO authenticated
  USING (payment_id IN (
    SELECT p.id FROM payments p
    JOIN orders o ON o.id = p.order_id
    WHERE o.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert their own bank transfer details"
  ON bank_transfer_details
  FOR INSERT
  TO authenticated
  WITH CHECK (payment_id IN (
    SELECT p.id FROM payments p
    JOIN orders o ON o.id = p.order_id
    WHERE o.user_id = auth.uid()
  ));

CREATE POLICY "Users can view their own mobile payment details"
  ON mobile_payment_details
  FOR SELECT
  TO authenticated
  USING (payment_id IN (
    SELECT p.id FROM payments p
    JOIN orders o ON o.id = p.order_id
    WHERE o.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert their own mobile payment details"
  ON mobile_payment_details
  FOR INSERT
  TO authenticated
  WITH CHECK (payment_id IN (
    SELECT p.id FROM payments p
    JOIN orders o ON o.id = p.order_id
    WHERE o.user_id = auth.uid()
  ));