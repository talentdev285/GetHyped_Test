import { motion } from 'motion/react';

const brands = [
  { name: 'KNLTB', logo: 'https://cdn.worldvectorlogo.com/logos/knltb-1.svg' },
  { name: 'Tho', logo: 'https://picsum.photos/seed/brand2/200/100' },
  { name: 'De Talenten', logo: 'https://picsum.photos/seed/brand3/200/100' },
  { name: 'Zwarte Cross', logo: 'https://picsum.photos/seed/brand4/200/100' },
  { name: 'Bulit', logo: 'https://picsum.photos/seed/brand5/200/100' },
];

export default function BrandTicker() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 overflow-hidden bg-[#F5F5F0] relative"
    >
      <div className="container-custom mb-16 px-6">
        <h2 className="text-[32px] md:text-[48px] font-black leading-[1.1] uppercase tracking-tight">
          These brands<br />got hyped.
        </h2>
      </div>

      <div className="space-y-4 group">
        {/* Row 1 */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex items-center gap-4 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div 
                key={`${brand.name}-1-${i}`}
                className="w-48 md:w-64 h-32 md:h-48 flex items-center justify-center bg-white rounded-[24px] shadow-sm flex-shrink-0"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-[70%] max-h-[50%] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Delayed or same) */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-reverse flex items-center gap-4 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div 
                key={`${brand.name}-2-${i}`}
                className="w-48 md:w-64 h-32 md:h-48 flex items-center justify-center bg-white rounded-[24px] shadow-sm flex-shrink-0"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-[70%] max-h-[50%] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </motion.section>
  );
}
