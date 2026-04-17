import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, Flame } from 'lucide-react';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Expertises', href: '#expertises' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );
  
  const navPadding = useTransform(scrollY, [0, 100], ['24px', '16px']);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 pointer-events-none">
      <motion.div 
        style={{ padding: navPadding, scale: navScale }}
        className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto"
      >
        {/* Logo */}
        <Magnetic strength={0.2}>
          <a href="/" className="text-[24px] font-[900] tracking-tighter uppercase text-black flex items-center gap-1 active:scale-95 transition-transform">
            GetHyped
          </a>
        </Magnetic>

        {/* Desktop Navigation Pill */}
        <motion.div 
          style={{ backgroundColor: navBackground }}
          className="hidden md:flex items-center gap-2 backdrop-blur-md border border-black/5 rounded-full px-6 py-2.5 shadow-sm"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold text-black/60 hover:text-black px-4 py-1 transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Magnetic strength={0.3}>
            <button className="bg-[#E8A8FF] text-black px-6 py-2.5 rounded-full font-bold text-[14px] flex items-center gap-2 hover:shadow-lg transition-all group">
              Get Results 
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Flame size={16} fill="currentColor" />
              </motion.div>
            </button>
          </Magnetic>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Magnetic strength={0.5}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/90 backdrop-blur-md border border-black/5 p-3 rounded-full text-black shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </Magnetic>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ type: 'spring', damping: 25, stiffness: 100 }}
            className="fixed inset-0 bg-brand-bg z-[-1] flex items-center justify-center pointer-events-auto"
          >
            <div className="container-custom flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, y: "110%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      type: 'spring', 
                      damping: 15, 
                      stiffness: 100, 
                      delay: 0.1 * idx 
                    }}
                    onClick={() => setIsOpen(false)}
                    className="block text-[48px] md:text-[80px] font-black tracking-tighter hover:text-brand-pink transition-colors uppercase leading-none"
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Magnetic strength={0.3}>
                  <button className="bg-[#E8A8FF] text-black px-12 py-6 rounded-full font-black text-[24px] flex items-center gap-3 mt-12 shadow-xl hover:shadow-2xl active:scale-95 transition-all">
                    Get Results <Flame size={32} fill="currentColor" />
                  </button>
                </Magnetic>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
