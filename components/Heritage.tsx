import Image from 'next/image';

export function Heritage() {
  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden" id="heritage">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/spicemarket/2070/1380"
          alt="Spice market"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#243026]/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F4F1EA] leading-tight mb-8 font-medium">
          Pure Spices. <br />
          <span className="text-[#C4A47C]">Pure Moments.</span> <br />
          Pure You.
        </h2>
        <div className="w-16 h-px bg-[#C4A47C] mx-auto mb-8"></div>
        <p className="font-sans text-sm md:text-base text-[#F4F1EA]/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          We believe good food starts with great spices. By sourcing our ingredients directly from nature and locking in the freshness, we bring authentic flavors straight to your kitchen. Taste the difference quality makes.
        </p>
        <button className="border border-[#C4A47C] text-[#C4A47C] hover:bg-[#C4A47C] hover:text-[#243026] px-8 py-4 uppercase tracking-[0.1em] text-xs font-medium transition-colors duration-300">
          Discover Our Story
        </button>
      </div>
    </section>
  );
}
