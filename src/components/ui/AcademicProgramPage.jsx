import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, BookOpen, ChevronRight } from "lucide-react";
import siteText from "../../content/siteText";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stagger = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
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
  const accentVar = isEmerald ? "var(--emerald)" : "var(--blue)";
  const accentDark = isEmerald ? "var(--emerald-dark)" : "var(--blue-dark)";
  const accentLight = isEmerald ? "rgba(16,185,129,0.08)" : "rgba(37,99,235,0.08)";
  const accentBorder = isEmerald ? "rgba(16,185,129,0.2)" : "rgba(37,99,235,0.15)";
  const iconBoxClass = isEmerald ? "icon-box--emerald" : "icon-box--blue";

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)",
        }}
      >
        {/* Decorative dot grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Floating accent blobs */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: accentVar }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/50 font-medium mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
            
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {subtitle}
              </span>
            </motion.div>

            <motion.h1
              className="text-white mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-white/70 text-[15px] leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
            >
              {overview}
            </motion.p>

          </div>

          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {/* Accent frame */}
            <div
              className="absolute -inset-2 rounded-3xl opacity-30 blur-lg"
              style={{ background: `linear-gradient(135deg, ${accentVar}, transparent)` }}
            />
            <img
              src={heroImage}
              alt={heroAlt}
              className="relative w-full h-72 sm:h-80 lg:h-[420px] rounded-3xl object-cover shadow-2xl"
            />
            {/* Level badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl shadow-xl border flex items-center gap-3"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBoxClass}`}
              >
                <BookOpen size={18} />
              </div>
              <div>
                <div
                  className="font-bold text-[--text] text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {title}
                </div>
                <div className="text-[--text-sec] text-xs">{subtitle}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HIGHLIGHTS GRID ─────────────────────────────────── */}
      <section className="section-wrapper">
        <div className="text-center mb-12">
          <span
            className="pill-badge mb-4 inline-flex"
            style={{
              background: accentLight,
              color: accentVar,
              borderColor: accentBorder,
            }}
          >
            Program Features
          </span>
          <h2
            className="text-h2 text-[--text] mt-3"
          >
            What Makes This Program Special
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.article
              key={item.title}
              {...stagger(i * 0.08)}
              className="card p-6 hover-lift group"
            >
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
                style={{
                  background: accentLight,
                  color: accentVar,
                  border: `1px solid ${accentBorder}`,
                }}
              >
                {item.badge}
              </span>
              <h3
                className="font-bold text-[--text] mb-3"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.0625rem",
                }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[--text-sec] leading-relaxed">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── PROGRAM FOCUS + CURRICULUM ───────────────────────── */}
      <section className="py-20 sm:py-24" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Program Focus */}
            <motion.div {...fadeUp}>
              <div
                className="rounded-3xl p-8 sm:p-10 border h-full"
                style={{
                  background: `linear-gradient(135deg, ${accentLight} 0%, var(--card) 100%)`,
                  borderColor: accentBorder,
                }}
              >
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5"
                  style={{
                    background: "var(--card)",
                    color: accentVar,
                    border: `1px solid ${accentBorder}`,
                  }}
                >
                  Program Focus
                </span>
                <h3
                  className="text-h2 text-[--text] mb-4"
                >
                  {subtitle}
                </h3>
                <p className="text-[--text-sec] text-[15px] leading-relaxed">
                  {overview}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                  >
                    Contact Us <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/admission"
                    className="btn btn-secondary"
                  >
                    Admission Info
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Curriculum */}
            <motion.div {...stagger(0.15)}>
              <div className="card p-8 sm:p-10 h-full">
                <span
                  className="pill-badge mb-5 inline-flex"
                  style={{
                    background: accentLight,
                    color: accentVar,
                    borderColor: accentBorder,
                  }}
                >
                  Curriculum Highlights
                </span>
                <h3
                  className="text-h2 text-[--text] mb-6"
                >
                  What Students Learn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {curriculum.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:shadow-sm"
                      style={{
                        background: "var(--bg-alt)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0"
                        style={{ color: accentVar }}
                      />
                      <span className="text-sm font-medium text-[--text]">
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