"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, ArrowUpRight, ArrowDownLeft, LayoutDashboard, 
  History, Settings, LogOut, Plus, Shield, Menu, X 
} from "lucide-react";
import Link from "next/link";

export default function AccountDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const transactions = [
    { id: 1, name: "Aurelius Holdings", date: "Oct 24", amount: "-$2,400.00", type: "out" },
    { id: 2, name: "Dividend Deposit", date: "Oct 22", amount: "+$1,150.40", type: "in" },
    { id: 3, name: "Global Estate Tax", date: "Oct 20", amount: "-$840.00", type: "out" },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f1e6] font-serif flex flex-col md:flex-row">
      
      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden flex justify-between items-center p-6 border-b border-white/5 bg-[#111111] sticky top-0 z-50">
        <h1 className="text-xl font-black italic tracking-tighter uppercase">FB</h1>
        <button onClick={() => setIsMenuOpen(true)} className="p-2">
          <Menu size={24} />
        </button>
      </div>

     {/* --- SIDE NAVIGATION --- */}
<AnimatePresence>
  {isMenuOpen && (
    <>
      {/* Mobile Drawer (JS Controlled) */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 left-0 z-50 w-72 bg-[#111111] p-8 flex flex-col gap-12 md:hidden"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">FB</h1>
          <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
        </div>
        <NavContent />
      </motion.aside>

      {/* Mobile Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
      />
    </>
  )}
</AnimatePresence>

{/* Desktop Sidebar (CSS Controlled - Always present in DOM but hidden on mobile via Tailwind) */}
<aside className="hidden md:flex w-64 border-r border-white/5 p-8 flex-col gap-12 sticky top-0 h-screen">
  <h1 className="text-2xl font-black italic tracking-tighter uppercase">FB</h1>
  <NavContent />
</aside>

      {/* --- OVERLAY FOR MOBILE --- */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[55] md:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40 mb-2 font-sans font-bold">Account Summary</p>
            <h2 className="text-4xl md:text-5xl italic">Welcome, User</h2>
          </div>
          <button className="w-full md:w-auto bg-[#a68b67] text-[#111111] px-6 py-4 md:py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex justify-center items-center gap-2">
            <Plus size={14} /> New Transfer
          </button>
        </header>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          
          {/* BALANCE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Available Liquidity</span>
                <div className="text-4xl md:text-7xl mt-4 font-sans tracking-tighter break-all">
                  $4,280,500<span className="opacity-20">.00</span>
                </div>
              </div>
              <div className="bg-[#a68b67]/10 p-4 rounded-full border border-[#a68b67]/20 self-end md:self-start">
                <CreditCard className="text-[#a68b67]" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:flex md:gap-12 pt-8 border-t border-white/5 gap-6">
              <Stat label="Monthly Yield" value="+12.4%" />
              <Stat label="Asset Class" value="Premium Private" />
              <Stat label="Status" value="Verified" />
            </div>
          </motion.div>

          {/* QUICK ACTIONS */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-12 lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-6"
          >
            <div className="flex-1 bg-[#a68b67] text-[#111111] p-8 rounded-[2rem] relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest mb-8">Primary Card</p>
                <p className="text-xl font-mono mb-2">•••• 2026</p>
                <p className="text-[10px] uppercase font-bold">Freedom Black</p>
              </div>
              <Shield size={120} className="absolute -right-4 -bottom-4 opacity-10" />
            </div>

            <div className="flex-1 bg-white/5 border border-white/5 p-8 rounded-[2rem]">
              <p className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">Global Market</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl italic">Bullish</span>
                <ArrowUpRight className="text-green-500" />
              </div>
            </div>
          </motion.div>

          {/* TRANSACTIONS */}
          <div className="col-span-12 mt-8">
            <h3 className="text-sm uppercase tracking-[0.3em] mb-8 opacity-40 font-bold px-2">Recent Movements</h3>
            <div className="space-y-3">
              {transactions.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-4 md:p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`p-2 md:p-3 rounded-full ${t.type === 'in' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                      {t.type === 'in' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-lg">{t.name}</p>
                      <p className="text-[9px] uppercase tracking-widest opacity-40 font-sans">{t.date}</p>
                    </div>
                  </div>
                  <div className={`text-sm md:text-xl font-sans font-bold ${t.type === 'in' ? 'text-green-500' : ''}`}>
                    {t.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: any) {
  return (
    <div className={`flex items-center gap-4 cursor-pointer transition-all ${active ? "text-[#a68b67]" : "opacity-40 hover:opacity-100"}`}>
      {icon}
      <span className="text-[10px] uppercase font-black tracking-widest">{label}</span>
    </div>
  );
}

function Stat({ label, value }: any) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-widest opacity-30 mb-1 font-sans font-bold">{label}</p>
      <p className="text-xs md:text-sm font-bold italic">{value}</p>
    </div>
  );
  
}
// 1. ADD THIS AT THE VERY BOTTOM OF YOUR FILE
function NavContent() {
  return (
    <div className="flex flex-col h-full">
      <nav className="flex flex-col gap-8">
        <NavItem icon={<LayoutDashboard size={18}/>} label="Overview" active />
        <NavItem icon={<History size={18}/>} label="Ledger" />
        <NavItem icon={<Settings size={18}/>} label="Security" />
      </nav>

      {/* This ensures the Back button stays at the bottom */}
      <div className="mt-auto pt-10">
        <Link href="/">
          <button className="flex items-center gap-3 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
            <LogOut size={14} /> Back
          </button>
        </Link>
      </div>
    </div>
  );
}
