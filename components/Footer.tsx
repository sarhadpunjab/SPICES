import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#172019] text-[#F4F1EA] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-b border-[#243026] pb-20">
          
          <div className="lg:col-span-4">
            <div className="flex flex-col items-start group z-10 mb-6">
              <Leaf size={14} className="mb-1 text-[#F4F1EA]" strokeWidth={1.5} />
              <span className="font-serif text-3xl tracking-[0.1em] text-[#F4F1EA] uppercase">
                SPICES
              </span>
              <span className="text-[0.45rem] tracking-[0.25em] uppercase mt-0.5 font-sans text-[#F4F1EA]/70">
                PURE • NATURAL • AUTHENTIC
              </span>
            </div>
            <p className="font-sans text-[#F4F1EA]/70 font-light leading-relaxed max-w-sm mb-10 text-sm">
              Pure spices. Pure moments. Pure you. Elevating every meal with nature&apos;s finest ingredients. 100% natural, no preservatives, and rich in flavor.
            </p>
            <form className="flex w-full max-w-md border-b border-[#243026] focus-within:border-[#C4A47C] transition-colors pb-2">
              <input 
                type="email" 
                placeholder="Join our newsletter" 
                className="bg-transparent px-2 py-2 flex-grow text-[#F4F1EA] placeholder-[#F4F1EA]/40 focus:outline-none font-sans text-xs tracking-widest uppercase"
              />
              <button 
                type="submit" 
                className="text-[#C4A47C] hover:text-[#F4F1EA] font-sans text-xs font-semibold tracking-widest uppercase py-2 px-4 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-7 text-xs font-sans tracking-[0.1em] uppercase">
            <h3 className="text-[#C4A47C] font-semibold mb-8">Shop</h3>
            <ul className="space-y-4 text-[#F4F1EA]/70">
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">All Spices</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Premium Jars</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Fresh Pouches</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Merchandise</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 text-xs font-sans tracking-[0.1em] uppercase">
            <h3 className="text-[#C4A47C] font-semibold mb-8">About</h3>
            <ul className="space-y-4 text-[#F4F1EA]/70">
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Recipes</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Journal</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 text-xs font-sans tracking-[0.1em] uppercase">
            <h3 className="text-[#C4A47C] font-semibold mb-8">Support</h3>
            <ul className="space-y-4 text-[#F4F1EA]/70">
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Shipping Returns</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-[#F4F1EA] transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[0.65rem] uppercase tracking-[0.15em] font-sans text-[#F4F1EA]/40">
          <p>&copy; {new Date().getFullYear()} Spices Brand. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F4F1EA] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F4F1EA] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
