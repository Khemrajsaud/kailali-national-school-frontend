import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  CheckCircle,
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

import homepage from "../assets/images/kailali-home.png";
import gallary1 from "../assets/images/kailali1.jpeg";
import gallary2 from "../assets/images/kailali2.jpeg";
import gallary3 from "../assets/images/kailali3.jpeg";
import school from "../assets/images/kailali4.jpeg";
import siteText from "../content/siteText";
import SectionHeader from "../components/ui/SectionHeader";
import AnimatedCounter from "../components/ui/AnimatedCounter";

const About = () => {
  const t = siteText;

  // Stagger animation helper
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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

  const uniquePoints = [
    {
      icon: <Lightbulb size={20} />,
      title: t.about.unique.innovative.title,
      description: t.about.unique.innovative.description,
      color: "blue",
    },
    {
      icon: <Users size={20} />,
      title: t.about.unique.holistic.title,
      description: t.about.unique.holistic.description,
      color: "emerald",
    },
    {
      icon: <Heart size={20} />,
      title: t.about.unique.experienced.title,
      description: t.about.unique.experienced.description,
      color: "blue",
    },
    {
      icon: <Star size={20} />,
      title: t.about.unique.global.title,
      description: t.about.unique.global.description,
      color: "emerald",
    },
    {
      icon: <Target size={20} />,
      title: t.about.unique.modern.title,
      description: t.about.unique.modern.description,
      color: "blue",
    },
    {
      icon: <Shield size={20} />,
      title: t.about.unique.values.title,
      description: t.about.unique.values.description,
      color: "emerald",
    },
  ];

  const commitments = [
    {
      title: t.about.commitments.academic.title,
      points: t.about.commitments.academic.points,
      icon: <GraduationCap size={22} />,
      gradient: "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(10,31,51,0.02) 100%)",
      border: "rgba(37,99,235,0.15)",
    },
    {
      title: t.about.commitments.character.title,
      points: t.about.commitments.character.points,
      icon: <Star size={22} />,
      gradient: "linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(10,31,51,0.02) 100%)",
      border: "rgba(16,185,129,0.15)",
    },
    {
      title: t.about.commitments.safety.title,
      points: t.about.commitments.safety.points,
      icon: <Shield size={22} />,
      gradient: "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(10,31,51,0.02) 100%)",
      border: "rgba(37,99,235,0.15)",
    },
  ];

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center">
        <img
          src={homepage}
          alt="About Kailali National School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,31,51,0.85) 0%, rgba(16,42,67,0.7) 100%)",
          }}
        />
        {/* Decorative Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">

            <h1
              className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t.about.hero}
            </h1>
            

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-xs text-white/50 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">{t.about.hero}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section: Image Left with Badge, Text Right */}
      <section className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Collage / Image Column */}
          <motion.div {...fadeInUp} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-[--border]">
              <img
                src={school}
                alt="Kailali National School Building"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,31,51,0.6) 0%, transparent 100%)",
                }}
              />
            </div>
           
          </motion.div>

          {/* Text Column */}
          <motion.div {...fadeInUp} transition={{ delay: 0.15 }}>
            <span className="pill-badge pill-badge--navy mb-4 inline-flex">{t.about.tag}</span>
            <h2 className="text-h1 text-[--text] mt-3 mb-6">
              Where Education Meets{" "}
              <span style={{ color: "var(--blue)" }}>Excellence.</span>
            </h2>
            <p className="text-[--text-sec] leading-relaxed mb-6 text-[15px] text-justify whitespace-pre-line">
              {t.about.intro.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admission" className="btn btn-primary">
                Enroll Now <ArrowRight size={16} />
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-14 sm:py-16"
        style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { end: 1000, suffix: "+", label: t.about.stats.students, icon: <Users className="text-[--blue]" size={20} /> },
              { end: 40, suffix: "+", label: t.about.stats.teachers, icon: <Sparkles className="text-[--emerald]" size={20} /> },
              { end: 25, suffix: "+", label: t.about.stats.years, icon: <CalendarDays className="text-[--blue]" size={20} /> },
              { end: 100, suffix: "%", label: t.about.stats.success, icon: <Award className="text-[--emerald]" size={20} /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="card p-6 flex flex-col items-center text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--bg)" }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-2xl sm:text-3xl font-extrabold text-[--text]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-[--text-sec] text-xs font-semibold uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="section-wrapper relative">
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-5 blur-2xl"
            style={{ background: "radial-gradient(circle, var(--blue), transparent)" }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full opacity-5 blur-2xl"
            style={{ background: "radial-gradient(circle, var(--emerald), transparent)" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text/Content Grid */}
          <div className="lg:col-span-7 space-y-6">
          
            <h2 className="text-h1 text-[--text] mt-2 mb-6">
              Our Commitment & <span style={{ color: "var(--blue)" }}>Educational Vision</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="card p-6 border-l-4 hover-lift"
                style={{ borderLeftColor: "var(--blue)" }}
                {...fadeInUp}
              >
                <div className="icon-box icon-box--blue mb-4">
                  <Target size={20} />
                </div>
                <h3
                  className="font-bold text-[--text] text-base mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {t.about.mission.title}
                </h3>
                <p className="text-sm text-[--text-sec] leading-relaxed">
                  {t.about.mission.description}
                </p>
              </motion.div>

              <motion.div
                className="card p-6 border-l-4 hover-lift"
                style={{ borderLeftColor: "var(--emerald)" }}
                {...fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <div className="icon-box icon-box--emerald mb-4">
                  <Star size={20} />
                </div>
                <h3
                  className="font-bold text-[--text] text-base mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {t.about.vision.title}
                </h3>
                <p className="text-sm text-[--text-sec] leading-relaxed">
                  {t.about.vision.description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Image Grid */}
          <motion.div className="lg:col-span-5 relative" {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4 opacity-10"
                style={{ background: "var(--blue)" }}
              />
              <img
                src={gallary1}
                alt="Students studying"
                className="relative rounded-3xl object-cover h-[350px] w-full shadow-xl border border-[--border]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-24" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Values"
            title="Guiding Principles That Shape Every Learner"
            subtitle="At Kailali National School, our values reflect who we are and what we stand for — in every classroom, interaction, and experience."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniquePoints.map((v, i) => (
              <motion.div
                key={i}
                className="card p-6 hover-lift group"
                {...fadeInUp}
                transition={{ delay: i * 0.06 }}
              >
                <div
                  className={`icon-box ${
                    v.color === "blue" ? "icon-box--blue" : "icon-box--emerald"
                  } mb-5 group-hover:scale-105 transition-transform duration-300`}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-bold text-[--text] mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.95rem" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-[--text-sec] leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="section-wrapper overflow-hidden">
        <SectionHeader
          badge="Our History"
          title="Timeline of Excellence"
          subtitle="A journey of growth, achievements, and milestones since our founding in 1999."
          className="mb-16"
        />

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Vertical line */}
          <div
            className="absolute left-[29px] sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden sm:block"
            style={{ background: "linear-gradient(180deg, var(--blue), var(--emerald), var(--blue))", opacity: 0.2 }}
          />
          <div
            className="absolute left-[29px] top-0 bottom-0 w-0.5 sm:hidden"
            style={{ background: "linear-gradient(180deg, var(--blue), var(--emerald), var(--blue))", opacity: 0.2 }}
          />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={event.year}
                  className={`flex flex-col sm:flex-row relative items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Icon Circle */}
                  <div
                    className="absolute left-0 sm:left-1/2 top-1.5 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center -translate-x-0 sm:-translate-x-1/2 z-10 text-white"
                    style={{
                      background: "linear-gradient(135deg, var(--blue), var(--navy))",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    {event.icon}
                  </div>

                  {/* Left spacing for alignment */}
                  <div className="w-full sm:w-1/2 px-10 sm:px-8" />

                  {/* Content card */}
                  <div className="w-full sm:w-1/2 px-10 sm:px-8 mt-2 sm:mt-0">
                    <div
                      className="card p-5 hover-lift relative"
                      style={{ border: "1px solid var(--border)" }}
                    >
                      <span
                        className="text-xs font-extrabold uppercase tracking-widest text-[--blue] mb-1.5 block"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {event.year}
                      </span>
                      <h3
                        className="font-bold text-[--text] text-base mb-2"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-sm text-[--text-sec] leading-relaxed">
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

      {/* Commitments Section */}
      <section className="py-20 sm:py-24" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t.about.commitments.title}
            title="Our Professional Promises"
            subtitle={t.about.commitments.subtitle}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((c, i) => (
              <motion.div
                key={i}
                className="card p-6 border hover-lift flex flex-col h-full"
                style={{
                  background: c.gradient,
                  borderColor: c.border,
                }}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}
                >
                  <span style={{ color: "var(--blue)" }}>{c.icon}</span>
                </div>
                <h3
                  className="font-bold text-[--text] mb-4 text-base"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {c.title}
                </h3>
                <ul className="space-y-3 flex-1">
                  {c.points.map((pt, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-[--text-sec] leading-relaxed">
                      <CheckCircle size={14} className="shrink-0 mt-0.5 text-[--emerald]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
