import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown, BookOpen, Users, ClipboardList, Trophy,
  Globe, GraduationCap, Microscope, Briefcase, Scale,
  ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles
} from "lucide-react";
import Academy from "../assets/images/kailali-home.png";
import siteText from "../content/siteText";
import SectionHeader from "../components/ui/SectionHeader";

const Academics = () => {
  const t = siteText;
  const navigate = useNavigate();
  const [activeLevel, setActiveLevel] = useState("preprimary");
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const academicLevels = {
    preprimary: {
      title: t.academics.levels.preprimary.title,
      subtitle: t.academics.levels.preprimary.subtitle,
      icon: <Layers size={18} />,
      color: "var(--blue)",
      bgLight: "rgba(37,99,235,0.04)",
      borderLight: "rgba(37,99,235,0.12)",
      iconBox: "icon-box--blue",
      overview: t.academics.levels.preprimary.overview,
      features: [
        {
          title: t.academics.levels.preprimary.features[0].title,
          description: t.academics.levels.preprimary.features[0].description,
          icon: <BookOpen size={20} />,
        },
        {
          title: t.academics.levels.preprimary.features[1].title,
          description: t.academics.levels.preprimary.features[1].description,
          icon: <Users size={20} />,
        },
        {
          title: t.academics.levels.preprimary.features[2].title,
          description: t.academics.levels.preprimary.features[2].description,
          icon: <Globe size={20} />,
        },
        {
          title: t.academics.levels.preprimary.features[3].title,
          description: t.academics.levels.preprimary.features[3].description,
          icon: <Trophy size={20} />,
        },
      ],
      facilities: [
        {
          title: t.academics.levels.preprimary.facilities[0].title,
          description: t.academics.levels.preprimary.facilities[0].description,
          icon: <ClipboardList size={20} />,
        },
        {
          title: t.academics.levels.preprimary.facilities[1].title,
          description: t.academics.levels.preprimary.facilities[1].description,
          icon: <Globe size={20} />,
        },
      ],
      curriculum: t.academics.levels.preprimary.curriculum,
    },
    primary: {
      title: t.academics.levels.primary.title,
      subtitle: t.academics.levels.primary.subtitle,
      icon: <BookOpen size={18} />,
      color: "var(--emerald)",
      bgLight: "rgba(16,185,129,0.04)",
      borderLight: "rgba(16,185,129,0.12)",
      iconBox: "icon-box--emerald",
      overview: t.academics.levels.primary.overview,
      features: [
        {
          title: t.academics.levels.primary.features[0].title,
          description: t.academics.levels.primary.features[0].description,
          icon: <BookOpen size={20} />,
        },
        {
          title: t.academics.levels.primary.features[1].title,
          description: t.academics.levels.primary.features[1].description,
          icon: <ClipboardList size={20} />,
        },
        {
          title: t.academics.levels.primary.features[2].title,
          description: t.academics.levels.primary.features[2].description,
          icon: <Globe size={20} />,
        },
        {
          title: t.academics.levels.primary.features[3].title,
          description: t.academics.levels.primary.features[3].description,
          icon: <Users size={20} />,
        },
      ],
      teachingTools: [
        {
          title: t.academics.levels.primary.teachingTools[0].title,
          description: t.academics.levels.primary.teachingTools[0].description,
          icon: <Globe size={20} />,
        },
        {
          title: t.academics.levels.primary.teachingTools[1].title,
          description: t.academics.levels.primary.teachingTools[1].description,
          icon: <ClipboardList size={20} />,
        },
      ],
      coScholastic: [
        {
          title: t.academics.levels.primary.coScholastic[0].title,
          description: t.academics.levels.primary.coScholastic[0].description,
          icon: <Trophy size={20} />,
        },
        {
          title: t.academics.levels.primary.coScholastic[1].title,
          description: t.academics.levels.primary.coScholastic[1].description,
          icon: <Users size={20} />,
        },
      ],
      curriculum: t.academics.levels.primary.curriculum,
    },
    secondary: {
      title: t.academics.levels.secondary.title,
      subtitle: t.academics.levels.secondary.subtitle,
      icon: <GraduationCap size={18} />,
      color: "var(--blue)",
      bgLight: "rgba(37,99,235,0.04)",
      borderLight: "rgba(37,99,235,0.12)",
      iconBox: "icon-box--blue",
      overview: t.academics.levels.secondary.overview,
      features: [
        {
          title: t.academics.levels.secondary.features[0].title,
          description: t.academics.levels.secondary.features[0].description,
          icon: <BookOpen size={20} />,
        },
        {
          title: t.academics.levels.secondary.features[1].title,
          description: t.academics.levels.secondary.features[1].description,
          icon: <ClipboardList size={20} />,
        },
        {
          title: t.academics.levels.secondary.features[2].title,
          description: t.academics.levels.secondary.features[2].description,
          icon: <Globe size={20} />,
        },
        {
          title: t.academics.levels.secondary.features[3].title,
          description: t.academics.levels.secondary.features[3].description,
          icon: <Trophy size={20} />,
        },
      ],
      practicalLabs: [
        {
          title: t.academics.levels.secondary.practicalLabs[0].title,
          description: t.academics.levels.secondary.practicalLabs[0].description,
          icon: <ClipboardList size={20} />,
        },
      ],
      curriculum: t.academics.levels.secondary.curriculum,
    },
    senior: {
      title: t.academics.levels.senior.title,
      subtitle: t.academics.levels.senior.subtitle,
      icon: <Sparkles size={18} />,
      color: "var(--emerald)",
      bgLight: "rgba(16,185,129,0.04)",
      borderLight: "rgba(16,185,129,0.12)",
      iconBox: "icon-box--emerald",
      overview: t.academics.levels.senior.overview,
      features: [
        {
          title: t.academics.levels.senior.features[0].title,
          description: t.academics.levels.senior.features[0].description,
          icon: <Microscope size={20} />,
        },
        {
          title: t.academics.levels.senior.features[1].title,
          description: t.academics.levels.senior.features[1].description,
          icon: <Briefcase size={20} />,
        },
        {
          title: t.academics.levels.senior.features[2].title,
          description: t.academics.levels.senior.features[2].description,
          icon: <Scale size={20} />,
        },
        {
          title: t.academics.levels.senior.features[3].title,
          description: t.academics.levels.senior.features[3].description,
          icon: <GraduationCap size={20} />,
        },
      ],
      practicalLabs: [
        {
          title: t.academics.levels.senior.practicalLabs[0].title,
          description: t.academics.levels.senior.practicalLabs[0].description,
          icon: <ClipboardList size={20} />,
        },
      ],
      curriculum: t.academics.levels.senior.curriculum,
    },
  };

  const currentLevel = academicLevels[activeLevel];

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setOpenDropdown(false);
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Page Hero Section */}
      <section className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center">
        <img
          src={Academy}
          alt="Academics at Kailali National School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,31,51,0.85) 0%, rgba(16,42,67,0.7) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="pill-badge pill-badge--white mb-4 inline-flex">
              {t.academics.hero.tag}
            </span>
            <h1
              className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t.academics.hero.title1}{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #34D399, #10B981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.academics.hero.title2}
              </span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base mt-3 max-w-lg">
              {t.academics.hero.description}
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-xs text-white/50 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">Academics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* ── Selection Tabs (Desktop / Tablet) ── */}
        <div className="hidden md:flex justify-center mb-14 gap-2 bg-[--bg-alt] p-1.5 rounded-2xl border border-[--border] w-fit mx-auto">
          {Object.entries(academicLevels).map(([key, level]) => {
            const isSelected = activeLevel === key;
            return (
              <button
                key={key}
                onClick={() => handleLevelChange(key)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-white text-[--navy] shadow-md border border-[--border]"
                    : "text-[--text-sec] hover:text-[--navy] hover:bg-white/40"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span style={{ color: isSelected ? "var(--blue)" : "inherit" }}>
                  {level.icon}
                </span>
                {level.title}
              </button>
            );
          })}
        </div>

        {/* ── Mobile Level Selection Dropdown ── */}
        <div className="md:hidden mb-10" ref={dropdownRef}>
          <div className="max-w-sm mx-auto relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl border border-[--border] bg-white text-[--navy] font-bold shadow-sm hover:bg-[--bg-alt] transition-all duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="flex items-center gap-2">
                <span className="text-[--blue]">{currentLevel.icon}</span>
                <span>{currentLevel.title}</span>
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${openDropdown ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-[--border] bg-white shadow-xl z-20 overflow-hidden"
                >
                  {Object.entries(academicLevels).map(([key, level]) => (
                    <button
                      key={key}
                      onClick={() => handleLevelChange(key)}
                      className={`w-full text-left px-5 py-4 hover:bg-[--bg-alt] transition-all duration-200 flex items-center gap-3 border-b last:border-0 border-[--border] ${
                        activeLevel === key ? "bg-blue-50 text-[--blue]" : "text-[--text]"
                      }`}
                    >
                      <span>{level.icon}</span>
                      <span className="font-semibold text-sm">{level.title}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Content Card (Overview) ── */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-6 sm:p-10 mb-14 shadow-xl border"
          style={{
            background: currentLevel.bgLight,
            borderColor: currentLevel.borderLight,
          }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="pill-badge inline-flex"
              style={{ background: "white", color: "var(--navy)", border: "1px solid var(--border)" }}
            >
              Academic Overview
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[--text] mb-5 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {currentLevel.title} — <span style={{ color: "var(--blue)" }}>{currentLevel.subtitle}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-[--text-sec] leading-relaxed text-justify whitespace-pre-line">
            {currentLevel.overview}
          </p>
        </motion.div>

        {/* ── Subject / Approach Feature Grid ── */}
        <div className="mb-14">
          <SectionHeader
            badge={activeLevel === "preprimary" ? "Our Approach" : "Key Curriculum Areas"}
            title={activeLevel === "preprimary" ? t.academics.sections.curriculumApproach : t.academics.sections.coreSubjects}
            subtitle="Thoughtfully structured educational pathways built on high academic standards and experienced mentorship."
            center={false}
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentLevel.features.map((feature, idx) => (
              <div
                key={idx}
                className="card p-6 border border-[--border] hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className={`icon-box ${currentLevel.iconBox} mb-0 shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4
                      className="text-base sm:text-lg font-bold text-[--text] mb-1.5"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Facilities (Specific to Pre-Primary) ── */}
        {currentLevel.facilities && (
          <div className="mb-14">
            <SectionHeader
              badge="Specialized Spaces"
              title={t.academics.sections.facilitiesActivities}
              subtitle="Safe, vibrant, and interactive facilities designed exclusively for early development."
              center={false}
              className="mb-8"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentLevel.facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="card p-6 border border-[--border] hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className={`icon-box ${currentLevel.iconBox} mb-0 shrink-0`}>
                      {facility.icon}
                    </div>
                    <div>
                      <h4
                        className="text-base sm:text-lg font-bold text-[--text] mb-1.5"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {facility.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Teaching Tools (Specific to Primary) ── */}
        {currentLevel.teachingTools && (
          <div className="mb-14">
            <SectionHeader
              badge="Instructional Materials"
              title={t.academics.sections.teachingTools}
              subtitle="Enriching student engagement through advanced digital boards, hands-on toolkits, and dynamic resources."
              center={false}
              className="mb-8"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentLevel.teachingTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="card p-6 border border-[--border] hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className={`icon-box ${currentLevel.iconBox} mb-0 shrink-0`}>
                      {tool.icon}
                    </div>
                    <div>
                      <h4
                        className="text-base sm:text-lg font-bold text-[--text] mb-1.5"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {tool.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Co-Scholastic Focus (Specific to Primary) ── */}
        {currentLevel.coScholastic && (
          <div className="mb-14">
            <SectionHeader
              badge="Beyond Academics"
              title={t.academics.sections.coScholastic}
              subtitle="Fostering teamwork, creativity, and leadership through an array of co-scholastic activities."
              center={false}
              className="mb-8"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentLevel.coScholastic.map((activity, idx) => (
                <div
                  key={idx}
                  className="card p-6 border border-[--border] hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className={`icon-box ${currentLevel.iconBox} mb-0 shrink-0`}>
                      {activity.icon}
                    </div>
                    <div>
                      <h4
                        className="text-base sm:text-lg font-bold text-[--text] mb-1.5"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {activity.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Academic Rigor (Specific to Secondary / Senior) ── */}
        {currentLevel.practicalLabs && (
          <div className="mb-14">
            <SectionHeader
              badge="Science & Tech Focus"
              title={t.academics.sections.academicRigor}
              subtitle="Applying theory to practice inside physics, chemistry, biology, and computer intelligence labs."
              center={false}
              className="mb-8"
            />
            <div className="grid grid-cols-1 gap-6">
              {currentLevel.practicalLabs.map((lab, idx) => (
                <div
                  key={idx}
                  className="card p-6 border border-[--border] hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className={`icon-box ${currentLevel.iconBox} mb-0 shrink-0`}>
                      {lab.icon}
                    </div>
                    <div>
                      <h4
                        className="text-base sm:text-lg font-bold text-[--text] mb-1.5"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {lab.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
                        {lab.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Curriculum Highlights ── */}
        <div className="card p-6 sm:p-10 border border-[--border] mb-14 shadow-lg">
          <SectionHeader
            badge="Highlights"
            title={t.academics.sections.curriculumHighlights}
            subtitle="A quick checklist of core strengths offered in our structured educational blueprint."
            center={false}
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.isArray(currentLevel.curriculum) && currentLevel.curriculum.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl bg-[--bg-alt] border border-[--border] hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <CheckCircle2 size={16} className="text-[--emerald] shrink-0" />
                <span className="text-xs sm:text-sm text-[--text-sec] font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Admission CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl p-8 sm:p-12 text-center border relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(16,185,129,0.04) 100%)",
            borderColor: "rgba(37,99,235,0.15)",
          }}
        >
          <h3
            className="text-2xl sm:text-3xl font-extrabold text-[--navy] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.academics.cta.title}
          </h3>
          <p className="text-sm sm:text-base text-[--text-sec] mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.academics.cta.description}
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="btn btn-primary btn-lg"
          >
            {t.academics.cta.button} <ArrowRight size={18} />
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Academics;
