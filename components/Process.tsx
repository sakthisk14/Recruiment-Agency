
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
    icon: <Target className="w-5 h-5" />,
    title: "Understanding Needs",
    label: "Discovery",
    phase: "Phase 01",
    desc: "We start by deeply understanding your business goals, team structure, and technical requirements."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Elite Recruitment",
    label: "Recruitment",
    phase: "Phase 02",
    desc: "Our expert recruiters manually screen and shortlist skilled professionals who match your requirements."
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "HR & EOR Solutions",
    label: "Compliance",
    phase: "Phase 03",
    desc: "We handle end-to-end payroll, compliance, and contracts through our EOR services."
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud Infrastructure",
    label: "Architecture",
    phase: "Phase 04",
    desc: "We support your business with scalable infrastructure and cloud solutions."
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Dev Execution",
    label: "Execution",
    phase: "Phase 05",
    desc: "From frontend to backend, our development support helps your teams build and scale applications."
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "Growth Partnership",
    label: "Success",
    phase: "Phase 06",
    desc: "We continuously support and optimize our services as your business scales globally."
  }
];

const Process: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  
  const progressLine = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.01, 0.01, 0]);

  return (
    <section ref={targetRef} id="eor" className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        
        <div className="absolute top-[12vh] left-6 md:left-20 z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-nexus/5 text-nexus text-[8px] font-black uppercase tracking-[0.3em] mb-2 border border-nexus/10"
          >
            Workflow Blueprint
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight"
          >
            The <span className="text-nexus">SharpTip</span> Strategy.
          </motion.h2>
        </div>

        <motion.div 
          style={{ 
            opacity: bgOpacity,
            x: useTransform(scrollYProgress, [0, 1], ["2%", "-5%"])
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        >
           <span className="text-[15vw] font-black text-slate-900 whitespace-nowrap leading-none tracking-tighter uppercase">
             SharpTip Journey SharpTip Journey
           </span>
        </motion.div>

        <div className="relative w-full flex items-center h-1/2">
          <motion.div style={{ x }} className="flex items-center px-[30vw] relative z-30">
            <div className="flex gap-10 md:gap-16 items-center relative">
              <div className="absolute top-1/2 left-[100px] md:left-[140px] right-[100px] md:right-[140px] h-[1px] bg-slate-100 z-10 -translate-y-1/2" />
              <motion.div 
                style={{ scaleX: progressLine, originX: 0 }}
                className="absolute top-1/2 left-[100px] md:left-[140px] right-[100px] md:right-[140px] h-[2px] bg-nexus shadow-[0_0_10px_rgba(231,76,60,0.15)] z-20 -translate-y-1/2"
              />

              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-[200px] md:w-[280px] relative group"
                >
                  <div className="bg-white p-5 md:p-6 rounded-[2rem] border border-slate-100 shadow-soft group-hover:border-nexus/20 transition-all duration-500 mt-12 flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 md:w-11 md:h-11 bg-slate-50 rounded-xl flex items-center justify-center text-nexus group-hover:bg-nexus group-hover:text-white transition-all duration-500 border border-slate-50">
                        {step.icon}
                      </div>
                      <div className="text-right">
                        <span className="block text-[7px] font-black text-slate-300 uppercase tracking-widest">
                          {step.label}
                        </span>
                        <span className="block text-sm md:text-base font-black text-slate-900 group-hover:text-nexus transition-colors leading-none">
                          {step.phase}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xs md:text-sm font-black text-slate-900 tracking-tight leading-tight group-hover:text-nexus transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[10px] md:text-[11px] text-slate-500 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-1 flex items-center gap-1.5 text-nexus opacity-0 group-hover:opacity-100 transition-all duration-500 font-black text-[7px] uppercase tracking-[0.2em] transform -translate-x-1 group-hover:translate-x-0">
                      <Sparkles size={10} className="animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>

                  <div className="absolute top-0 -left-2 text-[40px] md:text-[60px] font-black text-slate-50/40 -z-10 select-none pointer-events-none group-hover:text-nexus/5 transition-colors duration-700">
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
