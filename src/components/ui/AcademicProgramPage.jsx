import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, BookOpen, ChevronRight } from "lucide-react";
import siteText from "../../content/siteText";

// Clean layout animation configurations
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const stagger = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45, ease: "easeOut", delay },
});

const AcademicProgramPage = ({
  title,
  subtitle,
  overview,
  highlights = [],
  curriculum = [],
  heroImage,
  heroAlt,
  accentColor = "blue",
}) => {
  const t = siteText;
  const isEmerald = accentColor === "emerald";

  // Dynamic Tailwind styling mappings based on chosen color theme
  const dynamicStyles = {
    badge: isEmerald ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-blue-50 text-blue-700 border-blue-200",
    textAccent: isEmerald ? "text-emerald-600" : "text-blue-600",
    iconBg: isEmerald ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-blue-50 text-blue-600 border-blue-100",
    focusBox: isEmerald ? "bg-gradient-to-br from-emerald-50/60 to-white border-emerald-200" : "bg-gradient-to-br from-blue-50/60 to-white border-blue-200",
    primaryBtn: isEmerald ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/10" : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/10"
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-blue-600 selection:text-white">

      {/* ── HERO HEADER BANNER ── */}
      <section className="relative overflow-hidden bg-slate-900 py-16 lg:py-24 border-b border-slate-800">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_1px,_transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Context Column */}
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-6 uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-slate-600" />
              <span className="text-slate-300">Academics</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-white/10 border border-white/10 mb-5">
                {subtitle}
              </span>
            </motion.div>

            <motion.h1 
              className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {title}
            </motion.h1>

            <motion.p 
              className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {overview}
            </motion.p>
          </div>

          {/* Infrastructure Media Showcase Column */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute -inset-2 bg-white/5 rounded-3xl blur-lg pointer-events-none" />
            <img
              src={heroImage}
              alt={heroAlt}
              className="relative w-full h-72 sm:h-80 lg:h-[400px] rounded-2xl object-cover shadow-2xl border border-slate-800"
            />
            
            {/* Inline floating program context badge */}
            <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl shadow-xl border border-slate-100 bg-white flex items-center gap-3 hidden sm:flex">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${dynamicStyles.iconBg}`}>
                <BookOpen size={16} />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm tracking-tight">{title}</div>
                <div className="text-slate-500 text-xs font-medium">{subtitle}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAM FEATURES SECTION ── */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border mb-3 ${dynamicStyles.badge}`}>
            Program Features
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Makes This Program Special
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.article
              key={item.title}
              {...stagger(i * 0.04)}
              className="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-sm hover:border-slate-300 transition-colors"
            >
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border mb-4 ${dynamicStyles.badge}`}>
                {item.badge}
              </span>
              <h3 className="font-extrabold text-slate-900 text-base mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── FOCUS & CURRICULUM SYLLABUS SECTION ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Core Institutional Focus Card */}
            <motion.div {...fadeUp} className="h-full">
              <div className={`rounded-2xl p-8 sm:p-10 border h-full bg-white flex flex-col justify-between shadow-sm ${dynamicStyles.focusBox}`}>
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border mb-5 ${dynamicStyles.badge}`}>
                    Program Focus
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                    {subtitle}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify">
                    {overview}
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white shadow-md transition-all active:scale-98 ${dynamicStyles.primaryBtn}`}>
                    Contact Us 
                    <ArrowRight size={14} />
                  </Link>
                  <Link to="/admission" className="inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                    Admission Info
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Curriculum Highlights Checkbox Matrix */}
            <motion.div {...stagger(0.08)} className="h-full">
              <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm h-full">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border mb-5 ${dynamicStyles.badge}`}>
                  Curriculum Highlights
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                  What Students Learn
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {curriculum.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 bg-slate-50 border border-slate-100 transition-shadow hover:shadow-sm"
                    >
                      <CheckCircle2 size={15} className={`shrink-0 ${dynamicStyles.textAccent}`} />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AcademicProgramPage;