"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ArrowLeft, CheckCircle2, 
  DollarSign, Briefcase, Home, ShieldCheck 
} from "lucide-react";
import Link from "next/link";

export default function LoanApplication() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e6] font-serif p-6 md:p-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto flex justify-between items-center mb-16">
        <Link href="/" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 flex items-center gap-2">
          <ArrowLeft size={14} /> Back 
        </Link>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1 w-8 rounded-full transition-colors ${i <= step ? "bg-[#a68b67]" : "bg-white/10"}`} />
          ))}
        </div>
      </div>

      <main className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 1 && (
           // Inside your LoanApplication component


// Inside your step 1 return:
<motion.div 
  key="step1"
  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
  className="space-y-8"
>
  <h2 className="text-4xl italic">What is the purpose of your capital?</h2>
  <div className="grid grid-cols-1 gap-4">
    <LoanOption 
      icon={<Home />} 
      title="Real Estate Acquisition" 
      desc="Commercial or residential property" 
      isSelected={selectedOption === "real-estate"}
      onClick={() => setSelectedOption("real-estate")}
    />
    <LoanOption 
      icon={<Briefcase />} 
      title="Business Expansion" 
      desc="Scaling operations & infrastructure" 
      isSelected={selectedOption === "business"}
      onClick={() => setSelectedOption("business")}
    />
    <LoanOption 
      icon={<ShieldCheck />} 
      title="Asset Liquidity" 
      desc="Loans against existing wealth" 
      isSelected={selectedOption === "liquidity"}
      onClick={() => setSelectedOption("liquidity")}
    />
  </div>
</motion.div>

          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h2 className="text-4xl italic">Define your requirements</h2>
              <div className="space-y-6 font-sans">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Requested Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a68b67]" size={20} />
                    <input type="number" placeholder="500,000" className="w-full bg-black border border-white/10 rounded-xl p-4 pl-12 outline-none focus:border-[#a68b67] transition-colors text-2xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Duration (Years)</label>
                  <select className="w-full bg-black border border-white/10 rounded-xl p-4 outline-none focus:border-[#a68b67] transition-colors appearance-none">
                    <option>5 Years</option>
                    <option>10 Years</option>
                    <option>25 Years</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-12"
            >
              <div className="w-20 h-20 bg-[#a68b67]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#a68b67]/30">
                <CheckCircle2 className="text-[#a68b67]" size={40} />
              </div>
              <h2 className="text-4xl italic">Application Submitted</h2>
              <p className="opacity-60 text-sm max-w-xs mx-auto">Your request is being reviewed by our private wealth committee. You will receive a secure notification within 24 hours.</p>
              <Link href="/account" className="inline-block bg-[#a68b67] text-[#111111] px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest mt-8">
                To Dashboard
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {step < 3 && (
          <div className="mt-12 flex justify-between">
            <button onClick={prevStep} disabled={step === 1} className="px-6 py-3 opacity-40 cursor-pointer disabled:hidden flex items-center gap-2 text-xs uppercase tracking-widest">
              Back
            </button>
            <button onClick={nextStep} className="bg-[#f5f1e6] text-[#111111] px-10 py-4 cursor-pointer rounded-xl font-black uppercase text-xs tracking-widest flex items-center gap-2 ml-auto shadow-xl">
              Next <ArrowRight size={16} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

function LoanOption({ icon, title, desc, isSelected, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-6 p-6 rounded-2xl border transition-all text-left group relative overflow-hidden ${
        isSelected 
          ? "bg-[#a68b67]/20 border-[#a68b67] shadow-[0_0_20px_rgba(166,139,103,0.2)]" 
          : "bg-white/5 border-white/10 hover:border-white/30"
      }`}
    >
      <div className={`p-4 rounded-xl transition-colors ${
        isSelected ? "bg-[#a68b67] text-[#111111]" : "bg-[#a68b67]/10 text-[#a68b67]"
      }`}>
        {icon}
      </div>
      <div>
        <h4 className={`font-bold text-lg ${isSelected ? "text-[#f5f1e6]" : ""}`}>{title}</h4>
        <p className="text-[10px] uppercase tracking-widest opacity-40">{desc}</p>
      </div>

      {/* Subtle checkmark or indicator for selection */}
      {isSelected && (
        <motion.div 
          layoutId="outline" 
          className="absolute inset-0 border-2 border-[#a68b67] rounded-2xl pointer-events-none"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
}
