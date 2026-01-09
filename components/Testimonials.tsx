
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Emily R.",
    role: "Graphic Designer",
    content: "Joining this community has been life-changing. The instructors are incredibly knowledgeable, and the classes have helped me find inner peace and improve my flexibility.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    pos: { top: '45%', left: '75%' },
    mobilePos: { top: '35%', left: '75%' }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Full Stack Developer",
    content: "We scaled our distributed team in weeks. SharpTip's approach to global talent is truly the best in the industry.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    pos: { top: '25%', left: '15%' },
    mobilePos: { top: '15%', left: '20%' }
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "CTO, CloudScale",
    content: "The infrastructure support was a total game changer for our expansion. Seamless, secure, and highly scalable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    pos: { top: '70%', left: '20%' },
    mobilePos: { top: '75%', left: '25%' }
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO, NeoBank",
    content: "Best decision we made this year. The talent network is truly top-tier and perfectly aligned with our culture.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    pos: { top: '20%', left: '45%' },
    mobilePos: { top: '12%', left: '70%' }
  },
  {
    id: 5,
    name: "Elena R.",
    role: "Head of Talent",
    content: "Compliance and payroll handled with zero effort from our side. Truly a global partner we can trust.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    pos: { top: '25%', left: '65%' },
    mobilePos: { top: '85%', left: '80%' }
  },
  {
    id: 6,
    name: "Alex Kim",
    role: "Operations Manager",
    content: "Accelerated our R&D roadmap by months. The caliber of candidates is remarkable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    pos: { top: '55%', left: '10%' },
    mobilePos: { top: '25%', left: '45%' }
  },
  {
    id: 7,
    name: "Jessica Wu",
    role: "Director of HR",
    content: "The Human-Led Filter for Talent ensures we only see the very best. It saves us dozens of hours every month.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    pos: { top: '45%', left: '90%' },
    mobilePos: { top: '90%', left: '30%' }
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      id="testimonials" 
      className="relative flex flex-col items-center justify-center bg-white overflow-hidden min-h-[800px] md:min-h-screen py-24"
    >
      
      {/* Background Wavy Ribbon like in the image */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
        <svg viewBox="0 0 1000 600" className="w-[120%] h-full opacity-30">
          <path 
            id="testimonialPath" 
            d="M -100 200 Q 150 500 500 300 T 1100 500" 
            fill="transparent" 
            stroke="#ff8260" 
            strokeWidth={isMobile ? "40" : "80"} 
            strokeLinecap="round"
          />
          <text className="text-[12px] md:text-[16px] font-bold uppercase tracking-[0.1em] fill-white">
            <motion.textPath 
              href="#testimonialPath" 
              initial={{ startOffset: "100%" }}
              animate={{ startOffset: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              Discover how our partners have transformed their lives through our classes. Read their stories of growth and success. • Discover how our partners have transformed their lives through our classes • 
            </motion.textPath>
          </text>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Section Heading matching the reference layout */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20 relative z-[70]">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-slate-200 text-[10px] font-bold text-slate-500 mb-4 bg-white shadow-sm uppercase tracking-widest"
          >
            Testimonial
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Partner Testimonials
          </motion.h2>
          <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base max-w-lg mx-auto">
            See how our members have reduced stress and enhanced well-being with our support and guidance.
          </p>
        </div>

        {/* Scattered Profiles Area */}
        <div className="relative h-[450px] md:h-[55vh] w-full max-w-6xl mx-auto">
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
                  
                  {/* Avatar Container with glowing rings for active item */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setActiveIndex(i)}
                    className="relative cursor-pointer z-20"
                  >
                    {isActive && (
                      <div className="absolute inset-0 -m-3 md:-m-4 z-0">
                        <motion.div 
                          className="absolute inset-0 rounded-full border-[2px] border-nexus/20"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1.2 }}
                        />
                        <motion.div 
                          className="absolute inset-0 rounded-full border-[1px] border-nexus/10"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1.4 }}
                        />
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-500 ${isActive ? 'border-nexus shadow-xl ring-8 ring-nexus/5' : 'border-white shadow-md'}`}>
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  {/* Dark Tooltip Bubble matching reference image */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                        exit={{ opacity: 0, y: 10, scale: 0.9, x: '-50%' }}
                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
                        className="absolute top-full left-1/2 mt-8 w-[280px] md:w-[350px] z-[110]"
                      >
                        <div className="bg-[#2c333a] p-6 md:p-8 rounded-[1.5rem] shadow-2xl relative text-white border border-white/5">
                          {/* Triangle Tip */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2c333a] rotate-45" />
                          
                          <p className="text-xs md:text-sm font-medium leading-relaxed mb-6 text-slate-100">
                            "{t.content}"
                          </p>
                          
                          <div className="flex flex-col">
                            <h4 className="font-black text-sm md:text-base text-white">{t.name}</h4>
                            <p className="text-[10px] md:text-[11px] font-bold text-slate-400 mt-0.5">{t.role}</p>
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
    </section>
  );
};

export default Testimonials;
