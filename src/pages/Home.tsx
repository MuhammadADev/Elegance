import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  // Get first row of products (4 items) for new arrivals
  const newArrivals = products.slice(0, 4);
  
  // Get next 28 products for featured collection (7 rows of 4)
  const featuredProducts = products.slice(2, 37).reduce((acc, product, index) => {
    const rowIndex = Math.floor(index / 4);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(product);
    return acc;
  }, [] as typeof products[]);

  const categories = [
    {
      name: 'Chiffon Dupatta Outfits',
      image: 'https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/STITCHED%20BS%203PES%20PRINTED%20LAWN%202025_page-0045.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1NUSVRDSEVEIEJTIDNQRVMgUFJJTlRFRCBMQVdOIDIwMjVfcGFnZS0wMDQ1LmpwZyIsImlhdCI6MTc0NDg0MDAwMiwiZXhwIjoxNzc2Mzc2MDAyfQ.0gRwTBiXp5yxVh9kVztvGMstPhDybHe70_Oizm0uSU4',
      link: '/collections'
    },
    {
      name: 'Silk Ready to Wear',
      image: 'https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/STITCHED%20BS%203PES%20PRINTED%20LAWN%202025_page-0023.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1NUSVRDSEVEIEJTIDNQRVMgUFJJTlRFRCBMQVdOIDIwMjVfcGFnZS0wMDIzLmpwZyIsImlhdCI6MTc0NDg0MzE0NywiZXhwIjoxNzc2Mzc5MTQ3fQ.J1qSCWtredcBN_LZ8QOQ0mhLFwSouR9_axZA1Akfqi0',
      link: '/collections'
    },
    {
      name: 'Luxury Lawn Ready to Wear',
      image: 'https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/STITCHED%20BS%203PES%20PRINTED%20LAWN%202025_page-0024.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1NUSVRDSEVEIEJTIDNQRVMgUFJJTlRFRCBMQVdOIDIwMjVfcGFnZS0wMDI0LmpwZyIsImlhdCI6MTc0NDg0MzE2NywiZXhwIjoxNzc2Mzc5MTY3fQ.K7LDJoRBZCl6VZblKrsndXPb2-6L9juK2Psqj5uUD0c',
      link: '/collections'
    },
    {
      name: 'WEST',
      image: 'https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/STITCHED%20BS%203PES%20PRINTED%20LAWN%202025_page-0035.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1NUSVRDSEVEIEJTIDNQRVMgUFJJTlRFRCBMQVdOIDIwMjVfcGFnZS0wMDM1LmpwZyIsImlhdCI6MTc0NDg0MzI3NiwiZXhwIjoxNzc2Mzc5Mjc2fQ._xb4s2lTMC-vEln_G4pW5a86cX-3aiJTp9JxYGb4UhQ',
      link: '/collections'
    },
    {
      name: 'Sleepwear',
      image: 'https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/STITCHED%20BS%203PES%20PRINTED%20LAWN%202025_page-0025.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1NUSVRDSEVEIEJTIDNQRVMgUFJJTlRFRCBMQVdOIDIwMjVfcGFnZS0wMDI1LmpwZyIsImlhdCI6MTc0NDg0MzE4OCwiZXhwIjoxNzc2Mzc5MTg4fQ.EvdrnMv6ohSzkhIdw3mRbIfIRbT-E-pT_YXtq4F5Uo4',
      link: '/collections'
    },
    {
      name: 'Modest Wear',
      image: 'https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/STITCHED%20BS%203PES%20PRINTED%20LAWN%202025_page-0026.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1NUSVRDSEVEIEJTIDNQRVMgUFJJTlRFRCBMQVdOIDIwMjVfcGFnZS0wMDI2LmpwZyIsImlhdCI6MTc0NDg0MzIyMCwiZXhwIjoxNzc2Mzc5MjIwfQ.I9rdyXgeKWQXqwhKuv5Ys8Hmz0ytUpyocSAFYF8hwV4',
      link: '/collections'
    },
    {
      name: 'Accessories',
      image: 'https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/STITCHED%20BS%203PES%20PRINTED%20LAWN%202025_page-0027.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1NUSVRDSEVEIEJTIDNQRVMgUFJJTlRFRCBMQVdOIDIwMjVfcGFnZS0wMDI3LmpwZyIsImlhdCI6MTc0NDg0MzIzNCwiZXhwIjoxNzc2Mzc5MjM0fQ.VY3Dw3sfwWmwCWPycieAhukW6Mk2nsl9YCzvBhsEO1Q',
      link: '/collections'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://ayttpbfhofftmjaxrjvi.supabase.co/storage/v1/object/sign/productimages/Top-10-affordable-clothing-brands-in-Pakistan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM1N2M1ZDhlLWM3MWItNDVmZC05NzRhLWViNzY5ZWJmMGIzNyJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1RvcC0xMC1hZmZvcmRhYmxlLWNsb3RoaW5nLWJyYW5kcy1pbi1QYWtpc3Rhbi5qcGciLCJpYXQiOjE3NDQ4MzUwNDUsImV4cCI6NTI3Njg2NzA0NX0.KyTRnDgC-jJ-c6V-oGhcTOtGh8nljd4zGhTPJvSTBUg"
            alt="Luxury Fashion Collection"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Elegance in Every Piece
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            Discover our exclusive collection of premium 3-piece suits designed for the modern woman.
          </p>
          <div className="mt-10">
            <a
              href="#collection"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Categories Slider */}
      <div className="py-10 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Shop by Category</h2>
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all z-10 group"
            onClick={() => {
              const container = document.querySelector('.categories-scroll');
              if (container) {
                const scrollAmount = container.clientWidth;
                container.scrollBy({
                  left: -scrollAmount,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-600 group-hover:text-gray-900" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all z-10 group"
            onClick={() => {
              const container = document.querySelector('.categories-scroll');
              if (container) {
                const scrollAmount = container.clientWidth;
                container.scrollBy({
                  left: scrollAmount,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-600 group-hover:text-gray-900" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="overflow-x-auto pb-4 categories-scroll hide-scrollbar snap-x snap-mandatory">
            <div className="flex space-x-6 px-2">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="group flex flex-col items-center space-y-2"
                >
                  <div className="w-36 h-37 rounded-full overflow-hidden transition-transform transform group-hover:scale-105">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 text-center">
                    {category.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collection */}
      <div id="collection" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Collection</h2>
          
          {/* New Arrivals Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} isNew={true} />
            ))}
          </div>

          {/* Regular Products - Now showing 7 rows */}
          {featuredProducts.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {row.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}