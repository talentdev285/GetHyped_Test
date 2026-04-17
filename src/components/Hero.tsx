import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const stats = [
  {
    label: 'Organische views',
    value: '10M+',
    sub: 'Groei door slimme content',
    color: 'bg-[#0084FF]',
    tilt: '-rotate-3',
  },
  {
    image: 'https://picsum.photos/seed/fashion/600/800',
    tilt: 'rotate-3 translate-y-8',
  },
  {
    label: 'Merken geholpen',
    value: '30+',
    sub: 'Van start-up tot multinational',
    color: 'bg-[#00CE8E]',
    tilt: '-rotate-3',
  },
  {
    image: 'https://picsum.photos/seed/cars/600/800',
    tilt: 'rotate-3 translate-y-8',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = "Get Hyped. Get Noticed. Get Results.".split(" ");

  return (
    <section ref={containerRef} className="pt-32 pb-20 overflow-hidden bg-white min-h-[120vh]">
      <div className="container-custom">
        {/* Heading */}
        <motion.div style={{ y: headingY, opacity }} className="max-w-4xl mb-12">
          <h1 className="text-[64px] md:text-[100px] font-black leading-[0.85] tracking-[-0.05em] mb-8 uppercase flex flex-wrap gap-x-4">
            {words.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.05, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-[20px] md:text-[24px] font-bold leading-tight max-w-lg text-black/60"
          >
            Klaar met gokken op content<br />die niets oplevert?
          </motion.p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start relative z-10">
          {stats.map((item, idx) => {
            // Different scroll speeds for cards
            const speed = 0.1 + (idx * 0.05);
            const cardY = useTransform(scrollYProgress, [0, 1], [0, -150 * (idx + 1)]);
            
            return (
              <motion.div
                key={idx}
                style={{ y: cardY }}
                initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? -5 : 5 }}
                animate={{ opacity: 1, y: idx % 2 === 0 ? 0 : 32, rotate: parseFloat(item.tilt.match(/-?\d+/)?.[0] || '0') }}
                transition={{ 
                  opacity: { delay: idx * 0.1, duration: 0.8 },
                  y: { delay: idx * 0.1, duration: 0.8 },
                  rotate: { delay: idx * 0.1, duration: 0.8 }
                }}
                className={`relative aspect-[3/4] rounded-[32px] overflow-hidden ${item.color || 'bg-gray-100'} shadow-2xl active:scale-95 transition-all cursor-pointer group`}
              >
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt="Feature" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="p-8 h-full flex flex-col justify-between text-white">
                    <span className="text-[64px] font-black leading-none tracking-tighter">
                      {item.value}
                    </span>
                    <div className="space-y-1">
                      <p className="text-[18px] font-bold leading-tight">{item.label}</p>
                      <p className="text-[12px] opacity-80">{item.sub}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-20"
        >
          <Magnetic>
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-brand-orange animate-bounce cursor-pointer hover:bg-black/5">
              <ChevronDown size={24} />
            </div>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
