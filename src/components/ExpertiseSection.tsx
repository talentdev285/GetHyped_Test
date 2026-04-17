import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';

interface ExpertiseProps {
  number: string;
  label: string;
  title: string;
  description: string;
  bgColor: string;
  image: string;
  isDark?: boolean;
  btnText?: string;
}

export default function ExpertiseSection({ 
  number, 
  label,
  title, 
  description, 
  bgColor, 
  image,
  isDark = false,
  btnText = "Lees meer"
}: ExpertiseProps) {
  return (
    <section className="py-2">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`${bgColor} ${isDark ? 'text-black' : 'text-black'} expertise-card-radius p-8 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 group shadow-xl hover:shadow-2xl transition-all duration-700`}
        >
          {/* Top Right Number */}
          <div className="absolute top-10 right-10 md:top-20 md:right-20">
            <span className="text-[60px] md:text-[140px] font-black opacity-[0.06] leading-none tracking-tighter group-hover:opacity-[0.12] transition-opacity duration-700">
              {number}
            </span>
          </div>

          {/* Left Content */}
          <div className="flex-1 z-10 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full border border-black/10 text-[12px] font-bold uppercase tracking-wider bg-white/50 backdrop-blur-sm"
            >
              {label}
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[40px] md:text-[72px] font-black leading-[0.9] tracking-tighter"
              >
                {title}
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[16px] md:text-[19px] font-semibold leading-relaxed max-w-sm text-black/70"
            >
              {description}
            </motion.p>

            <button className="flex items-center gap-4 bg-transparent group-hover:gap-6 transition-all font-bold relative group/btn">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white transition-all group-hover:bg-brand-primary group-hover:scale-110">
                <MoveRight size={20} />
              </div>
              <span className="relative">
                {btnText}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 md:flex justify-end z-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-[85%] aspect-[4/5] md:aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl relative group/img cursor-none"
            >
              <motion.img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
