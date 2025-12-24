
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Award } from 'lucide-react';

const CLIENT_LOGOS = [
  "https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg",
  "https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg",
  "https://www.vectorlogo.zone/logos/tesla/tesla-ar21.svg",
  "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg",
  "https://www.vectorlogo.zone/logos/apple/apple-ar21.svg",
  "https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg",
];

const STATS = [
  { icon: <Globe className="w-5 h-5" />, label: "Countries Covered", value: "150+" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "Compliance Rate", value: "100%" },
  { icon: <Zap className="w-5 h-5" />, label: "Avg. Fill Time", value: "14 Days" },
  { icon: <Award className="w-5 h-5" />, label: "Retention Rate", value: "98%" },
];

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-nexus mb-4"
          >
            Our Ecosystem
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto"
          >
            Powering <span className="text-nexus">Global Leaders</span> Across Every Timezone.
          </motion.h3>
        </div>

        {/* Marquee Section */}
        <div className="relative flex overflow-hidden py-12 mb-20 border-y border-slate-50">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt="Client Logo" 
                className="h-6 md:h-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 object-contain" 
              />
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6 text-nexus group-hover:bg-nexus group-hover:text-white transition-all">
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
