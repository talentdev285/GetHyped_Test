import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setComplete(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ clipPath: 'inset(0 0 0 0)' }}
          exit={{ clipPath: 'inset(100% 0 0 0)' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] bg-black text-white flex flex-col justify-end p-12 md:p-24"
        >
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[40px] md:text-[80px] font-black tracking-tighter uppercase leading-none"
            >
              GetHyped.
            </motion.div>
            
            <div className="flex items-center justify-between border-t border-white/20 pt-4">
              <span className="text-[14px] font-bold opacity-60 uppercase tracking-widest">Loading Experience</span>
              <span className="text-[24px] md:text-[40px] font-black font-mono">
                {percent}%
              </span>
            </div>
          </div>

          {/* Progress Bar Background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/10 overflow-hidden">
            <motion.div 
              className="h-full bg-brand-pink"
              style={{ width: `${percent}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
