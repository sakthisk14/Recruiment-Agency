
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { getAIAdvisorResponse } from '../services/geminiService';
import { AIConsultantResponse } from '../types';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIConsultantResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const response = await getAIAdvisorResponse(input);
    setResult(response);
    setLoading(false);
  };

  return (
    <section id="advisor" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-soft border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Input Form */}
            <div className="p-6 md:p-10 lg:p-16 border-r border-slate-50">
              <div className="flex items-center gap-2.5 mb-6 md:mb-8">
                <div className="bg-nexus/10 p-2 rounded-xl">
                  <Sparkles className="text-nexus w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">AI Strategy Pod</h3>
              </div>
              <p className="text-base text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium">
                Describe your business expansion plans. Our AI builds a custom SharpTip roadmap for your specific industry instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="relative">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. Scaling a US-based SaaS to Southeast Asia, needing 15 full-stack engineers..."
                    className="w-full h-36 md:h-44 bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-nexus/5 transition-all resize-none text-base font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 md:py-4 bg-nexus rounded-2xl font-black text-base text-white flex items-center justify-center gap-3 hover:bg-nexus-dark transition-all disabled:opacity-50 shadow-nexus-glow"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>Craft My Roadmap <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Results Display */}
            <div className="p-6 md:p-10 lg:p-16 bg-slate-50/30 min-h-[350px] flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                {!result && !loading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <Sparkles className="text-slate-200 w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Waiting for input...</p>
                  </motion.div>
                )}

                {loading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-3 bg-slate-100 animate-pulse rounded-full" style={{ width: `${100 - i * 15}%` }} />
                    ))}
                    <p className="text-nexus text-center pt-6 text-[10px] font-black tracking-widest uppercase animate-pulse">Analyzing scaling vectors...</p>
                  </motion.div>
                )}

                {result && !loading && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6 md:space-y-8"
                  >
                    <div>
                      <h4 className="text-nexus text-[9px] font-black uppercase tracking-[0.2em] mb-2 md:mb-3">Strategic Recommendation</h4>
                      <p className="text-lg md:text-xl font-black text-slate-900 leading-tight">{result.recommendation}</p>
                    </div>

                    <div>
                      <h4 className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] mb-3 md:mb-4">Growth Roadmap</h4>
                      <div className="space-y-2.5 md:space-y-3">
                        {result.roadmap.map((step, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-slate-100 shadow-sm"
                          >
                            <span className="shrink-0 w-6 h-6 rounded-lg bg-nexus text-white flex items-center justify-center text-[10px] font-black">{idx + 1}</span>
                            <span className="text-sm text-slate-700 font-bold leading-tight">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {result.keyBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-nexus/5 text-nexus px-3 py-1.5 rounded-full text-[9px] font-black border border-nexus/10">
                          <CheckCircle2 size={10} /> {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
