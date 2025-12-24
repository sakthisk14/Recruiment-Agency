
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Plus, CheckCircle2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <svg width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 1, 2, 3].map((i) => (
            <path 
              key={i}
              d={`M10 ${20 + i * 20}C40 ${10 + i * 20} 70 ${30 + i * 20} 100 ${20 + i * 20}C130 ${10 + i * 20} 160 ${30 + i * 20} 190 ${20 + i * 20}C220 ${10 + i * 20} 250 ${30 + i * 20} 280 ${20 + i * 20}`} 
              stroke="#F97316" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nexus/5 text-nexus text-xs font-black uppercase tracking-widest mb-8 border border-nexus/10"
            >
              <Star size={14} fill="currentColor" /> The Next Gen Recruitment Platform
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-black leading-tight text-slate-900 mb-8 tracking-tighter"
            >
              Your <span className="text-nexus">Dream Team</span> is <br /> Ready to Scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-slate-500 mb-10 max-w-lg leading-relaxed font-medium"
            >
              NexusHire bridges the gap between ambitious companies and the world's top 1% talent. We don't just find employees; we architect your global workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button className="bg-nexus text-white px-10 py-5 rounded-2xl font-black text-lg shadow-nexus-glow hover:scale-105 transition-all flex items-center justify-center gap-3 group">
                Find Talent Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-slate-50 text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all">
                Learn our Process
              </button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="mt-12 flex items-center gap-8"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">500+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Hires</span>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">99%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Success Rate</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full aspect-[1.4/1] max-w-md mx-auto"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-slate-50 rounded-[3rem] md:rounded-[4rem] -rotate-3 z-0" />
              <div className="absolute inset-0 border-2 border-nexus/10 rounded-[3rem] md:rounded-[4rem] rotate-2 z-0" />
              
              <div className="relative z-10 bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl h-full border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Team Collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Status Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -top-6 -left-6 md:-left-10 z-20 bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl flex items-center gap-3 md:gap-4 border border-slate-50"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-nexus/10 flex items-center justify-center text-nexus">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</p>
                  <p className="font-black text-slate-900 text-xs md:text-sm">Pre-vetted Expert</p>
                </div>
              </motion.div>

              {/* Applicants Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-6 -right-6 md:-right-12 z-20 bg-slate-900 text-white p-5 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl min-w-[180px] md:min-w-[200px]"
              >
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-3 md:mb-4 text-slate-400">Recent Placements</p>
                <div className="flex items-center -space-x-3 mb-4">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
                  ].map((url, i) => (
                    <img key={i} src={`${url}?auto=format&fit=crop&q=80&w=150`} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-slate-900 object-cover" />
                  ))}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-nexus flex items-center justify-center border-2 border-slate-900 text-white font-black text-[10px]">
                    <Plus size={12} />
                  </div>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-full bg-nexus" 
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Background Svg Decor */}
            <div className="absolute -bottom-10 right-[10%] opacity-20 pointer-events-none z-0">
               <svg width="300" height="150" viewBox="0 0 300 150" fill="none">
                  <path d="M10 140C100 80 200 80 290 140" stroke="#E74C3C" strokeWidth="2" />
               </svg>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </section>
  );
};

export default Hero;
