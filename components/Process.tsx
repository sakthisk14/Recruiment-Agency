
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Target, 
  Users, 
  Building2, 
  Cloud, 
  Code2, 
  Handshake,
  Sparkles
} from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Understanding Needs",
    label: "Discovery",
    phase: "Phase 01",
    desc: "We start by deeply understanding your business goals, team structure, and technical requirements to ensure the right strategy."
  },
  {
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Elite Recruitment",
    label: "Recruitment",
    phase: "Phase 02",
    desc: "Our expert recruiters manually screen and shortlist skilled professionals who match both technical and cultural requirements."
  },
  {
    icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />,
    title: "HR & EOR Solutions",
    label: "Compliance",
    phase: "Phase 03",
    desc: "We handle end-to-end payroll, compliance, and contracts through our EOR services, so you can focus on pure growth."
  },
  {
    icon: <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Cloud Infrastructure",
    label: "Architecture",
    phase: "Phase 04",
    desc: "We support your business with scalable infrastructure and cloud solutions, ensuring secure and high-performance environments."
  },
  {
    icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Dev Execution",
    label: "Execution",
    phase: "Phase 05",
    desc: "From frontend to backend, our development support helps your teams build and scale applications with maximum efficiency."
  },
  {
    icon: <Handshake className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Growth Partnership",
    label: "Success",
    phase: "Phase 06",
    desc: "We continuously support and optimize our services as your business scales globally, ensuring long-term success."
  }
];

const Process: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  /**
   * Adjust the horizontal translation to stop exactly when the last card is centered.
   * Reducing the percentage to ensure it doesn't scroll into a "dead zone".
   * With 6 cards and the current gaps, ~72-75% is typically the "center point" for the last card.
   */
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  
  const progressLine = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.012, 0.012, 0]);

  return (
    <section ref={targetRef} id="eor" className="relative h-[450vh] bg-white">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Section Title - Anchored Top */}
        <div className="absolute top-[10vh] left-6 md:left-24 z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-nexus/5 text-nexus text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-3 border border-nexus/10"
          >
            Workflow Blueprint
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight"
          >
            The <span className="text-nexus">Nexus</span> Strategy.
          </motion.h2>
        </div>

        {/* Deep Background Decor */}
        <motion.div 
          style={{ 
            opacity: bgOpacity,
            x: useTransform(scrollYProgress, [0, 1], ["2%", "-8%"])
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        >
           <span className="text-[20vw] font-black text-slate-900 whitespace-nowrap leading-none tracking-tighter uppercase">
             Nexus Journey Nexus Journey
           </span>
        </motion.div>

        {/* Horizontal Scroll Content - Centered vertically in viewport */}
        <div className="relative w-full flex items-center h-1/2">
          
          <motion.div style={{ x }} className="flex items-center px-[35vw] relative z-30">
            {/* Inner Content Group */}
            <div className="flex gap-12 md:gap-24 items-center relative">
              
              {/* Static Track Line - Starts exactly at 1st card center, ends at last card center */}
              <div className="absolute top-1/2 left-[120px] md:left-[170px] right-[120px] md:right-[170px] h-[1px] bg-slate-100 z-10 -translate-y-1/2" />
              
              {/* Animated Progress Line - Perfectly synchronized with cards */}
              <motion.div 
                style={{ scaleX: progressLine, originX: 0 }}
                className="absolute top-1/2 left-[120px] md:left-[170px] right-[120px] md:right-[170px] h-[3px] bg-nexus/80 shadow-[0_0_15px_rgba(231,76,60,0.15)] z-20 -translate-y-1/2"
              />

              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-[240px] md:w-[340px] relative group"
                >
                  {/* Content Card */}
                  <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-soft group-hover:border-nexus/20 transition-all duration-500 mt-16 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-50 rounded-[1.2rem] flex items-center justify-center text-nexus group-hover:bg-nexus group-hover:text-white transition-all duration-500 border border-slate-50">
                        {step.icon}
                      </div>
                      <div className="text-right">
                        <span className="block text-[7px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5">
                          {step.label}
                        </span>
                        <span className="block text-base md:text-xl font-black text-slate-900 group-hover:text-nexus transition-colors leading-none">
                          {step.phase}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm md:text-base font-black text-slate-900 tracking-tight leading-tight group-hover:text-nexus transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[10px] md:text-[12px] text-slate-500 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-nexus opacity-0 group-hover:opacity-100 transition-all duration-500 font-black text-[7px] uppercase tracking-[0.3em] transform -translate-x-2 group-hover:translate-x-0">
                      <Sparkles size={12} className="animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>

                  {/* Ghost Backdrop Number */}
                  <div className="absolute top-0 -left-4 text-[50px] md:text-[80px] font-black text-slate-50/40 -z-10 select-none pointer-events-none group-hover:text-nexus/5 transition-colors duration-700">
                    0{idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
