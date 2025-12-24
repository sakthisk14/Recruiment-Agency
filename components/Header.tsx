
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-slate-100/50' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-nexus rounded-2xl flex items-center justify-center shadow-nexus-glow group-hover:scale-110 transition-transform duration-500">
            <Rocket className="text-white w-6 h-6 md:w-7 md:h-7" />
          </div>
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900">
            Nexus<span className="text-nexus">Hire</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-nexus transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-nexus group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 hover:bg-nexus px-10 py-4 rounded-[1.5rem] text-sm font-black text-white transition-all shadow-xl shadow-slate-200 flex items-center gap-3"
          >
            Start Scaling <ArrowRight size={16} />
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col gap-8 px-6 py-12">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-4xl font-black text-slate-900 tracking-tighter hover:text-nexus transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-8 border-t border-slate-50">
                 <button className="bg-nexus w-full py-6 rounded-[2.5rem] font-black text-xl text-white shadow-nexus-glow">
                   Talk to Growth Team
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
