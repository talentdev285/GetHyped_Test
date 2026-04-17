import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Youtube, Flame, MessageSquare } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Footer() {
  return (
    <footer className="bg-brand-bg-alt pt-32 relative overflow-hidden">
      <div className="container-custom pb-32">
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[90px] font-black leading-[0.9] tracking-tighter mb-16"
          >
            Let's Get Hyped!
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            <Magnetic strength={0.4}>
              <button className="flex items-center gap-3 bg-white border border-black/10 px-8 py-4 rounded-full font-bold shadow-sm hover:scale-105 transition-transform">
                Mail ons direct <MessageSquare size={18} fill="currentColor" />
              </button>
            </Magnetic>
            <Magnetic strength={0.4}>
              <button className="flex items-center gap-3 bg-brand-pink text-black px-8 py-4 rounded-full font-bold shadow-sm hover:scale-105 transition-transform">
                Get Results <Flame size={18} fill="currentColor" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Tilted Black Bar */}
      <div className="relative h-[600px] md:h-[400px] bg-black text-white transform -skew-y-2 origin-bottom md:origin-right md:-rotate-1 translate-y-12 pb-24 md:pb-0">
        <div className="absolute inset-0 transform skew-y-2 md:rotate-1 flex flex-col justify-center px-6 md:px-0">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start">
              {/* Logo & Social */}
              <div className="space-y-8">
                <Magnetic strength={0.2}>
                  <div className="text-[28px] font-black tracking-tighter uppercase whitespace-nowrap">
                    GetHyped
                  </div>
                </Magnetic>
                <div className="flex items-center gap-6">
                  <Magnetic strength={0.8}><a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><Linkedin size={20} /></a></Magnetic>
                  <Magnetic strength={0.8}><a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><Instagram size={20} /></a></Magnetic>
                  <Magnetic strength={0.8}><a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><Youtube size={20} /></a></Magnetic>
                </div>
              </div>

              {/* Nav Links */}
              <div className="md:col-span-1">
                <div className="flex flex-col gap-4 text-[14px] font-bold">
                  {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                    <div key={item}>
                      <Magnetic strength={0.2}>
                        <a 
                          href={`#${item.toLowerCase()}`} 
                          className="hover:text-brand-pink transition-colors w-fit group relative"
                        >
                          {item}
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                      </Magnetic>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-[12px] uppercase opacity-40 font-bold tracking-widest mb-2">Contact</h4>
                <Magnetic strength={0.3}>
                  <a href="mailto:info@gethyped.nl" className="font-bold block hover:text-brand-pink transition-colors">info@gethyped.nl</a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a href="tel:+31615337496" className="font-bold block hover:text-brand-pink transition-colors">+31 6 1533 7496</a>
                </Magnetic>
              </div>

              {/* Address Info */}
              <div className="space-y-2">
                <h4 className="text-[12px] uppercase opacity-40 font-bold tracking-widest mb-4">Adres</h4>
                <p className="font-bold">Beltruunstraat 6,<br />7141 AL Groenlo</p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] opacity-40 font-bold">
              <p>© 2025 Get Hyped</p>
              <div className="flex gap-8">
                <p>Design by Dylan</p>
                <a href="#">Privacyvoorwaarden</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
