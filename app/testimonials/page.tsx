"use client";
import { motion } from "framer-motion";
import { Quote, Star, ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Eleanor Sterling",
    role: "Founding Partner, Sterling Global",
    wealth: "$12M+ Managed",
    quote: "FreedomBank understood that my wealth wasn't just a number—it was a legacy. Their AI-driven insights allowed me to pivot my portfolio weeks before the 2025 market shift.",
    highlight: "Strategic Agility"
  },
  {
    name: "Julian Vane",
    role: "Tech Entrepreneur",
    wealth: "8.4% Annual Yield",
    quote: "The transition from traditional banking to Freedom was seamless. I now have borderless access to my liquidity, whether I'm in Singapore or Zurich.",
    highlight: "Global Sovereignty"
  },
  {
    name: "Marcus Thorne",
    role: "Estate Developer",
    wealth: "$45M Portfolio",
    quote: "Their private wealth committee provides a level of undivided attention I haven't seen since the old-world private banks of Europe. Truly the new standard.",
    highlight: "Heritage Trust"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e6] text-[#332219] font-serif">
      
      {/* --- HERO --- */}
      <section className="bg-[#111111] text-[#f5f1e6] py-32 px-12 text-center">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.8em] opacity-40 font-sans font-bold block mb-8"
        >
          Succession & Growth
        </motion.span>
        <motion.h1 
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl italic leading-tight"
        >
          The Freedom <br/> Experience
        </motion.h1>
      </section>

      {/* --- TESTIMONIAL LIST --- */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-32">
        {testimonials.map((t, index) => (
          <motion.div 
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-16 items-center`}
          >
            {/* Visual Block */}
            <div className="w-full md:w-1/2 aspect-square bg-[#332219] rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden">
               <div className="flex justify-between items-start z-10">
                 <Quote className="text-[#a68b67] opacity-40" size={48} />
                 <div className="text-right">
                   <p className="text-[10px] uppercase tracking-widest text-[#f5f1e6]/40 font-sans font-bold">Client Metric</p>
                   <p className="text-[#a68b67] text-xl font-bold italic">{t.wealth}</p>
                 </div>
               </div>
               
               <div className="z-10">
                 <p className="text-[#f5f1e6]/40 text-[10px] uppercase tracking-widest mb-2 font-sans font-bold">Core Pillar</p>
                 <h4 className="text-[#f5f1e6] text-3xl italic">{t.highlight}</h4>
               </div>

               {/* Background Decorative Icon */}
               <TrendingUp size={300} className="absolute -bottom-20 -right-20 text-[#a68b67] opacity-5 -rotate-12" />
            </div>

            {/* Text Block */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#a68b67] text-[#a68b67]" />)}
              </div>
              <p className="text-2xl md:text-3xl leading-relaxed italic text-[#332219]/90">
                "{t.quote}"
              </p>
              <div>
                <p className="text-xl font-bold uppercase tracking-tighter">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest opacity-40 font-sans font-bold mt-1">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="bg-[#332219] py-32 px-12 text-center text-[#f5f1e6]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-10"
        >
          <h3 className="text-5xl italic leading-tight">Your story of independence starts here.</h3>
          <p className="opacity-40 text-sm leading-loose font-sans">
            Join the elite circle of individuals who have redefined their financial future with FreedomBank. 2026 applications are now open for private wealth management.
          </p>
          <Link href="/loans" className="inline-block">
            <button className="bg-[#f5f1e6] text-[#111111] px-12 py-5 cursor-pointer rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#a68b67] transition-all shadow-2xl flex items-center gap-3">
              Start Your Journey <ArrowUpRight size={16} />
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
