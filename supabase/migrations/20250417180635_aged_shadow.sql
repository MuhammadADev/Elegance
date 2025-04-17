/*
  # Fix orders table RLS policies

  1. Changes
    - Update the insert policy for orders table to properly handle user_id
    - Ensure authenticated users can create orders with their user_id

  2. Security
    - Maintains RLS protection
    - Only allows users to create orders with their own user_id
*/

-- Drop existing insert policy
DROP POLICY IF EXISTS "Users can insert their own orders" ON orders;

-- Create new insert policy with correct check
CREATE POLICY "Users can insert their own orders"
ON orders
FOR INSERT
TO authenticated
WITH CHECK (
  -- Ensure user_id matches the authenticated user's ID
  auth.uid() = user_id AND
  -- Ensure user_id is not null
  user_id IS NOT NULL
);