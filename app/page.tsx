"use client";
import { Shield, Zap, Globe, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function FreedomBankLanding() {
   const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Business", href: "/partners" },
    { name: "Testimonials", href: "/testimonials" },
  ];
  return (
    <div className="min-h-screen bg-[#f5f1e6] font-serif text-[#332219]">
      
     <header className="bg-[#111111] text-[#f5f1e6] px-6 md:px-12 py-6 flex justify-between items-center sticky top-0 z-[100] border-b border-white/5">
      <Link href="/">
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic cursor-pointer">
          FreedomBank
        </h1>
      </Link>

      {/* --- DESKTOP NAV --- */}
      <nav className="hidden md:flex gap-10 text-[10px] uppercase font-bold tracking-[0.2em]">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="hover:text-[#a68b67] transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>

      {/* --- MOBILE TRIGGER --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden p-2 text-[#f5f1e6] hover:text-[#a68b67] transition-colors"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* --- MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[80px] bg-[#111111] z-[90] flex flex-col p-12 md:hidden"
          >
            <nav className="flex flex-col gap-12 mt-12">
              {menuItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl italic flex items-center justify-between group"
                  >
                    {item.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#a68b67]" />
                  </Link>
                </motion.div>
              ))}
            </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
     {/* --- HERO SECTION --- */}
{/* FIX: Removed 'overflow-hidden' and increased 'pb' to allow the card to bridge the sections */}
<section className="relative bg-gradient-to-b from-[#111111] to-[#0a0a0a] text-[#f5f1e6] pt-32 pb-64 text-center z-20">
  
  {/* Content Layer */}
  <div className="relative z-10">
    <h2 className="text-[7vw] italic leading-tight mb-6">
      The Standard of <span className="relative inline-block">
        Independence
        {/* Underline styling matching the image highlight */}
        <span className="absolute bottom-4 left-0 w-full h-[8px] bg-[#a68b67]/40 -z-10" />
      </span>
    </h2>
    
    <p className="text-sm uppercase tracking-[0.6em] mb-12 opacity-80 font-sans font-bold">
      Banking That Moves With Your Ambition
    </p>
    
   <Link href="/account">
  <button className="bg-[#f5f1e6] cursor-pointer text-[#111111] px-10 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-[#e5e1d6] transition-colors">
    Open Your Account
  </button>
</Link>
  </div>

  {/* --- FLOATING CREDIT CARD --- */}
  {/* FIX: Set bottom to a higher value and ensured z-index is higher than the following section */}
  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-110px] w-[420px] h-[240px] bg-[#1a1a1a] rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] p-10 rotate-[-6deg] z-50 transition-transform hover:rotate-0 duration-700">
    <div className="flex justify-between mb-16 items-start">
       <div className="w-14 h-11 bg-gradient-to-br from-[#a68b67] to-[#5d4037] rounded-lg opacity-80" /> {/* Chip Visual */}
       <span className="text-[10px] font-sans font-black tracking-[0.2em] opacity-40 uppercase">Freedom Premium</span>
    </div>
    
    {/* Card Number */}
    <div className="text-3xl font-mono tracking-[0.25em] text-white/90 drop-shadow-md">
      1825 9324 9526 2026
    </div>
    
    {/* Subtle Card Glow */}
    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
  </div>
</section>

{/* --- NEXT SECTION (Values) --- */}
{/* Ensure this section has a lower z-index than the card */}
<section className="relative z-10 bg-[#f5f1e6] pt-48 pb-24 px-12">
  {/* Content here... */}
</section>


      {/* --- ICON FEATURES (Beige Section) --- */}
      <section className="pt-56 pb-24 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <FeatureItem 
            icon={<Shield />} 
            title="Heritage Trust" 
            text="A legacy of stability protecting the wealth under your management." 
          />
          <FeatureItem 
            icon={<Zap />} 
            title="AI Agility" 
            text="Fast, intelligent banking tailored to the modern financial landscape." 
          />
          <FeatureItem 
            icon={<Globe />} 
            title="No Borders" 
            text="Global access to your assets wherever your journey leads." 
          />
        </div>
      </section>

      {/* --- PRIVATE WEALTH (Brown Section) --- */}
      <section className="bg-[#332219] text-[#f5f1e6] py-32 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h3 className="text-6xl italic leading-tight">Curated Wealth, <br/> Undivided Attention</h3>
            <p className="text-[#f5f1e6]/60 text-sm leading-loose max-w-md">
              Financial strategies designed for acquisition and growth, valued for your long-term success.
            </p>
           <Link href="/loans">
  <button className="bg-[#a68b67]/20 border cursor-pointer border-[#a68b67]/30 px-10 py-4 rounded-xl text-[10px] uppercase font-black tracking-widest hover:bg-[#a68b67]/40 transition-all cursor-pointer">
    Discover Private Wealth
  </button>
</Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <WealthCard title="Low Interest Loans" icon={<Shield size={16} />} />
            <WealthCard title="Secure Transaction" icon={<Shield size={16} />} />
            <WealthCard title="Freedom Premium" icon={<Globe size={16} />} />
            <WealthCard title="Livesite Wealth" icon={<Zap size={16} />} />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#111111] text-[#f5f1e6]/50 py-10 px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="italic text-[#f5f1e6] font-bold">Your Partner in Freedom</div>
        <div className="flex gap-8 text-[9px] font-black tracking-widest uppercase mt-6 md:mt-0">
          <a href="#">Privacy</a> <a href="#">Legal</a> <a href="#">Security</a>
        </div>
        <div className="text-[9px] tracking-widest uppercase mt-6 md:mt-0 font-sans font-bold">
          Member FDIC. Equal Housing Lender.
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ icon, title, text }: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border border-[#332219]/20 flex items-center justify-center mb-6">{icon}</div>
      <h4 className="text-xl font-bold uppercase italic mb-4">{title}</h4>
      <p className="text-xs leading-relaxed opacity-60 max-w-[240px]">{text}</p>
    </div>
  );
}

function WealthCard({ title, icon }: any) {
  return (
    <div className="bg-[#f5f1e6] text-[#332219] p-6 rounded-2xl space-y-4 shadow-xl">
      <div className="flex items-center gap-2">{icon} <span className="text-[10px] font-black uppercase tracking-tighter">{title}</span></div>
      <div className="h-10 w-full bg-[#332219]/5 rounded-md" />
      <div className="h-1 w-12 bg-[#a68b67]/30 rounded-full" />
    </div>
  );
}
