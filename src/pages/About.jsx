import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  Target,
  Users,
  Lightbulb,
  Award,
  CalendarDays,
  GraduationCap,
  Sparkles,
  ArrowRight,
  BookOpen,
  History,
  Shield,
  Layers,
  ChevronRight,
} from "lucide-react";

import siteText from "../content/siteText";
import SectionHeader from "../components/ui/SectionHeader";
import AnimatedCounter from "../components/ui/AnimatedCounter";

const About = () => {
  const t = siteText;

  // Fluid transition configuration
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const timelineEvents = [
    {
      year: "1999 AD (2056 BS)",
      title: "Establishment",
      description: "Founded with a vision to provide high-quality education to the students of Kailali, Sudurpaschim Province.",
      icon: <History size={16} />,
    },
    {
      year: "2008 AD",
      title: "First SEE Batch",
      description: "Graduated our first batch of Secondary Education Exam (SEE) students with 100% board success.",
      icon: <Award size={16} />,
    },
    {
      year: "2015 AD",
      title: "+2 Higher Secondary Stream",
      description: "Introduced High School (+2) streams in Science and Management, providing higher education opportunities locally.",
      icon: <GraduationCap size={16} />,
    },
    {
      year: "2020 AD",
      title: "Digital Smart Classrooms",
      description: "Transitioned to smart class technology, upgrading laboratories and computer centers for tech-enabled learning.",
      icon: <Layers size={16} />,
    },
    {
      year: "2023 AD",
      title: "Addition of Law Stream",
      description: "Expanded academic programs to include the Law stream under NEB, enabling students to explore legal education.",
      icon: <BookOpen size={16} />,
    },
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── HERO BANNER ── */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center border-b border-slate-100">
        <img
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1920&q=80"
          alt="Modern School Infrastructure Exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {t.about.hero}
            </h1>
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-300 font-medium uppercase tracking-wider">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <ChevronRight size={12} className="text-slate-400" />
              <span className="text-white">{t.about.hero}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── INTRODUCTION SECTION ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Infrastructure Image Showcase */}
          <motion.div {...fadeInUp} className="relative">
            <div className="absolute -inset-3 bg-blue-50 rounded-3xl z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                alt="Kailali National School Academic Building Infrastructure"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-100 mb-4">
              {t.about.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Where Education Meets <span className="text-blue-600">Excellence.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-8 text-justify whitespace-pre-line">
              {t.about.intro.description}
            </p>
            <div>
              <Link to="/admission" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/10 transition-all transform active:scale-98 group">
                Enroll Today
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── METRICS & STATS PANEL ── */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { end: 1000, suffix: "+", label: t.about.stats.students, icon: <Users className="text-blue-600" size={18} /> },
              { end: 40, suffix: "+", label: t.about.stats.teachers, icon: <Sparkles className="text-indigo-600" size={18} /> },
              { end: 25, suffix: "+", label: t.about.stats.years, icon: <CalendarDays className="text-blue-600" size={18} /> },
              { end: 100, suffix: "%", label: t.about.stats.success, icon: <Award className="text-indigo-600" size={18} /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mt-1.5">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION DUAL GRID ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Blocks */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              Our Commitment & <span className="text-blue-600">Educational Vision</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm border-l-4 border-l-blue-600" {...fadeInUp}>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                  <Target size={16} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">
                  {t.about.mission.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t.about.mission.description}
                </p>
              </motion.div>

              <motion.div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm border-l-4 border-l-indigo-600" {...fadeInUp} transition={{ delay: 0.05 }}>
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
                  <Star size={16} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">
                  {t.about.vision.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t.about.vision.description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Infrastructure Secondary Image (Modern Glass Library Facade) */}
          <motion.div className="lg:col-span-5 relative" {...fadeInUp} transition={{ delay: 0.15 }}>
            <div className="absolute -inset-3 bg-slate-50 rounded-3xl z-0" />
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Bright modern campus facility infrastructure"
              className="relative z-10 rounded-2xl object-cover h-[340px] w-full shadow-lg border border-slate-100"
            />
          </motion.div>
        </div>
      </section>

      {/* ── HISTORICAL TIMELINE SECTION ── */}
      <section id="timeline" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <SectionHeader
          badge="Our History"
          title="Timeline of Excellence"
          subtitle="A journey of growth, achievements, and milestones since our founding in 1999."
          className="mb-16"
        />

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Vertical Split Line */}
          <div className="absolute left-[23px] sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-200" />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={event.year}
                  className={`flex flex-col sm:flex-row relative items-start ${isEven ? "sm:flex-row-reverse" : ""}`}
                  {...fadeInUp}
                  transition={{ delay: i * 0.05 }}
                >
                  {/* Timeline Core Indicator Bubble */}
                  <div className="absolute left-0 sm:left-1/2 top-1 w-6 h-6 rounded-xl bg-white border border-slate-300 text-blue-600 flex items-center justify-center -translate-x-0 sm:-translate-x-1/2 z-10 shadow-sm">
                    {event.icon}
                  </div>

                  {/* Offset Spacer */}
                  <div className="w-full sm:w-1/2 px-8 sm:px-12" />

                  {/* Timeline Card */}
                  <div className="w-full sm:w-1/2 px-8 sm:px-12 mt-3 sm:mt-0">
                    <div className="bg-white border border-slate-200/70 p-5 rounded-2xl shadow-sm hover:border-slate-300 transition-colors">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 block">
                        {event.year}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base mb-1 tracking-tight">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;