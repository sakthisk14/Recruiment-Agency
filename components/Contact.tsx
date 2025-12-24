
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
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[5rem] hidden lg:block" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-nexus mb-6">Connect With Us</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-[1.1]">
              Ready to build your <br />
              <span className="text-nexus">dream team?</span>
            </h3>
            
            <p className="text-xl text-slate-500 font-medium mb-12 max-w-lg leading-relaxed">
              Whether you're looking to hire the top 1% or manage global payroll, our experts are ready to architect your expansion.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-nexus" />, label: "Email our growth team", value: "hello@nexushire.global" },
                { icon: <Phone className="text-nexus" />, label: "Global HQ Support", value: "+1 (888) NEXUS-01" },
                { icon: <MapPin className="text-nexus" />, label: "Main Office", value: "Silicon Valley • London • Singapore" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-nexus group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-100 relative"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-nexus/10 text-nexus rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h4>
                  <p className="text-slate-500 font-medium text-lg mb-10">Our strategy experts will reach out to you within 2 business hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-nexus font-black uppercase tracking-widest text-sm hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:ring-4 focus:ring-nexus/5 focus:outline-none transition-all font-medium text-slate-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:ring-4 focus:ring-nexus/5 focus:outline-none transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Service of Interest</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:ring-4 focus:ring-nexus/5 focus:outline-none transition-all font-medium text-slate-900 appearance-none">
                      <option>Talent Recruitment</option>
                      <option>EOR & Payroll Management</option>
                      <option>Infrastructure/Cloud Services</option>
                      <option>Development Support</option>
                      <option>Full Suite Solution</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">How can we help?</label>
                    <textarea 
                      placeholder="Tell us about your expansion goals..."
                      className="w-full h-32 bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:ring-4 focus:ring-nexus/5 focus:outline-none transition-all font-medium text-slate-900 resize-none"
                    />
                  </div>

                  <button
                    disabled={formState === 'submitting'}
                    className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-nexus transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 group"
                  >
                    {formState === 'submitting' ? 'Processing...' : (
                      <>
                        Book a Discovery Call
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
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
