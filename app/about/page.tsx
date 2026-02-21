"use client";
import { motion } from "framer-motion";
import { Shield, Globe, Award, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e6] text-[#332219] font-serif">
      
      {/* --- DRAMATIC HERO --- */}
      <section className="bg-[#111111] text-[#f5f1e6] py-32 px-12 text-center overflow-hidden">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.8em] opacity-40 font-sans font-bold block mb-8"
        >
          Established 1825
        </motion.span>
        <motion.h1 
          initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-[10vw] italic leading-none mb-12"
        >
          Legacy of <br/> Independence
        </motion.h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-[#a68b67]/30" />
      </section>

      {/* --- OUR MISSION (Split Layout) --- */}
      <section className="py-32 px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <h2 className="text-5xl italic mb-8 leading-tight">Banking is more than <br/> balance sheets.</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            FreedomBank was founded on the principle that true wealth is the ability to move through the world without friction. We don't just manage assets; we protect the sovereignty of our clients.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#332219]/10">
            <Stat label="Assets Under Management" value="$42B+" />
            <Stat label="Global Reach" value="142 Countries" />
          </div>
        </motion.div>
        
        <motion.div 
          {...fadeIn}
          className="aspect-[4/5] bg-[#332219] rounded-[3rem] relative overflow-hidden flex items-center justify-center p-12"
        >
           <Landmark size={200} className="text-[#a68b67] opacity-10 absolute -bottom-10 -right-10 rotate-12" />
           <p className="text-[#f5f1e6] text-3xl italic text-center relative z-10 leading-relaxed">
             "To provide the sanctuary required for monumental ambition."
           </p>
        </motion.div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="bg-[#332219] text-[#f5f1e6] py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-6xl italic">Our Pillars</h2>
            <p className="text-[10px] uppercase tracking-widest opacity-40 max-w-xs font-sans">How we define the standard of excellence in private wealth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard 
              icon={<Shield />} 
              title="Ironclad Privacy" 
              text="Your data is treated with the same security as your gold. Absolute discretion is our baseline." 
            />
            <ValueCard 
              icon={<Globe />} 
              title="Global" 
              text="Wealth that travels with you. Access your liquidity from London to Tokyo without delay." 
            />
            <ValueCard 
              icon={<Award />} 
              title=" Vision" 
              text="We plan in decades, not quarters. Your legacy is built to survive market cycles." 
            />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-40 text-center px-12">
        <motion.div {...fadeIn}>
          <h3 className="text-4xl italic mb-12">Ready to claim your independence?</h3>
          <Link href="/loans">
            <button className="bg-[#111111] text-[#f5f1e6] px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:bg-[#332219] transition-all flex items-center gap-4 mx-auto group">
              Start Your Application
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function Stat({ label, value }: any) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest opacity-40 font-sans font-bold mb-2">{label}</p>
      <p className="text-3xl font-bold italic">{value}</p>
    </div>
  );
}

function ValueCard({ icon, title, text }: any) {
  return (
    <div className="p-10 border border-[#f5f1e6]/10 rounded-[2rem] hover:bg-[#f5f1e6]/5 transition-colors">
      <div className="w-12 h-12 rounded-full bg-[#a68b67]/20 flex items-center justify-center text-[#a68b67] mb-8">
        {icon}
      </div>
      <h4 className="text-2xl font-bold uppercase italic mb-4">{title}</h4>
      <p className="text-sm leading-relaxed opacity-60 font-sans">{text}</p>
    </div>
  );
}
