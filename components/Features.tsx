import { Leaf, Ban, ShieldCheck, Award } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Leaf size={32} strokeWidth={1} className="text-[#9A3B31]" />,
      title: "Pure",
      description: "100% pure ingredients with no additives, preserving the authentic essence of nature."
    },
    {
      icon: <Ban size={32} strokeWidth={1} className="text-[#9A3B31]" />,
      title: "Natural",
      description: "Cultivated without artificial chemicals, ensuring every pinch is as nature intended."
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1} className="text-[#9A3B31]" />,
      title: "Authentic",
      description: "Sourced from traditional growers to deliver real flavor that transforms your cooking."
    },
    {
      icon: <Award size={32} strokeWidth={1} className="text-[#9A3B31]" />,
      title: "Quality",
      description: "A testament to excellence. We rigorously select the most potent aromatic spices."
    }
  ];

  return (
    <section className="py-24 bg-[#F4F1EA] text-[#3E2723] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#9A3B31] font-sans tracking-[0.2em] font-medium text-xs uppercase mb-4 block">
            Brand Values
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3E2723] mb-6 font-medium">
            Small ingredients,<br /> big difference
          </h2>
          <div className="w-12 h-px bg-[#C4A47C] mx-auto mb-6"></div>
          <p className="font-sans text-[#3E2723]/80 leading-relaxed max-w-xl mx-auto">
            Pure spices, pure moments, pure you. Discover a world of unparalleled aromas and tastes with our hand-selected, ethically sourced spices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full border border-[#C4A47C]/50 bg-white flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-[#9A3B31] group-hover:bg-[#FFFDF9]">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3 text-[#3E2723]">{feature.title}</h3>
              <p className="font-sans text-sm text-[#3E2723]/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
