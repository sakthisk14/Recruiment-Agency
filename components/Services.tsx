
import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1.5 rounded-full bg-nexus/5 text-nexus text-[9px] font-black uppercase tracking-[0.4em] mb-6 border border-nexus/10"
          >
            Core Competencies
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8"
          >
            End-to-End <span className="text-nexus">Talent</span> & <br /> 
            <span className="text-slate-400">Compliance Logic.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-base md:text-lg text-slate-500 font-medium max-w-xl leading-relaxed"
          >
            NexusHire eliminates the friction of international expansion through elite recruitment and automated HR infrastructure, ensuring your global team is compliant from day zero.
          </motion.p>
        </div>

        {/* Service Stack */}
        <div className="space-y-24 md:space-y-40">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-1/2 flex flex-col justify-center"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] flex items-center justify-center text-white shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">{service.title}</h3>
                </div>

                <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features?.map((feature, fIdx) => (
                    <motion.div 
                      key={fIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: fIdx * 0.1 }}
                      className="flex items-center gap-3 text-slate-800 font-bold bg-slate-50/50 p-3 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 size={16} style={{ color: service.color }} />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 font-black text-[10px] md:text-xs uppercase tracking-[0.25em] group w-fit"
                  style={{ color: service.color }}
                >
                  Explore Solution <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Image Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative"
              >
                {/* Background Blobs */}
                <div 
                  className="absolute inset-0 blur-[80px] opacity-10 -z-10 rounded-full scale-90"
                  style={{ backgroundColor: service.color }}
                />
                
                {/* Main Image Frame */}
                <div className="relative group">
                  <div className="absolute -inset-3 bg-slate-50 rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-700 ease-out border border-slate-100" />
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white z-10">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    />
                    
                    {/* Visual Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-40" />
                    
                    {/* Floating Data Badge */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="absolute top-6 right-6 bg-white/95 backdrop-blur-lg p-4 rounded-[1.5rem] shadow-xl border border-white z-20 hidden md:block"
                    >
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Performance</p>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-black text-slate-900 leading-none">98.2%</span>
                        <span className="text-nexus font-bold text-[10px]">↑</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none z-0" 
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </section>
  );
};

export default Services;
