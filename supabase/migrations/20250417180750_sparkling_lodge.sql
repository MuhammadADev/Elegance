/*
  # Fix Orders RLS Policy

  1. Changes
    - Drop existing RLS policies on orders table
    - Create new RLS policies that properly handle order creation
    
  2. Security
    - Enable RLS on orders table
    - Add policies for:
      - Insert: Authenticated users can create orders with their user_id
      - Select: Users can only view their own orders
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert their own orders" ON orders;
DROP POLICY IF EXISTS "Users can view their own orders" ON orders;

-- Create new policies
CREATE POLICY "Users can insert their own orders"
ON orders
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id
);

CREATE POLICY "Users can view their own orders"
ON orders
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id
);