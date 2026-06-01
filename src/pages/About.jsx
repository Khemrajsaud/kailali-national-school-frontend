import React from "react";
import {
  CheckCircle,
  Heart,
  Star,
  Target,
  Users,
  Lightbulb,
  Award,
  CalendarDays
} from "lucide-react";

import homepage from "../assets/images/kailali-home.png";
import siteText from "../content/siteText";
import { Link } from "react-router-dom";
import { motion } from "motion/react";


// --- ANIMATION SETTINGS ---
// Standard fade-and-slide animation for sections that appear as the user scrolls.
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};
const About = () => {
  // Use static site text
  const t = siteText;
  const uniquePoints = [
    {
      icon: <Lightbulb size={24} />,
      title: t.about.unique.innovative.title,
      description: t.about.unique.innovative.description,
    },
    {
      icon: <Users size={24} />,
      title: t.about.unique.holistic.title,
      description: t.about.unique.holistic.description,
    },
    {
      icon: <Heart size={24} />,
      title: t.about.unique.experienced.title,
      description: t.about.unique.experienced.description,
    },
    {
      icon: <Star size={24} />,
      title: t.about.unique.global.title,
      description: t.about.unique.global.description,
    },
    {
      icon: <Target size={24} />,
      title: t.about.unique.modern.title,
      description: t.about.unique.modern.description,
    },
    {
      icon: <Users size={24} />,
      title: t.about.unique.values.title,
      description: t.about.unique.values.description,
    },
  ];

  // List of high-level school commitments shown in the bottom section.
  const commitments = [
    {
      title: t.about.commitments.academic.title,
      points: t.about.commitments.academic.points,
    },
    {
      title: t.about.commitments.character.title,
      points: t.about.commitments.character.points,
    },
    {
      title: t.about.commitments.safety.title,
      points: t.about.commitments.safety.points,
    },
  ];

  const stats = [
    { number: "1000+", label: t.about.stats.students, color: "primary" },
    { number: "20+", label: t.about.stats.teachers, color: "accent" },
    { number: "25+", label: t.about.stats.years, color: "primary" },
    { number: "95%", label: t.about.stats.success, color: "accent" },
  ];


  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      {/* Hero Section */}
      <div className="relative h-44 sm:h-56 md:h-64 w-full overflow-hidden group">
        <img
          src={homepage}
          alt="About Pioneers Academy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/55" />
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-(--primary) h-12 sm:h-14 w-2 rounded-xs" />
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold">
                {t.about.hero}
              </h1>
            </div>
          </div>
        </div>
      </div>



      {/* --- CONTENT AREA --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-16 sm:space-y-20">

        {/* Intro: image left with badge, text right */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-fadeInUp">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <img src={homepage} alt="School" className="w-full h-full object-cover" />
              <div className="absolute left-6 bottom-6 inline-flex items-center gap-3 rounded-lg bg-white/90 px-4 py-2 shadow">
                <div className="rounded-full bg-(--primary) h-10 w-10 flex items-center justify-center text-white font-bold">3000+</div>
                <div className="text-sm">
                  <div className="text-xs text-(--muted)">Students Believe</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center rounded-full bg-(--primary)/8 px-4 py-2 text-xs font-bold uppercase tracking-widest text-(--primary)">ABOUT US</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-(--text)">Where Education Meets Excellence.</h2>
            <p className="mt-4 text-sm text-(--muted) leading-relaxed text-justify whitespace-pre-line">{t.about.intro.description}</p>
            <div className="mt-6 flex gap-4">
              <Link to="/admission" className="inline-block rounded-full bg-red-600 px-6 py-3 text-white font-semibold">ENROLL NOW</Link>
              <Link to="/prospectus" className="inline-block rounded-full border border-(--primary) px-6 py-3 text-(--primary) font-semibold">PROSPECTUS</Link>
            </div>
          </div>
        </section>

        {/* STATS SECTION
            Displays core school statistics with entry animations. */}
        <motion.section className="grid grid-cols-1 gap-4 sm:grid-cols-3" {...fadeInUp}>
          <motion.div
            className="rounded-xl border border-(--border) bg-(--card) p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-(--primary)/10 p-3 text-(--primary)">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,000+</div>
                <div className="text-sm text-(--muted)">{t.home.intro.students}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl border border-(--border) bg-(--card) p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-(--primary)/10 p-3 text-(--primary)">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-(--muted)">{t.home.intro.statsLabels.excellence}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl border border-(--border) bg-(--card) p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-(--primary)/10 p-3 text-(--primary)">
                <CalendarDays className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-(--muted)">{t.home.intro.years}</div>
              </div>
            </div>
          </motion.div>
        </motion.section>
        {/* mission and vision */}
        {/* MISSION & VISION SECTION - blue band */}
        <section className="rounded-xl overflow-hidden bg-[#1f5a78] text-white">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">SERVE QUALITY EDUCATION</div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">Our Mission and Vision</h3>

              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-xl bg-white/6 p-6">
                  <h4 className="text-lg font-bold">Our Mission</h4>
                  <p className="mt-2 text-sm text-white/90">{t.home.mission.description}</p>
                </div>

                <div className="rounded-xl bg-white/6 p-6">
                  <h4 className="text-lg font-bold">Our Vision</h4>
                  <p className="mt-2 text-sm text-white/90">{t.home.vision.description}</p>
                </div>
              </div>
            </div>

            <div>
              <img src={homepage} alt="Mission" className="w-full rounded-lg shadow-md object-cover h-64" />
            </div>
          </div>
        </section>

        {/* GUIDING PRINCIPLES / VALUES - split layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="inline-flex items-center rounded-full bg-(--primary)/8 px-3 py-1 text-xs font-bold uppercase tracking-widest text-(--primary)">CORE VALUES</div>
            <h3 className="mt-4 text-2xl font-bold">Guiding Principles That Shape Every Learner</h3>
            <p className="mt-4 text-sm text-(--muted) leading-relaxed">At kailali national school, our values reflect who we are and what we stand for — in every classroom, interaction, and experience.</p>
            <div className="mt-6">
              <Link to="/admission" className="inline-block rounded-full border border-(--primary) px-6 py-3 text-(--primary) font-semibold">APPLY NOW</Link>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: CheckCircle, title: 'Excellence', text: 'We strive for the highest standards in academics, teaching, and personal growth.' },
              { icon: Star, title: 'Integrity', text: 'We uphold honesty, fairness, and ethical behavior in everything we do.' },
              { icon: Heart, title: 'Growth', text: 'We support continuous learning and development to help students reach their full potential.' },
              { icon: Users, title: 'Responsibility', text: 'We promote accountability and encourage students to be socially and environmentally responsible.' },
              { icon: Lightbulb, title: 'Innovation', text: 'We foster creative thinking and forward-looking ideas to meet modern challenges.' },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="flex items-start gap-4 border-b border-(--border) pb-4">
                  <div className="rounded-full bg-(--card) p-3 text-(--primary)">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-(--text)">{v.title}</h5>
                    <p className="text-sm text-(--muted) mt-1">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


      </div>
    </div>
  );
};

export default About;
