import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  GraduationCap,
  Phone,
  School,
  UserRoundPlus,
  ChevronRight,
  HelpCircle,
  Clock,
  MapPin,
  Mail,
  Download,
  AlertCircle
} from "lucide-react";
import siteText from "../content/siteText";
import SectionHeader from "../components/ui/SectionHeader";
import homepage from "../assets/images/kailali-home.png";

const admissionSteps = [
  {
    title: "Inquiry & Visit",
    desc: "Fill out the online admission inquiry form or visit the school admissions office directly for counseling.",
  },
  {
    title: "Required Documents",
    desc: "Submit all necessary documents, including previous school records, transfer certificates, and passport photos.",
  },
  {
    title: "Entrance Assessment",
    desc: "Appear for the written entrance interaction test / interview on the scheduled date.",
  },
  {
    title: "Confirm Enrollment",
    desc: "Complete the fee payment and enrollment registration formalities to finalize class placement.",
  },
];

const requirements = [
  "Completed admission application form",
  "Birth certificate copy (officially stamped)",
  "Transfer certificate (TC) from the previous school",
  "Last grade mark sheet / report card copy",
  "Recent passport-size photographs of the student (4 copies)",
  "Recent passport-size photographs of parents / guardians (1 copy each)",
  "Parent's citizenship copy (for Nepali citizens)",
];

const programCards = [
  {
    title: "Pre-Primary / Primary",
    age: "Age 3 – 10 years",
    description: "Nurturing early childhood years through play-based activities, Montessori teaching, and basic literacy.",
    color: "var(--blue)",
    iconBg: "rgba(37,99,235,0.08)",
  },
  {
    title: "Secondary (Grade 6–10)",
    age: "Age 11 – 15 years",
    description: "Empowering conceptual clarity in core subjects, practical laboratory work, SEE prep, and physical growth.",
    color: "var(--emerald)",
    iconBg: "rgba(16,185,129,0.08)",
  },
  {
    title: "Plus Two Program",
    age: "Science, Management & Law",
    description: "Preparing students for global education and future career tracks with dedicated higher secondary faculty.",
    color: "var(--blue)",
    iconBg: "rgba(37,99,235,0.08)",
  },
];

const Admission = () => {
  const t = siteText;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center">
        <img
          src={homepage}
          alt="Admission to Kailali National School"
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
            
            <h1
              className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Admissions Open
            </h1>
           

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-xs text-white/50 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">Admission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        
        {/* Core Info Split Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Programs overview left */}
          <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6">
            <span className="pill-badge pill-badge--navy inline-flex">Academic Tracks</span>
            <h2 className="text-h1 text-[--text] mt-2 mb-6">
              Empowering Students at{" "}
              <span style={{ color: "var(--blue)" }}>Every Grade Level</span>
            </h2>
            <p className="text-[--text-sec] leading-relaxed mb-8 text-[15px]">
              We offer interactive pathways from Early Montessori through High School (+2) with custom support for board assessments, career placements, and critical learning tracks.
            </p>

            <div className="space-y-4">
              {programCards.map((card, idx) => (
                <div
                  key={idx}
                  className="card p-5 border border-[--border] hover-lift flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: card.iconBg, color: card.color }}
                  >
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3
                        className="font-bold text-[--text] text-base"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {card.title}
                      </h3>
                     
                    </div>
                    <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Admission steps right */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 text-white shadow-xl"
            style={{
              background: "linear-gradient(135deg, var(--navy) 0%, var(--blue-dark) 100%)",
            }}
          >
            <span className="pill-badge pill-badge--white inline-flex mb-4">
              Step-by-Step
            </span>
            <h3
              className="text-white font-extrabold text-xl sm:text-2xl mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Enrollment Timeline
            </h3>

            <div className="space-y-6 relative">
              {/* timeline line */}
              <div className="absolute left-[17px] top-4 bottom-4 w-0.5 bg-white/10" />

              {admissionSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 relative">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border-2"
                    style={{
                      background: "var(--navy)",
                      color: "var(--emerald)",
                      borderColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm text-white mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {step.title}
                    </h4>
                    <p className="text-xs text-white/65 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Required Documents / Prospectus Download */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Documents checklist left */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-7 card p-6 sm:p-8 border border-[--border] flex flex-col justify-between"
          >
            <div>
              <span className="pill-badge pill-badge--navy inline-flex mb-4">Documents List</span>
              <h3
                className="font-extrabold text-xl sm:text-2xl text-[--text] mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Required Verification Files
              </h3>
              <p className="text-sm text-[--text-sec] leading-relaxed mb-6">
                Please prepare photocopies of these files before submitting the finalized application to our administrative counter.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-[--text-sec]">
                    <CheckCircle2 size={16} className="text-[--emerald] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note banner */}
            <div
              className="mt-8 p-4 rounded-xl flex gap-3 text-xs text-[--text-sec]"
              style={{ background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.12)" }}
            >
              <AlertCircle size={16} className="text-[--blue] shrink-0" />
              <span>
                <strong>Note:</strong> Original Transfer and Character Certificates will be collected and kept at the school archives during final confirmation.
              </span>
            </div>
          </motion.div>

          {/* Admission support / Contact Card right */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 card p-6 sm:p-8 border border-[--border] flex flex-col justify-between"
            style={{ background: "var(--bg-alt)" }}
          >
            <div>
              <span className="pill-badge pill-badge--navy inline-flex mb-4">Admissions Desk</span>
              <h3
                className="font-extrabold text-xl sm:text-2xl text-[--text] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Need Assistance?
              </h3>
              <p className="text-sm text-[--text-sec] leading-relaxed mb-6">
                Our customer desk is open during regular hours to guide you through school structures, fees, transport, and hostels.
              </p>

              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+97791540488"
                    className="flex items-center gap-3 text-sm text-[--text] hover:text-[--blue] transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(37,99,235,0.08)" }}
                    >
                      <Phone size={14} className="text-[--blue]" />
                    </div>
                    <span className="font-semibold">+977-91-540488</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@kailalinational.edu.np"
                    className="flex items-center gap-3 text-sm text-[--text] hover:text-[--blue] transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(37,99,235,0.08)" }}
                    >
                      <Mail size={14} className="text-[--blue]" />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm truncate">contact@kailalinational.edu.np</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-[--text-sec]">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(37,99,235,0.08)" }}
                  >
                    <Clock size={14} className="text-[--blue]" />
                  </div>
                  <span>Sun – Fri: 9:00 AM – 4:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <Link to="/contact" className="btn btn-primary justify-center">
                Contact Office <ArrowRight size={14} />
              </Link>
              <Link to="/about" className="btn btn-secondary justify-center">
                About Campus
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default Admission;