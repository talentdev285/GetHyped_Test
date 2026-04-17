import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import BrandTicker from './components/BrandTicker';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Magnetic from './components/Magnetic';
import Preloader from './components/Preloader';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, MoveRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary selection:text-white">
      <Preloader />
      <CustomCursor />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <Hero />

        {/* Intro Section */}
        <section className="py-24 md:py-32 bg-brand-bg relative">
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[32px] md:text-[48px] font-black leading-[1.1] max-w-4xl"
                >
                  Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                </motion.h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mt-20 items-center">
              <div className="lg:col-span-3">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-[32px] overflow-hidden aspect-square shadow-xl max-w-[280px]"
                >
                  <img 
                    src="https://picsum.photos/seed/intro-person/600/600" 
                    alt="Creative" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <div className="lg:col-span-6 lg:ml-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <p className="text-[16px] md:text-[18px] font-semibold leading-relaxed max-w-md">
                    We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                  </p>
                  <div className="flex items-center justify-between">
                    <Magnetic strength={0.2}>
                      <button className="flex items-center gap-4 bg-white border border-black/10 px-6 py-3 rounded-full font-bold group hover:bg-black hover:text-white transition-all shadow-sm">
                        Leer ons kennen
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                          <MoveRight size={16} />
                        </div>
                      </button>
                    </Magnetic>
                    
                    <motion.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Magnetic>
                        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-brand-orange cursor-pointer hover:bg-black/5">
                          <ArrowDown size={18} />
                        </div>
                      </Magnetic>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertises - Stacking Behavior */}
        <div id="expertises" className="bg-brand-bg-alt pb-32">
          <div className="space-y-0 relative">
            <div className="sticky top-[100px]">
              <ExpertiseSection 
                number="01"
                label="Expertise"
                title="Social strategy"
                description="Het fundament voor succes op social media."
                bgColor="bg-white"
                image="https://picsum.photos/seed/strategy/800/600"
              />
            </div>
            <div className="sticky top-[120px]">
              <ExpertiseSection 
                number="02"
                label="Expertise"
                title="Content creation"
                description="Content die opvalt en raakt. We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Snel en energiek. Altijd met het doel voor ogen."
                bgColor="bg-brand-pink"
                image="https://picsum.photos/seed/content/800/1000"
                isDark
                btnText="Meer over content creatie"
              />
            </div>
            <div className="sticky top-[140px]">
              <ExpertiseSection 
                number="03"
                label="Expertise"
                title="Activation"
                description="Zichtbaar waar en wanneer het telt. De juiste content verdient het om gezien te worden."
                bgColor="bg-brand-green"
                image="https://picsum.photos/seed/activation/800/1000"
                isDark
              />
            </div>
            <div className="sticky top-[160px]">
              <ExpertiseSection 
                number="04"
                label="Expertise"
                title="Data"
                description="Inzichten die impact maken. We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij."
                bgColor="bg-brand-primary"
                image="https://picsum.photos/seed/data/800/1000"
                isDark
                btnText="Meer over data"
              />
            </div>
          </div>
        </div>

        {/* Content Section (Work) */}
        <section id="work" className="py-24 md:py-32 bg-brand-bg">
          <div className="container-custom">
            <div className="max-w-xl mb-16">
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[48px] md:text-[80px] font-black leading-none mb-8 uppercase tracking-tighter"
                >
                  Content<br />dat scoort.
                </motion.h2>
              </div>
              <p className="text-[18px] md:text-[20px] font-semibold mb-10 max-w-sm text-black/60">
                Wij vertellen jouw verhaal. Op een manier die écht past bij jouw merk. Met creatieve content die werkt en het verschil maakt.
              </p>
              <Magnetic strength={0.2}>
                <button className="flex items-center gap-4 bg-white border border-black/10 px-8 py-4 rounded-full font-bold group hover:bg-black hover:text-white transition-all shadow-lg active:scale-95">
                  Bekijk al ons werk
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <MoveRight size={16} />
                  </div>
                </button>
              </Magnetic>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Van nul naar vol, binnen 3 weken', tag: 'Bulit', color: 'bg-brand-orange', img: 'https://picsum.photos/seed/work1/600/800' },
                { title: 'Zacht in smaak, sterk in beeld', tag: 'Roasta', color: 'bg-brand-primary', img: 'https://picsum.photos/seed/work2/600/800' },
                { title: 'Content die écht smaakt (en raakt)', tag: 'Loco', color: 'bg-brand-green', img: 'https://picsum.photos/seed/work3/600/800' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="relative group cursor-none"
                >
                  <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-700">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    
                    <div className="absolute inset-x-4 bottom-4 p-8 rounded-[32px] bg-white shadow-2xl backdrop-blur-sm border border-black/5 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-4">
                          <h3 className="text-[20px] font-black leading-tight group-hover:text-brand-primary transition-colors">{item.title}</h3>
                          <span className={`inline-block px-4 py-1.5 rounded-full text-white text-[12px] font-bold ${item.color}`}>
                            {item.tag}
                          </span>
                        </div>
                        <div className="min-w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all transform group-hover:rotate-45">
                          <MoveRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BrandTicker />
      </motion.main>

      <Footer />
    </div>
  );
}
