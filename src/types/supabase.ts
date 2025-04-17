export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      orders: {
        Row: {
          id: string
          user_id: string | null
          status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount?: number
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string | null
          product_id: string
          quantity: number
          size: string
          color: string
          price: number
        }
        Insert: {
          id?: string
          order_id?: string | null
          product_id: string
          quantity: number
          size: string
          color: string
          price: number
        }
        Update: {
          id?: string
          order_id?: string | null
          product_id?: string
          quantity?: number
          size?: string
          color?: string
          price?: number
        }
      }
      shipping_details: {
        Row: {
          id: string
          order_id: string | null
          full_name: string
          email: string
          phone: string
          address: string
          city: string
          province: string
          postal_code: string
        }
        Insert: {
          id?: string
          order_id?: string | null
          full_name: string
          email: string
          phone: string
          address: string
          city: string
          province: string
          postal_code: string
        }
        Update: {
          id?: string
          order_id?: string | null
          full_name?: string
          email?: string
          phone?: string
          address?: string
          city?: string
          province?: string
          postal_code?: string
        }
      }
      payments: {
        Row: {
          id: string
          order_id: string | null
          method: 'cod' | 'bank_transfer' | 'easypaisa' | 'jazzcash'
          status: 'pending' | 'completed' | 'failed' | 'refunded'
          amount: number
          transaction_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id?: string | null
          method: 'cod' | 'bank_transfer' | 'easypaisa' | 'jazzcash'
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          amount: number
          transaction_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string | null
          method?: 'cod' | 'bank_transfer' | 'easypaisa' | 'jazzcash'
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          amount?: number
          transaction_id?: string | null
          created_at?: string
        }
      }
      bank_transfer_details: {
        Row: {
          id: string
          payment_id: string | null
          bank_name: string
          account_title: string
          account_number: string
          transaction_id: string
        }
        Insert: {
          id?: string
          payment_id?: string | null
          bank_name: string
          account_title: string
          account_number: string
          transaction_id: string
        }
        Update: {
          id?: string
          payment_id?: string | null
          bank_name?: string
          account_title?: string
          account_number?: string
          transaction_id?: string
        }
      }
      mobile_payment_details: {
        Row: {
          id: string
          payment_id: string | null
          provider: string
          phone_number: string
          transaction_id: string
        }
        Insert: {
          id?: string
          payment_id?: string | null
          provider: string
          phone_number: string
          transaction_id: string
        }
        Update: {
          id?: string
          payment_id?: string | null
          provider?: string
          phone_number?: string
          transaction_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}