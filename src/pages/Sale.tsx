import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Sale() {
  // For demo purposes, applying a 20% discount to the last 16 products (4 rows)
  const saleProducts = products.slice(-16).map(product => ({
    ...product,
    price: Number((product.price * 0.8).toFixed(2)) // 20% off
  }));

  return (
    <div className="pt-24 pb-16">
      <div className="relative mb-12 h-[700px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/5-Affordable-Retail-Brands-for-Working-Women-in-Pakistan1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzLzUtQWZmb3JkYWJsZS1SZXRhaWwtQnJhbmRzLWZvci1Xb3JraW5nLVdvbWVuLWluLVBha2lzdGFuMS5wbmciLCJpYXQiOjE3NDQ4NDM0NzYsImV4cCI6MzY3ODEzMzk0NzZ9.kApreQqTOS8u5WGtIrd-BOtxkuA1tNZoOIhriFlneQE"
            alt="Sale banner"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Season End Sale</h1>
            <p className="text-xl text-gray-200">Up to 20% off on selected items</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {saleProducts.map(product => (
            <div key={product.id} className="relative">
              <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full">
                20% OFF
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Limited time offer. Don't miss out!</p>
          <p className="text-sm text-gray-500">*Terms and conditions apply</p>
        </div>
      </div>
    </div>
  );
}