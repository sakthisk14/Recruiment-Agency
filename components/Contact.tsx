
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[3.5rem] hidden lg:block" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-nexus mb-4">Connect With Us</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
              Ready to build your <br />
              <span className="text-nexus">dream team?</span>
            </h3>
            
            <p className="text-base text-slate-500 font-medium mb-10 max-w-md leading-relaxed">
              Whether you're looking to hire the top 1% or manage global payroll, our experts are ready to architect your expansion.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-nexus" />, label: "Email our growth team", value: "hello@nexushire.global" },
                { icon: <Phone className="text-nexus" />, label: "Global HQ Support", value: "+1 (888) NEXUS-01" },
                { icon: <MapPin className="text-nexus" />, label: "Main Office", value: "Silicon Valley • London • Singapore" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-nexus group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                    {/* Fixed: Cast item.icon to any to resolve 'size' prop type error in React.cloneElement */}
                    {React.cloneElement(item.icon as any, { size: 18 })}
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</p>
                    <p className="text-base font-bold text-slate-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 relative"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-nexus/10 text-nexus rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">Request Received!</h4>
                  <p className="text-base text-slate-500 font-medium mb-8">Our strategy experts will reach out within 2 hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-nexus font-black uppercase tracking-widest text-[10px] hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-3">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 focus:ring-4 focus:ring-nexus/5 focus:outline-none transition-all font-medium text-slate-900 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-3">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 focus:ring-4 focus:ring-nexus/5 focus:outline-none transition-all font-medium text-slate-900 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-3">Service of Interest</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 focus:ring-4 focus:ring-nexus/5 focus:outline-none transition-all font-medium text-slate-900 appearance-none text-sm">
                      <option>Talent Recruitment</option>
                      <option>EOR & Payroll Management</option>
                      <option>Infrastructure/Cloud Services</option>
                      <option>Development Support</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-3">How can we help?</label>
                    <textarea 
                      placeholder="Tell us about your expansion goals..."
                      className="w-full h-28 bg-slate-50 border border-slate-100 rounded-xl p-3.5 focus:ring-4 focus:ring-nexus/5 focus:outline-none transition-all font-medium text-slate-900 resize-none text-sm"
                    />
                  </div>

                  <button
                    disabled={formState === 'submitting'}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-base hover:bg-nexus transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 group"
                  >
                    {formState === 'submitting' ? 'Processing...' : (
                      <>
                        Book a Discovery Call
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
