
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
  { icon: <Globe className="w-4 h-4" />, label: "Countries Covered", value: "150+" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "Compliance Rate", value: "100%" },
  { icon: <Zap className="w-4 h-4" />, label: "Avg. Fill Time", value: "14 Days" },
  { icon: <Award className="w-4 h-4" />, label: "Retention Rate", value: "98%" },
];

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[9px] font-black tracking-[0.4em] uppercase text-nexus mb-3"
          >
            Our Ecosystem
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight max-w-xl mx-auto"
          >
            Powering <span className="text-nexus">Global Leaders</span> Across Every Timezone.
          </motion.h3>
        </div>

        {/* Marquee Section */}
        <div className="relative flex overflow-hidden py-8 mb-16 border-y border-slate-50">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt="Client Logo" 
                className="h-5 md:h-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 object-contain" 
              />
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 text-center group hover:bg-white hover:shadow-lg transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4 text-nexus group-hover:bg-nexus group-hover:text-white transition-all">
                {stat.icon}
              </div>
              <p className="text-2xl font-black text-slate-900 mb-0.5">{stat.value}</p>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
