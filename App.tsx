
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

  const infraBgY = useTransform(infraScrollProgress, [0, 1], ["0%", "15%"]);
  const infraFloatY = useTransform(infraScrollProgress, [0, 1], [0, -50]);
  const infraRotate = useTransform(infraScrollProgress, [0, 1], [0, -3]);

  return (
    <div className="min-h-screen bg-white selection:bg-nexus selection:text-white text-slate-900">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header />
      
      <main>
        <Hero />

        {/* Dynamic Partner Bar */}
        <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
          <div className="container mx-auto px-6">
            <p className="text-center text-slate-400 uppercase tracking-widest text-[8px] font-black mb-8">Trusted by Growth Engineering Teams Globally</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {TRUST_LOGOS.map((logo, i) => (
                <img key={i} src={logo} alt="Enterprise Partner" className="h-4 md:h-6 object-contain" />
              ))}
            </div>
          </div>
        </section>

        <Services />

        <Process />

        <Clients />

        <Testimonials />
        
        {/* Feature Focus: Infrastructure */}
        <section id="infra" ref={infraRef} className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-10 h-10 bg-nexus/10 text-nexus rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h2 className="text-xl md:text-3xl font-black mb-6 leading-tight text-slate-900">Cloud Infrastructure <br /><span className="text-nexus">Modernization.</span></h2>
                <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
                  Beyond talent, we provide the architecture for high-performance delivery. Our specialists deploy compliant foundations that scale as fast as you do.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {['Cloud Foundations', 'Automated CI/CD', 'Global Compliance', 'DevOps Excellence'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-slate-700 font-bold text-sm">
                      <div className="w-5 h-5 rounded-full bg-nexus/10 flex items-center justify-center text-nexus">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-black text-sm hover:bg-nexus transition-all shadow-xl">Request Audit</button>
              </motion.div>

              <motion.div 
                style={{ rotate: infraRotate }}
                className="relative"
              >
                <motion.div 
                  style={{ y: infraBgY }}
                  className="aspect-square bg-nexus/5 rounded-full blur-[80px] absolute inset-0 -z-10" 
                />
                
                <div className="bg-white p-2 rounded-[3rem] border border-slate-100 shadow-2xl relative z-10 overflow-hidden">
                  <div className="relative aspect-[3/2] rounded-[2.5rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
                      alt="Modern Cloud Infrastructure" 
                      className="w-full h-full object-cover grayscale-[20%]"
                    />
                  </div>
                </div>

                <motion.div 
                  style={{ y: infraFloatY }}
                  className="absolute -top-8 -right-4 bg-nexus px-6 py-5 rounded-[1.5rem] shadow-2xl z-20 border-2 border-white"
                >
                  <p className="text-white font-black text-2xl mb-0.5">99.9%</p>
                  <p className="text-white/80 text-[8px] font-black uppercase tracking-widest">Uptime SLA</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <Contact />

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-nexus p-8 md:p-12 rounded-[2.5rem] text-center relative overflow-hidden group shadow-2xl shadow-nexus/30"
            >
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-black mb-6 text-white max-w-xl mx-auto leading-tight tracking-tight uppercase">Ready to hire your next <br /> world-class team?</h2>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-white text-nexus px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest">Contact Sales</button>
                  <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest">Start Onboarding</button>
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
