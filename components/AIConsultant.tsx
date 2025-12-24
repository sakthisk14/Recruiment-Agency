
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
    <section id="advisor" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-soft border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Input Form */}
            <div className="p-8 md:p-12 lg:p-20 border-r border-slate-50">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="bg-nexus/10 p-2 md:p-3 rounded-2xl">
                  <Sparkles className="text-nexus w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">AI Strategy Pod</h3>
              </div>
              <p className="text-sm md:text-lg text-slate-600 mb-8 md:mb-12 leading-relaxed font-medium">
                Describe your business expansion plans. Our AI builds a custom NexusHire roadmap for your specific industry instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="relative">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. Scaling a US-based SaaS to Southeast Asia, needing 15 full-stack engineers..."
                    className="w-full h-48 md:h-56 bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-nexus/5 transition-all resize-none text-base md:text-lg font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 md:py-6 bg-nexus rounded-3xl font-black text-lg md:text-xl text-white flex items-center justify-center gap-3 hover:bg-nexus-dark transition-all disabled:opacity-50 shadow-nexus-glow"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>Craft My Roadmap <Send size={20} /></>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Results Display */}
            <div className="p-8 md:p-12 lg:p-20 bg-slate-50/30 min-h-[400px] flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                {!result && !loading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-sm">
                      <Sparkles className="text-slate-200 w-10 h-10 md:w-14 md:h-14" />
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-widest">Waiting for input...</p>
                  </motion.div>
                )}

                {loading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 md:space-y-6"
                  >
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="h-3 md:h-4 bg-slate-100 animate-pulse rounded-full" style={{ width: `${100 - i * 12}%` }} />
                    ))}
                    <p className="text-nexus text-center pt-8 md:pt-10 text-xs md:text-sm font-black tracking-widest uppercase animate-pulse">Analyzing scaling vectors...</p>
                  </motion.div>
                )}

                {result && !loading && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8 md:space-y-10"
                  >
                    <div>
                      <h4 className="text-nexus text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-3 md:mb-4">Strategic Recommendation</h4>
                      <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight">{result.recommendation}</p>
                    </div>

                    <div>
                      <h4 className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 md:mb-6">Growth Roadmap</h4>
                      <div className="space-y-3 md:space-y-4">
                        {result.roadmap.map((step, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 md:gap-4 bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm"
                          >
                            <span className="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-xl bg-nexus text-white flex items-center justify-center text-xs md:text-sm font-black">{idx + 1}</span>
                            <span className="text-sm md:text-base text-slate-700 font-bold leading-tight">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 md:pt-4 flex flex-wrap gap-2 md:gap-3">
                      {result.keyBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 md:gap-2 bg-nexus/5 text-nexus px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-black border border-nexus/10">
                          <CheckCircle2 size={12} /> {benefit}
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