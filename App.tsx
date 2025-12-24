
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { TRUST_LOGOS } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax setup for Infrastructure section
  const infraRef = useRef(null);
  const { scrollYProgress: infraScrollProgress } = useScroll({
    target: infraRef,
    offset: ["start end", "end start"]
  });

  const infraBgY = useTransform(infraScrollProgress, [0, 1], ["0%", "20%"]);
  const infraFloatY = useTransform(infraScrollProgress, [0, 1], [0, -80]);
  const infraRotate = useTransform(infraScrollProgress, [0, 1], [0, -5]);

  return (
    <div className="min-h-screen bg-white selection:bg-nexus selection:text-white text-slate-900">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header />
      
      <main>
        <Hero />

        {/* Dynamic Partner Bar */}
        <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
          <div className="container mx-auto px-6">
            <p className="text-center text-slate-400 uppercase tracking-widest text-[9px] font-black mb-10">Trusted by Growth Engineering Teams Globally</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {TRUST_LOGOS.map((logo, i) => (
                <img key={i} src={logo} alt="Enterprise Partner" className="h-5 md:h-8 object-contain" />
              ))}
            </div>
          </div>
        </section>

        <Services />

        {/* Process is now the main vertical-scrolling-horizontal-content section */}
        <Process />

        <Clients />

        <Testimonials />
        
        {/* Feature Focus: Infrastructure */}
        <section id="infra" ref={infraRef} className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-12 h-12 bg-nexus/10 text-nexus rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight text-slate-900">Elite Infrastructure <br /><span className="text-nexus">Modernization.</span></h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                  Beyond talent, we provide the architecture for high-performance delivery. Our specialists deploy compliant, cloud-native foundations that scale as fast as your team does.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                  {['Multi-region redundancy', 'Automated CI/CD', 'Compliance-ready', '24/7 SRE monitoring'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                      <div className="w-6 h-6 rounded-full bg-nexus/10 flex items-center justify-center text-nexus">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-nexus transition-all shadow-xl shadow-slate-200">Request Audit</button>
              </motion.div>

              <motion.div 
                style={{ rotate: infraRotate }}
                className="relative"
              >
                <motion.div 
                  style={{ y: infraBgY }}
                  className="aspect-square bg-nexus/5 rounded-full blur-[100px] absolute inset-0 -z-10" 
                />
                
                <div className="bg-white p-3 rounded-[4rem] border border-slate-100 shadow-2xl relative z-10 overflow-hidden">
                  <div className="relative aspect-[3/2] rounded-[3.5rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
                      alt="Modern Cloud Infrastructure Architecture" 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>

                {/* Parallax Floating Stats Card */}
                <motion.div 
                  style={{ y: infraFloatY }}
                  className="absolute -top-10 -right-8 bg-nexus px-10 py-8 rounded-[2.5rem] shadow-2xl z-20 border-4 border-white"
                >
                  <p className="text-white font-black text-4xl mb-1">99.9%</p>
                  <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">Uptime SLA Guaranteed</p>
                </motion.div>

                {/* Second Floating Health Monitoring Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute bottom-16 -left-12 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Node Health</p>
                  </div>
                  <div className="flex gap-2 items-end">
                    {[15, 35, 20, 45, 30, 50, 25].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: h }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="w-2 bg-nexus rounded-full" 
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <Contact />

        {/* Final CTA */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-nexus p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] text-center relative overflow-hidden group shadow-2xl shadow-nexus/30"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-black mb-10 text-white max-w-4xl mx-auto leading-tight tracking-tighter">Ready to hire your next <br /> world-class team?</h2>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <button className="bg-white text-nexus px-8 py-4 rounded-[1.25rem] font-black text-sm md:text-base hover:scale-105 transition-transform shadow-xl">Contact Sales</button>
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-[1.25rem] font-black text-sm md:text-base hover:bg-black transition-all">Start Onboarding</button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
