"use client";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, Building2, Landmark, Briefcase } from "lucide-react";
import Link from "next/link";

const partners = [
  { name: "Aurelius Holdings", sector: "Equity & Venture", icon: <Building2 /> },
  { name: "Global Estate Trust", sector: "Real Estate", icon: <Landmark /> },
  { name: "Vanguard Logistics", sector: "Supply Chain", icon: <Globe /> },
  { name: "Meridian Capital", sector: "Private Wealth", icon: <Briefcase /> },
  { name: "Sovereign Tech", sector: "Infrastructure", icon: <Building2 /> },
  { name: "Atlas Maritime", sector: "Logistics", icon: <Globe /> },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f1e6] font-serif">
      
      {/* --- HERO --- */}
      <section className="pt-32 pb-20 px-12 text-center border-b border-white/5">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.6em] mb-6 opacity-40 font-sans font-bold"
        >
          Trusted Collaborations
        </motion.p>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl italic mb-8"
        >
          Enterprise Alliances
        </motion.h1>
      </section>

      {/* --- PARTNER GRID --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] p-12 group hover:bg-[#a68b67]/5 transition-colors relative"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#a68b67] group-hover:bg-[#a68b67] group-hover:text-[#111111] transition-all">
                  {partner.icon}
                </div>
                <ArrowUpRight className="opacity-0 group-hover:opacity-40 transition-opacity" size={20} />
              </div>
              
              <h3 className="text-2xl mb-2 font-bold">{partner.name}</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-sans">{partner.sector}</p>
              
              {/* Subtle hover border effect */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a68b67] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 px-12 text-center bg-[#f5f1e6] text-[#111111]">
        <h2 className="text-4xl italic mb-10">Expand your business horizons.</h2>
        <Link href="/">
          <button className="bg-[#111111] text-[#f5f1e6] px-12 py-5 rounded-2xl cursor-pointer font-black uppercase text-[10px] tracking-widest hover:bg-[#332219] transition-all">
            Back To Home
          </button>
        </Link>
      </section>
    </div>
  );
}
