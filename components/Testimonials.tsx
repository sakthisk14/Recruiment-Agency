
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Emily R.",
    role: "Engineering Director",
    content: "NexusHire's approach to talent acquisition is life-changing. The candidates they delivered helped us improve our velocity.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    pos: { top: '38%', left: '78%' },
    mobilePos: { top: '35%', left: '75%' }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Founder, VelocityAI",
    content: "We scaled our distributed team in weeks. Their EOR handling is flawless and allowed us to focus on our roadmap.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    pos: { top: '22%', left: '18%' },
    mobilePos: { top: '15%', left: '20%' }
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "CTO, CloudScale",
    content: "The infrastructure support was a total game changer for our expansion. Seamless, secure, and highly scalable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    pos: { top: '58%', left: '15%' },
    mobilePos: { top: '70%', left: '25%' }
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO, NeoBank",
    content: "Best decision we made this year. The talent network is truly top-tier and perfectly aligned with our culture.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    pos: { top: '18%', left: '52%' },
    mobilePos: { top: '12%', left: '70%' }
  },
  {
    id: 5,
    name: "Elena R.",
    role: "Head of HR",
    content: "Compliance and payroll handled with zero effort from our side. Truly a global partner we can trust.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    pos: { top: '48%', left: '92%' },
    mobilePos: { top: '85%', left: '80%' }
  },
  {
    id: 6,
    name: "Alex Kim",
    role: "VP Product",
    content: "Accelerated our R&D roadmap by months. The caliber of candidates is remarkable and culture-fit was spot on.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    pos: { top: '28%', left: '35%' },
    mobilePos: { top: '25%', left: '45%' }
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center bg-white overflow-hidden min-h-[900px] md:min-h-screen py-32"
    >
      
      {/* Background Ribbon */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <svg viewBox="0 0 1000 600" className="w-full h-full opacity-60">
          <path 
            id="testimonialPath" 
            d="M -200 450 Q 150 150 500 480 T 1150 480 T 1400 200" 
            fill="transparent" 
            stroke="#F97316" 
            strokeWidth={isMobile ? "40" : "90"} 
            strokeOpacity="0.4" 
            strokeLinecap="round"
          />
          <text className="text-[10px] md:text-[14px] font-black uppercase tracking-[0.2em] fill-white">
            <motion.textPath 
              href="#testimonialPath" 
              initial={{ startOffset: "100%" }}
              animate={{ startOffset: "-100%" }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              Discover how our partners have transformed their operations through our expertise • Scalable talent solutions for modern brands • Top 1% Global Engineering Hub • Seamless HR & Payroll Management • Built for the future of work • Discover how our partners have transformed their operations •
            </motion.textPath>
          </text>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24 relative z-[70]">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full border border-slate-100 text-[8px] font-black text-slate-400 mb-3 bg-white shadow-sm uppercase tracking-[0.3em]"
          >
            Endorsement
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Client <span className="text-nexus">Voice</span>
          </motion.h2>
          <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base max-w-sm mx-auto">
            Insights from leaders who have scaled their global delivery with our elite staffing solutions.
          </p>
        </div>

        {/* Profiles Area */}
        <div className="relative h-[550px] md:h-[60vh] w-full max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => {
            const isActive = i === activeIndex;
            const position = isMobile ? t.mobilePos : t.pos;
            
            return (
              <div
                key={t.id}
                className="absolute transition-all duration-700"
                style={{ 
                  top: position.top, 
                  left: position.left,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isActive ? 100 : 20 
                }}
              >
                <div className="relative flex flex-col items-center">
                  
                  {/* Avatar Container */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    onClick={() => setActiveIndex(i)}
                    className="relative cursor-pointer z-20"
                  >
                    {isActive && (
                      <div className="absolute inset-0 -m-4 md:-m-6 z-0">
                        <motion.div 
                          className="absolute inset-0 rounded-full border-[6px] border-white shadow-xl"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                        />
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-nexus/20 blur-xl -z-10"
                          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-500 ${isActive ? 'border-nexus scale-110 shadow-2xl' : 'border-white shadow-md grayscale hover:grayscale-0'}`}>
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  {/* Testimonial Bubble Card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                        exit={{ opacity: 0, y: 15, scale: 0.9, x: '-50%' }}
                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
                        className="absolute top-full left-1/2 mt-12 w-[300px] md:w-[440px] z-[110]"
                      >
                        <div className="bg-[#1F2937] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative text-white border border-white/10">
                          {/* Triangle Tip */}
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#1F2937] rotate-45 border-t border-l border-white/10" />
                          
                          <p className="text-sm md:text-lg font-medium leading-relaxed mb-6 italic text-slate-200">
                            "{t.content}"
                          </p>
                          
                          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                            <div>
                              <h4 className="font-black text-base md:text-xl text-white">{t.name}</h4>
                              <p className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] text-slate-400 mt-1">{t.role}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                              <span className="text-nexus font-black text-2xl leading-none">"</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Grid Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
    </section>
  );
};

export default Testimonials;
