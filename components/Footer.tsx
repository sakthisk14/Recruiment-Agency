
import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-nexus rounded-lg flex items-center justify-center shadow-nexus-glow">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">SharpTip</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 font-medium text-base">
              Empowering the world's most ambitious teams to scale without borders.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-white border border-slate-100 rounded-xl hover:bg-nexus hover:text-white transition-all shadow-sm"><Twitter size={16} /></a>
              <a href="#" className="p-3 bg-white border border-slate-100 rounded-xl hover:bg-nexus hover:text-white transition-all shadow-sm"><Linkedin size={16} /></a>
              <a href="#" className="p-3 bg-white border border-slate-100 rounded-xl hover:bg-nexus hover:text-white transition-all shadow-sm"><Github size={16} /></a>
            </div>
          </div>

          <div>
            <h5 className="font-black mb-6 text-slate-900 text-sm uppercase tracking-widest">Solutions</h5>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><a href="#" className="hover:text-nexus transition-colors">Global Recruitment</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">EOR & Payroll</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Cloud Strategy</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Engineering Pods</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-6 text-slate-900 text-sm uppercase tracking-widest">Company</h5>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><a href="#" className="hover:text-nexus transition-colors">Our Ethos</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Career Hub</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Security Certs</a></li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft">
            <h5 className="font-black mb-4 text-slate-900 text-base flex items-center gap-2">
              <Mail size={18} className="text-nexus" /> Newsletter
            </h5>
            <p className="text-slate-500 text-xs mb-6 font-medium">Get exclusive insights on global expansion.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="work@company.com" 
                className="bg-slate-50 border border-slate-100 p-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-nexus/5 text-slate-900 font-medium text-sm"
              />
              <button className="bg-slate-900 text-white py-3 rounded-xl font-black text-sm hover:bg-nexus transition-all">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-bold">
          <p>© 2024 SharpTip Global. All systems operational.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-nexus transition-colors">Privacy</a>
            <a href="#" className="hover:text-nexus transition-colors">Legal</a>
            <a href="#" className="hover:text-nexus transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
