
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight, Phone, CheckCircle2, Shield, Zap, Globe } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceLayoutA: React.FC<{ service: ServiceCardProps; index: number }> = ({ service, index }) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 relative"
      >
        <div className="relative w-4/5 ml-auto lg:ml-0 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute -bottom-10 -left-6 md:-left-10 w-3/5 aspect-square bg-white p-2 rounded-[2rem] shadow-2xl z-20 border-2 border-white"
        >
          <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
            <img src={service.secondaryImage} alt="Secondary View" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2 rounded-xl flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: service.color }}>
                <Phone size={14} />
              </div>
              <div>
                <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Contact Us</p>
                <p className="text-[10px] font-black text-slate-900 leading-tight">Expert Strategy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <ServiceContent service={service} />
    </div>
  );
};

const ServiceLayoutB: React.FC<{ service: ServiceCardProps; index: number }> = ({ service, index }) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 grid grid-cols-12 gap-3"
      >
        <div className="col-span-8 rounded-[2.5rem] overflow-hidden shadow-xl aspect-square border-4 border-white bg-slate-50">
           <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="col-span-4 flex flex-col gap-3 mt-8">
           <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white bg-slate-100">
             <img src={service.secondaryImage} alt="Detail" className="w-full h-full object-cover grayscale" />
           </div>
           <div className="flex-1 rounded-[1.5rem] flex flex-col items-center justify-center text-white p-4 text-center" style={{ backgroundColor: service.color }}>
              <Globe size={24} className="mb-2 opacity-50" />
              <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Global Access</p>
           </div>
        </div>
      </motion.div>
      <ServiceContent service={service} />
    </div>
  );
};

const ServiceLayoutC: React.FC<{ service: ServiceCardProps; index: number }> = ({ service, index }) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 relative flex justify-center py-10"
      >
        <div className="relative w-3/4 aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl z-10 border-2 border-slate-100">
           <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
        </div>
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white p-6 rounded-[2rem] shadow-2xl z-20 border border-slate-50 min-w-[200px]"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 text-nexus">
            <Shield size={20} />
          </div>
          <h4 className="text-base font-black text-slate-900 mb-1">Verified Hub</h4>
          <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Validated by our local experts in 12+ regions.</p>
        </motion.div>
      </motion.div>
      <ServiceContent service={service} />
    </div>
  );
};

const ServiceLayoutD: React.FC<{ service: ServiceCardProps; index: number }> = ({ service, index }) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 relative h-[400px]"
      >
        <div className="absolute top-0 right-8 w-2/3 h-2/3 bg-slate-100 rounded-full blur-[60px] opacity-50" />
        <div className="absolute top-8 left-8 w-3/4 h-3/4 bg-white shadow-2xl rounded-[3rem] overflow-hidden z-10 border-4 border-slate-50">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-0 right-0 w-3/5 h-1/2 bg-slate-900 rounded-[2.5rem] overflow-hidden z-20 shadow-2xl border-4 border-white"
        >
          <img src={service.secondaryImage} alt="Details" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
             <Zap size={20} className="mb-3 text-nexus" />
             <p className="text-lg font-black leading-tight">Zero Friction Scaling.</p>
          </div>
        </motion.div>
      </motion.div>
      <ServiceContent service={service} />
    </div>
  );
};

const ServiceContent: React.FC<{ service: ServiceCardProps }> = ({ service }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2"
    >
      <div className="mb-8">
        <span className="inline-block text-[9px] font-black tracking-[0.3em] uppercase mb-3 px-3 py-1 rounded-full bg-slate-50 border border-slate-100" style={{ color: service.color }}>
          SharpTip Strategic Pillar
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          {service.title}
        </h2>
        <p className="text-base text-slate-500 font-medium leading-relaxed max-w-xl">
          {service.description}
        </p>
      </div>

      <div className="space-y-6 mb-10">
        {service.features?.map((feature, fIdx) => (
          <div key={fIdx} className="flex gap-4 group">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
              <div style={{ color: service.color }}>
                <CheckCircle2 size={20} />
              </div>
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900 mb-1">{feature}</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-md">
                {service.featureDescriptions?.[fIdx]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <motion.button 
        whileHover={{ x: 8 }}
        className="inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.2em] group p-1"
        style={{ color: service.color }}
      >
        Explore Service Blueprint <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const renderLayout = (service: ServiceCardProps, index: number) => {
    const layoutIndex = index % 4;
    switch(layoutIndex) {
      case 0: return <ServiceLayoutA key={index} service={service} index={index} />;
      case 1: return <ServiceLayoutB key={index} service={service} index={index} />;
      case 2: return <ServiceLayoutC key={index} service={service} index={index} />;
      case 3: return <ServiceLayoutD key={index} service={service} index={index} />;
      default: return <ServiceLayoutA key={index} service={service} index={index} />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-24">
           <h2 className="text-[10px] font-black tracking-[0.4em] text-nexus uppercase mb-4">Our Operations</h2>
           <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6">End-to-end <br /><span className="text-slate-400">Hub Excellence.</span></h3>
           <p className="text-base text-slate-500 font-medium max-w-xl leading-relaxed">
             From raw talent acquisition to complex global infrastructure, we provide the foundational layers for your global engineering dominance.
           </p>
        </div>
        
        {SERVICES.map((service, idx) => renderLayout(service, idx))}
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/30 -z-10 rounded-l-[5rem] pointer-events-none" />
    </section>
  );
};

export default Services;
