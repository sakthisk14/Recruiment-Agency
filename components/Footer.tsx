
import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-nexus rounded-xl flex items-center justify-center shadow-nexus-glow">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">NexusHire</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-10 font-medium text-lg">
              Empowering the world's most ambitious teams to scale without borders or technical friction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-white border border-slate-100 rounded-2xl hover:bg-nexus hover:text-white transition-all shadow-sm"><Twitter size={20} /></a>
              <a href="#" className="p-4 bg-white border border-slate-100 rounded-2xl hover:bg-nexus hover:text-white transition-all shadow-sm"><Linkedin size={20} /></a>
              <a href="#" className="p-4 bg-white border border-slate-100 rounded-2xl hover:bg-nexus hover:text-white transition-all shadow-sm"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="font-black mb-10 text-slate-900 text-lg uppercase tracking-widest">Solutions</h5>
            <ul className="space-y-5 text-slate-500 font-bold">
              <li><a href="#" className="hover:text-nexus transition-colors">Global Recruitment</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">EOR & Payroll</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Cloud Strategy</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Engineering Pods</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-10 text-slate-900 text-lg uppercase tracking-widest">Company</h5>
            <ul className="space-y-5 text-slate-500 font-bold">
              <li><a href="#" className="hover:text-nexus transition-colors">Our Ethos</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Career Hub</a></li>
              <li><a href="#" className="hover:text-nexus transition-colors">Security Certs</a></li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-soft">
            <h5 className="font-black mb-6 text-slate-900 text-xl flex items-center gap-3">
              <Mail size={22} className="text-nexus" /> Newsletter
            </h5>
            <p className="text-slate-500 text-sm mb-8 font-medium">Get exclusive insights on global expansion and cloud efficiency.</p>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="work@company.com" 
                className="bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-nexus/5 text-slate-900 font-medium"
              />
              <button className="bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-nexus transition-all">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-bold">
          <p>© 2024 NexusHire Global. All systems operational.</p>
          <div className="flex gap-10">
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
