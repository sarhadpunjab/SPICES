import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Turmeric Powder",
      category: "100% Natural • 120g",
      price: "$12.00",
      image: "https://picsum.photos/seed/turmeric/2069/1380"
    },
    {
      id: 2,
      name: "Chili Flakes",
      category: "100% Natural • 100g",
      price: "$10.50",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Cumin Seeds",
      category: "100% Natural • 120g",
      price: "$14.00",
      image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Black Pepper",
      category: "Whole • 100% Natural",
      price: "$16.50",
      image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2075&auto=format&fit=crop" 
    }
  ];

  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-[#9A3B31] font-sans tracking-[0.2em] text-xs font-medium uppercase mb-4 block">
              Premium Collection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#3E2723] font-medium leading-tight tracking-tight">
              From Nature To <br /> Your Kitchen
            </h2>
          </div>
          <Link 
            href="#all-products"
            className="mt-8 md:mt-0 pb-1 border-b border-[#3E2723] text-[#3E2723] hover:text-[#9A3B31] hover:border-[#9A3B31] transition-colors uppercase tracking-[0.1em] text-xs font-medium"
          >
            Explore All Spices
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative h-80 w-full mb-6 overflow-hidden bg-[#F4F1EA]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                   <button className="bg-[#243026] text-[#F4F1EA] px-6 py-3 font-sans text-xs uppercase tracking-[0.1em] hover:bg-[#9A3B31] transition-colors flex items-center space-x-2">
                     <ShoppingBag size={14} />
                     <span>Add to Cart</span>
                   </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-[#3E2723] font-medium mb-1">{product.name}</h3>
                <span className="text-[0.65rem] text-[#3E2723]/60 uppercase tracking-[0.15em] font-sans block mb-3">
                  {product.category}
                </span>
                <p className="font-sans text-[#3E2723] font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
