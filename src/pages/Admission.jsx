import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import schoolImage from "../assets/images/school.jpg";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Phone,
  ChevronRight,
  Clock,
  Mail,
  AlertCircle
} from "lucide-react";
import siteText from "../content/siteText";

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
    description: "Nurturing early childhood years through play-based activities, Montessori teaching, and basic literacy.",
    iconColor: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    title: "Secondary (Grade 6–10)",
    description: "Empowering conceptual clarity in core subjects, practical laboratory work, SEE prep, and physical growth.",
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Plus Two Program",
    description: "Preparing students for global education and future career tracks with dedicated higher secondary faculty.",
    iconColor: "text-blue-600 bg-blue-50 border-blue-100",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45, ease: "easeOut" },
};

const Admission = () => {
  const t = siteText;

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── CLEAN WHITE HERO WITH HIGH-QUALITY BACKGROUND IMAGE ── */}
      <section className="relative h-72 sm:h-80 w-full overflow-hidden flex items-center bg-slate-100 border-b border-slate-200">
        <img
          src={schoolImage}
          alt="Admission to Kailali National School Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft, crisp light-mode gradient layer to maximize text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-slate-900 text-3xl sm:text-5xl font-black tracking-tight">
              Admissions Open
            </h1>
            
            {/* Breadcrumb Links */}
            <div className="flex items-center gap-2 mt-6 text-xs text-slate-500 font-semibold uppercase tracking-wider">
              <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <ChevronRight size={12} className="text-slate-400" />
              <span className="text-slate-800">Admission</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT LAYOUT ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        {/* Core Tracks & Steps Timeline Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Grade Level Highlights */}
          <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
              Academic Tracks
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Empowering Students at <span className="text-blue-600">Every Grade Level</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              We offer interactive pathways from Early Montessori through High School (+2) with custom support for board assessments, career placements, and critical learning tracks.
            </p>

            <div className="space-y-4 pt-2">
              {programCards.map((card, idx) => (
                <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-sm hover:border-slate-300 transition-colors flex flex-col sm:flex-row gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${card.iconColor}`}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-1 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Step-by-Step White Timeline Box */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 shadow-sm"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white border border-slate-200 text-slate-600 mb-4">
              Step-by-Step
            </span>
            <h3 className="text-slate-900 font-extrabold text-xl sm:text-2xl mb-8 tracking-tight">
              Enrollment Timeline
            </h3>

            <div className="space-y-6 relative">
              {/* Timeline Layout vertical linking line */}
              <div className="absolute left-[17px] top-3 bottom-3 w-0.5 bg-slate-200" />

              {admissionSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 relative">
                  <div className="w-9 h-9 rounded-full bg-white text-blue-600 border border-slate-250 flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-sm">
                    0{idx + 1}
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-bold text-sm text-slate-900 mb-1 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Requirements Matrix & Counter Desk Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Document Verification Checklist */}
          <motion.div {...fadeInUp} className="lg:col-span-7 border border-slate-200 p-6 sm:p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                Documents List
              </span>
              <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight mb-3">
                Required Verification Files
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal mb-6">
                Please prepare photocopies of these files before submitting the finalized application to our administrative counter.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note alert layout box */}
            <div className="mt-8 p-4 rounded-xl flex gap-3 text-xs bg-slate-50 border border-slate-200/60 text-slate-600">
              <AlertCircle size={15} className="text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">Note:</strong> Original Transfer and Character Certificates will be collected and kept at the school archives during final enrollment validation.
              </span>
            </div>
          </motion.div>

          {/* Right Card: Pure White Contact Desk Box */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-5 border border-slate-200 p-6 sm:p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                Admissions Desk
              </span>
              <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight mb-3">
                Need Assistance?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                Our customer desk is open during regular operational hours to guide you through school pricing structures, transport routing systems, and hostel allocations.
              </p>

              <ul className="space-y-4">
                <li>
                  <a href="tel:+97791540488" className="flex items-center gap-3 text-slate-800 hover:text-blue-600 transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0 group-hover:border-blue-100 group-hover:bg-white transition-all">
                      <Phone size={13} className="text-blue-600" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-850">+977-91-540488</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@kailalinational.edu.np" className="flex items-center gap-3 text-slate-800 hover:text-blue-600 transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0 group-hover:border-blue-100 group-hover:bg-white transition-all">
                      <Mail size={13} className="text-blue-600" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-850 truncate">contact@kailalinational.edu.np</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0">
                    <Clock size={13} className="text-slate-500" />
                  </div>
                  <span className="font-medium text-slate-700">Sun – Fri: 9:00 AM – 4:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Bottom Form Actions Grid Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/10 active:scale-98 transition-all">
                Contact Office <ArrowRight size={13} />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
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