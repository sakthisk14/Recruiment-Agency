
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Plus, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Video, 
  Mail, 
  Heart,
  MessageSquare
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-10 overflow-hidden bg-[#f0f7ff]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none opacity-40">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="600" cy="400" r="300" stroke="#e74c3c" strokeWidth="0.5" strokeDasharray="10 10" />
          <circle cx="650" cy="450" r="400" stroke="#e74c3c" strokeWidth="0.5" />
          <path d="M400 100 Q 600 300 800 100" stroke="#e74c3c" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nexus/5 text-nexus text-[9px] font-black uppercase tracking-widest mb-4 border border-nexus/10"
            >
              <Star size={12} fill="currentColor" /> Elite India Engineering Hubs
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-[2.5rem] font-black leading-tight text-slate-900 mb-6 tracking-tighter"
            >
              Bypass the Pain of <br /> <span className="text-nexus underline decoration-4 underline-offset-4">Global Team Scaling.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-slate-500 mb-8 max-w-md leading-relaxed font-medium"
            >
              Building your elite Offshore Development Center (ODC) with SharpTip. We set up high-performing teams in India designed for speed, clarity, and accountability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-nexus text-white px-6 py-3 rounded-xl font-black text-sm shadow-nexus-glow hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                Setup Your Hub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-black text-sm hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
                <Video size={18} className="text-nexus" /> Watch Demo
              </button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="mt-8 flex items-center gap-6"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">1.5k+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Placements</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">100%</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Compliance</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="relative flex justify-center items-center h-[350px] md:h-[450px]">
            
            {/* Background Soft Blobs */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] bg-white rounded-full blur-[70px] opacity-70 z-0" 
            />

            {/* Central Professional Character */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full max-w-[240px] md:max-w-[300px]"
            >
              <div className="relative overflow-hidden rounded-[3.5rem] md:rounded-[4.5rem] drop-shadow-[0_40px_40px_rgba(0,0,0,0.12)]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="SharpTip Professional" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] -left-6 md:-left-8 p-2 bg-white rounded-full shadow-2xl z-20 border border-slate-50"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-50 rounded-full flex items-center justify-center text-nexus">
                  <Phone size={14} />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[35%] -right-6 md:-right-8 p-2 bg-white rounded-full shadow-2xl z-20 border border-slate-50"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-50 rounded-full flex items-center justify-center text-nexus">
                  <Video size={14} />
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [-4, 4, -4] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[25%] -left-8 md:-left-12 p-2 bg-white rounded-full shadow-2xl z-20 border border-slate-50"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-900 rounded-full flex items-center justify-center text-white">
                  <Mail size={14} />
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-[8%] right-0 md:-right-4 bg-white p-3 md:p-5 rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-20 flex flex-col items-center border border-slate-50"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-nexus/10 rounded-lg flex items-center justify-center text-nexus mb-1.5">
                  <Heart size={14} fill="currentColor" />
                </div>
                <p className="text-lg md:text-xl font-black text-slate-900 leading-none mb-1">1.5k+</p>
                <p className="text-[7px] font-black uppercase tracking-widest text-slate-400">Placements</p>
              </motion.div>

              {/* Small Review Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-[68%] -left-4 md:-left-6 bg-white p-2.5 md:p-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] z-20 flex items-center gap-2 border border-slate-50"
              >
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" 
                  alt="Reviewer" 
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover shadow-sm" 
                />
                <div>
                  <p className="text-[9px] font-black text-slate-900">Mh John</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={6} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Chat Bubble Style Decor */}
              <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute top-[2%] right-[12%] bg-nexus p-2 rounded-lg shadow-xl text-white z-20"
              >
                <MessageSquare size={14} />
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </section>
  );
};

export default Hero;
