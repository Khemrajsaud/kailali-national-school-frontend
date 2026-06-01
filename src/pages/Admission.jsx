import { ArrowRight, CheckCircle2, FileText, GraduationCap, Phone, School2, UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";
import siteText from "../content/siteText";

const admissionSteps = [
  "Fill out the admission inquiry form or contact the school office.",
  "Submit required documents and previous academic records.",
  "Attend the entrance interaction / interview if required.",
  "Confirm admission by completing the fee and enrollment process.",
];

const requirements = [
  "Completed admission application form",
  "Birth certificate copy",
  "Previous school transfer certificate / report card",
  "Recent passport-size photographs",
  "Guardian / parent contact details",
];

const programCards = [
  {
    title: "Primary School",
    description: "A strong foundation with activity-based learning, reading, writing, and early numeracy.",
  },
  {
    title: "Secondary School",
    description: "Focused academic preparation, science, computer, and life skills for student growth.",
  },
  {
    title: "+2 Program",
    description: "Higher secondary learning with guidance for future study and career development.",
  },
];

const Admission = () => {
  const t = siteText;

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <section className="relative overflow-hidden border-b border-(--border) bg-linear-to-b from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,23,59,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(31,90,120,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--primary)/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-(--primary) shadow-sm">
              <School2 size={14} />
              {t.admission.popup.new}
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Admissions at Kailali National School</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-(--muted) sm:text-base">
              Join a learning environment built for strong academics, character development, and future-ready skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20">
                Contact Office
                <ArrowRight size={16} />
              </Link>
             
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-3xl border border-(--border) bg-(--card) p-6 shadow-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-(--primary)/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-(--primary)">
              <GraduationCap size={14} />
              Why Choose Us
            </div>
            <h2 className="mt-5 text-2xl font-black sm:text-3xl">Open admissions for Nursery to +2 programs</h2>
            <p className="mt-4 text-sm leading-relaxed text-(--muted) sm:text-base">
              We provide a balanced learning journey with supportive teachers, modern facilities, and a clear pathway from early grades to higher secondary education.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {programCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-(--border) bg-slate-50 p-4">
                  <h3 className="text-base font-bold text-(--text)">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-(--muted)">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-(--border) bg-[#1f5a78] p-6 text-white shadow-lg sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/90">
              <FileText size={14} />
              Admission Process
            </div>
            <h2 className="mt-5 text-2xl font-black sm:text-3xl">Simple steps to get started</h2>
            <div className="mt-6 space-y-4">
              {admissionSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl bg-white/8 p-4 backdrop-blur-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1f5a78] font-black">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-white/90">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-(--border) bg-(--card) p-6 shadow-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-red-700">
              <UserRoundPlus size={14} />
              Required Documents
            </div>
            <ul className="mt-6 space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-(--muted)">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#b0173b]" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="apply" className="rounded-3xl border border-(--border) bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-(--primary)/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-(--primary)">
                  <Phone size={14} />
                  Need Help?
                </div>
                <h2 className="mt-4 text-2xl font-black sm:text-3xl">Talk to the admissions team</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-(--muted) sm:text-base">
                  Call the school office or visit us for guidance about class placement, documents, fees, and enrollment.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-(--muted)">Academic Session</p>
                <p className="mt-1 text-lg font-black text-(--text)">{t.admission.popup.year}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20">
                Go to Contact
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-(--primary) px-6 py-3 text-sm font-bold text-(--primary)">
                Learn About School
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admission;