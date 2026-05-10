'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#products' },
    { name: 'Merchandise', href: '#merchandise' },
    { name: 'Our Story', href: '#heritage' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8 lg:px-12 border-b border-transparent',
          isScrolled || isMobileMenuOpen ? 'bg-[#F4F1EA] shadow-sm py-2 border-[#E3DFC8]' : 'bg-[#243026] py-4'
        )}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group z-10 w-[160px]">
            <Leaf size={14} className={cn("mb-1 transition-colors", isScrolled || isMobileMenuOpen ? "text-[#243026]" : "text-[#F4F1EA]" )} strokeWidth={1.5} />
            <span className={cn(
              "font-serif text-2xl tracking-[0.1em] transition-colors",
              isScrolled || isMobileMenuOpen ? "text-[#243026]" : "text-[#F4F1EA]"
            )}>
              SPICES
            </span>
            <span className={cn(
               "text-[0.45rem] tracking-[0.25em]uppercase mt-0.5 transition-colors font-sans",
               isScrolled || isMobileMenuOpen ? "text-[#243026]/70" : "text-[#F4F1EA]/70"
            )}>
              PURE • NATURAL • AUTHENTIC
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "font-sans text-xs tracking-[0.15em] uppercase transition-colors hover:text-[#9A3B31]",
                  isScrolled ? "text-[#243026] font-medium" : "text-[#F4F1EA]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#products" 
              className={cn(
                "font-sans text-xs tracking-[0.15em] uppercase px-5 py-2.5 transition-colors",
                isScrolled 
                  ? "bg-[#243026] text-[#F4F1EA] hover:bg-[#9A3B31]" 
                  : "bg-[#F4F1EA] text-[#243026] hover:bg-[#9A3B31] hover:text-[#F4F1EA]"
              )}
            >
              Shop Now
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-5 z-10 w-[160px] justify-end">
            <button className={cn(
              "transition-colors hover:text-[#9A3B31]",
              isScrolled || isMobileMenuOpen ? "text-[#243026]" : "text-[#F4F1EA]"
            )}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className={cn(
              "relative transition-colors hover:text-[#9A3B31]",
              isScrolled || isMobileMenuOpen ? "text-[#243026]" : "text-[#F4F1EA]"
            )}>
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={cn(
                "lg:hidden p-1 transition-colors hover:text-[#9A3B31]",
                isScrolled || isMobileMenuOpen ? "text-[#243026]" : "text-[#F4F1EA]"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#F4F1EA] border-t border-[#E3DFC8] shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-6 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#243026] py-3 hover:text-[#9A3B31] transition-colors border-b border-[#243026]/10"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 pb-4 flex flex-col">
                <Link 
                  href="#products" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="bg-[#243026] text-[#F4F1EA] text-center uppercase tracking-widest font-sans text-xs py-4 w-full hover:bg-[#9A3B31] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
