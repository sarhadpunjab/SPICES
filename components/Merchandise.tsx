import Image from 'next/image';
import Link from 'next/link';

export function Merchandise() {
  const items = [
    {
      id: 1,
      name: "Barista Apron",
      category: "Apparel",
      price: "$28.00",
      image: "https://picsum.photos/seed/apron/2070/1380"
    },
    {
      id: 2,
      name: "Ceramic Mug",
      category: "Drinkware",
      price: "$14.00",
      image: "https://picsum.photos/seed/mug/2070/1380"
    },
    {
      id: 3,
      name: "Canvas Tote",
      category: "Accessories",
      price: "$18.00",
      image: "https://picsum.photos/seed/tote/2126/1380"
    }
  ];

  return (
    <section className="py-24 bg-[#E3DFC8]" id="merchandise">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-[#9A3B31] font-sans tracking-[0.2em] text-xs font-medium uppercase mb-4 block">
              Merchandise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#3E2723] font-medium leading-tight">
              Wear Your <br /> <span className="italic text-[#9A3B31]">Love</span> For Flavor
            </h2>
          </div>
          <Link 
            href="#merch"
            className="mt-8 md:mt-0 pb-1 border-b border-[#3E2723] text-[#3E2723] hover:text-[#9A3B31] hover:border-[#9A3B31] transition-colors uppercase tracking-[0.1em] text-xs font-medium"
          >
            Shop All Merch
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-[400px] w-full mb-6 overflow-hidden bg-stone-900 rounded-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-[#3E2723] font-medium mb-1">{item.name}</h3>
                <p className="font-sans text-[#3E2723] font-medium text-sm">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
