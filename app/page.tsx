'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Merchandise } from '@/components/Merchandise';
import { Heritage } from '@/components/Heritage';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F1EA]">
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <Merchandise />
      <Heritage />
      <Footer />
    </main>
  );
}
