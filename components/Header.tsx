
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-slate-100/50' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 md:w-9 md:h-9 bg-nexus rounded-xl flex items-center justify-center shadow-nexus-glow group-hover:scale-110 transition-transform duration-500">
            <Rocket className="text-white w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
            Sharp<span className="text-nexus">Tip</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-nexus transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-nexus group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e: any) => handleLinkClick(e, '#contact')}
            className="bg-slate-900 hover:bg-nexus px-6 py-2.5 rounded-xl text-xs font-black text-white transition-all shadow-lg shadow-slate-200 flex items-center gap-2"
          >
            Start Scaling <ArrowRight size={14} />
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Reduced text size and spacing */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-lg font-black text-slate-900 tracking-tight hover:text-nexus transition-colors"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-50">
                 <button 
                  onClick={(e: any) => handleLinkClick(e, '#contact')}
                  className="bg-nexus w-full py-3 rounded-xl font-black text-sm text-white shadow-nexus-glow flex items-center justify-center gap-2"
                 >
                   Talk to Growth Team <ArrowRight size={16} />
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
