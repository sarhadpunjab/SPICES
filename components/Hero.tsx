'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#243026] pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
          alt="Vibrant Spices and Indian Food"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Colorful gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#172019]/95 via-[#243026]/70 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full py-20 flex justify-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-[#C4A47C] font-sans tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 block">
              Nature&apos;s finest in every pack
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F4F1EA] leading-[1.1] mb-6 font-medium uppercase drop-shadow-md">
              Elevate <br /> Every Meal
            </h1>
            <p className="font-sans text-sm md:text-base text-[#F4F1EA]/80 max-w-md mb-12 uppercase tracking-[0.15em] drop-shadow-md">
              With Pure & Natural Spices
            </p>
            <Link 
              href="#products" 
              className="group inline-flex items-center space-x-3 bg-transparent border border-[#C4A47C] hover:bg-[#C4A47C] text-[#C4A47C] hover:text-[#243026] px-8 py-4 transition-all duration-300"
            >
              <span className="font-sans font-medium uppercase tracking-[0.1em] text-xs">Explore Collection</span>
              <MoveRight size={16} className="transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
