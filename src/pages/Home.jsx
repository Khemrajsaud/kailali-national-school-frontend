import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  Coffee,
  Dumbbell,
  GraduationCap,
  Image,
  Lightbulb,
  Loader2,
  Monitor,
  Play,
  Quote,
  Target,
  Users,
  FlaskConical,
} from "lucide-react";
import home from "../assets/images/kailali-home.png";
import school from "../assets/images/kailali4.jpeg";
import gallary1 from "../assets/images/kailali1.jpeg";
import gallary2 from "../assets/images/kailali2.jpeg";
import gallary3 from "../assets/images/kailali3.jpeg";
import gallary4 from "../assets/images/kailali4.jpeg";
import principal from "../assets/images/dummyimage.png";
import siteText from "../content/siteText";
import { apiUrl } from "../config/api";
import smartclassroom from "../assets/images/smartclassroom.jpg";
import computerlab from "../assets/images/computerlab.jpg";
import scienceLab from "../assets/images/sciencelab.jpg";

const API_URL = apiUrl("/api/news");

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Home = () => {
  const t = siteText;
  const navigate = useNavigate();
  const marqueeItems = [
    "Kailali National School",
    "Admissions Open",
    "Quality Education",
    "Future Leaders",
  ];

  const [homeNews, setHomeNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    const fetchHomeNews = async () => {
      try {
        setNewsLoading(true);
        const res = await axios.get(API_URL);
        setHomeNews((res.data || []).slice(0, 3));
      } catch (error) {
        console.error("Error fetching home news:", error);
      } finally {
        setNewsLoading(false);
      }
    };

    fetchHomeNews();
  }, []);

  const getPreviewText = (html = "") => {
    const plainText = html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    return plainText.length <= 150 ? plainText : `${plainText.slice(0, 150)}...`;
  };

  const programCards = [
    { title: "Primary School", image: gallary1, description: t.home.academics.primary.description },
    { title: "Secondary School", image: gallary2, description: t.home.academics.secondary.description },
    { title: "+2 Program", image: gallary3, description: t.home.academics.explorePrograms },
  ];

  const facilityCards = [
    { title: t.home.facilities.smartClassrooms, image: smartclassroom },
    { title: t.home.facilities.scienceLabs, image: scienceLab },
    { title: t.home.facilities.computerLab, image: computerlab },
  ];

  const testimonials = [
    { name: "Student Voice", role: "Grade 10", quote: "The teachers guide us closely and make learning feel practical and motivating." },
    { name: "Parent Voice", role: "Guardian", quote: "The school environment is disciplined, caring, and focused on overall growth." },
    { name: "Alumni Voice", role: "Former Student", quote: "The school gave me confidence, strong fundamentals, and a clear path forward." },
    { name: "Learner Voice", role: "Class 9", quote: "I enjoy the activities, smart learning, and support from teachers every day." },
  ];

  const faqItems = [
    "What academic programs are available?",
    "How can I apply for admission?",
    "What documents are required for enrollment?",
    "Where is Kailali National School located?",
  ];

  const leadershipMembers = [
    { name: "Chairperson", role: "School Leadership" },
    { name: "Principal", role: "Academic Head" },
    { name: "Coordinator", role: "Student Support" },
    { name: "Admin Lead", role: "Administration" },
    { name: "Advisor", role: "Guidance Team" },
  ];

  return (
    <div className="bg-[#f4f8fb] text-(--text) pb-16 transition-colors">
      <section className="group relative min-h-[84vh] overflow-hidden border-b border-slate-200">
        <img
          src={home}
          alt="School building"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.7] transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(185,23,59,0.28),transparent_28%)]" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl flex-col justify-between px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
          <div className="flex flex-1 items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="max-w-2xl text-white"
              >
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/90">
                  Kailali National School
                </div>
                <h1 className="mt-5 max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {t.home.hero.title}
                </h1>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/88 sm:text-base lg:text-lg">
                  {t.home.hero.subtitle}
                </p>
                
              </motion.div>

              
            </div>
          </div>

          <div className="hero-marquee hero-marquee--hero">
            <div className="hero-marquee-track hero-marquee-track--wide">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={`${item}-${index}`} className="hero-marquee-item hero-marquee-item--hero">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:space-y-16 sm:px-6 sm:py-14" id="about-preview">
        <motion.section
          className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-[#1f5a78] p-6 text-white shadow-xl md:grid-cols-2 md:gap-12 sm:p-8"
          {...fadeInUp}
        >
          <div className="space-y-5">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/90">
              About Us
            </div>
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              {t.home.intro.welcome} <span className="text-white/95">{t.home.intro.welcomeMessage}</span>
            </h2>
            <p className="text-sm leading-relaxed text-white/88 opacity-90 sm:text-base text-justify">
              {t.home.intro.description}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1f5a78] shadow-lg"
            >
              ABOUT US <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            <img src={school} alt="School campus" className="h-80 w-full rounded-3xl object-cover shadow-xl" />
          </div>
        </motion.section>

        <motion.section className="grid grid-cols-1 gap-4 sm:grid-cols-3" {...fadeInUp}>
          {[
            { id: 1, val: "1,000+", label: t.home.intro.students, icon: <Users size={28} />, delay: 0 },
            { id: 2, val: "100%", label: t.home.intro.statsLabels.excellence, icon: <Award size={28} />, delay: 0.1 },
            { id: 3, val: "20+", label: t.home.intro.years, icon: <CalendarDays size={28} />, delay: 0.2 },
          ].map((stat) => (
            <motion.div
              key={stat.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md border-b-4 border-b-[#b0173b]/30"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: stat.delay }}
            >
              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-[#b0173b]/10 p-4 text-[#b0173b] shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight">{stat.val}</div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="overflow-hidden rounded-3xl bg-[#b0173b] p-6 text-white shadow-xl sm:p-8"
          {...fadeInUp}
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-2">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em]">
                Serve Quality Education
              </div>
              <h3 className="mt-5 text-2xl font-black sm:text-3xl">Our Mission and Vision</h3>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <h4 className="font-bold">Our Mission</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{t.home.mission.description}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <h4 className="font-bold">Our Vision</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{t.home.vision.description}</p>
                </div>
              </div>
            </div>
            <img src={school} alt="Mission section" className="h-72 w-full rounded-2xl object-cover shadow-lg" />
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center rounded-full border border-[#1f5a78]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#1f5a78] shadow-sm">
              NEB & TU Affiliated Programs
            </div>
            <h2 className="mt-4 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Academic Programs
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-600 opacity-90 sm:text-base">
              A strong foundation from the early grades through higher secondary education.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {programCards.map((program, idx) => (
              <motion.article
                key={program.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 bg-[#b0173b] px-4 py-3 text-sm font-bold text-white">
                    {program.title}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">{program.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center rounded-full border border-[#1f5a78]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#1f5a78] shadow-sm">
              College Facilities
            </div>
            <h2 className="mt-4 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Facilities at Kailali National School
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {facilityCards.map((facility, idx) => (
              <motion.article
                key={facility.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={facility.image} alt={facility.title} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-lg font-bold">{facility.title}</div>
                  <p className="mt-1 text-xs text-white/80">Modern spaces for better learning.</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="overflow-hidden rounded-3xl bg-[#b0173b] p-6 text-white shadow-xl sm:p-8" {...fadeInUp}>
          <div className="mb-6 text-center">
            <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em]">
              Experience Beyond the Classroom
            </div>
            <h2 className="mt-4 text-2xl font-black sm:text-3xl">Experience Kailali National School</h2>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/25">
            <img src={school} alt="School event" className="h-104 w-full object-cover opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#b0173b] shadow-xl">
                <Play size={24} fill="currentColor" />
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]" {...fadeInUp}>
          <div className="grid grid-cols-2 gap-4">
            <img src={principal} alt="Students" className="h-60 w-full rounded-2xl object-cover shadow-lg" />
            <img src={gallary2} alt="Classroom" className="h-60 w-full rounded-2xl object-cover shadow-lg" />
            <img src={gallary3} alt="Activities" className="h-60 w-full rounded-2xl object-cover shadow-lg" />
            <img src={gallary4} alt="Campus" className="h-60 w-full rounded-2xl object-cover shadow-lg" />
          </div>
          <div>
            <div className="inline-flex items-center rounded-full border border-[#1f5a78]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#1f5a78] shadow-sm">
              Why Choose Us
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">What Makes Kailali the Best Choice</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Our school blends academic excellence, character building, and modern learning spaces to help every student grow with confidence.
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Strong academic support and guidance",
                "Modern classrooms, labs, and facilities",
                "Balanced learning with discipline and care",
                "Activities that build leadership and confidence",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#b0173b]" size={18} />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button onClick={() => navigate("/about")} className="inline-flex items-center gap-2 rounded-full border border-[#1f5a78] px-6 py-3 text-sm font-bold text-[#1f5a78]">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section className="bg-[#1f5a78] rounded-3xl p-6 text-white shadow-xl sm:p-8" {...fadeInUp}>
          <div className="mb-8 text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em]">
              What Students Say
            </div>
            <h2 className="mt-4 text-2xl font-black sm:text-3xl">What Student Say About Kailali National School</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {testimonials.map((item, idx) => (
              <div key={item.name} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white font-black text-[#1f5a78]">{idx + 1}</div>
                <Quote className="mb-3 text-white/70" size={20} />
                <p className="text-sm leading-relaxed text-white/90">{item.quote}</p>
                <div className="mt-4 text-sm font-bold">{item.name}</div>
                <div className="text-xs text-white/70">{item.role}</div>
              </div>
            ))}
          </div>
        </motion.section>

       

        <motion.section {...fadeInUp}>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center rounded-full border border-[#1f5a78]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#1f5a78] shadow-sm">
              CAMPUS GALLERY
            </div>
            <h2 className="mt-4 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">A Glimpse of Student Life at Kailali National School</h2>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="grid grid-cols-2 gap-4 lg:col-span-2">
              <div className="col-span-1">
                <img src={gallary1} alt="Students working" className="h-44 w-full rounded-2xl object-cover shadow-lg transition-transform duration-700 group-hover:scale-105 sm:h-56" />
              </div>
              <div className="col-span-1">
                <img src={gallary2} alt="Lab work" className="h-44 w-full rounded-2xl object-cover shadow-lg transition-transform duration-700 group-hover:scale-105 sm:h-56" />
              </div>

              <div className="col-span-1">
                <img src={gallary3} alt="Sports" className="h-44 w-full rounded-2xl object-cover shadow-lg transition-transform duration-700 group-hover:scale-105 sm:h-56" />
              </div>
              <div className="col-span-1">
                <img src={gallary4} alt="Campus activities" className="h-44 w-full rounded-2xl object-cover shadow-lg transition-transform duration-700 group-hover:scale-105 sm:h-56" />
              </div>
            </div>

            <div className="flex items-stretch">
              <img src={principal} alt="Student portrait" className="hidden w-full rounded-2xl object-cover shadow-lg lg:block lg:h-140" />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate("/resources/gallery")}
              className="inline-flex items-center gap-3 rounded-full bg-[#b0173b] px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-2xl"
            >
              <ArrowRight size={16} />
              EXPLORE MORE
            </button>
          </div>
        </motion.section>

     
        <motion.section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]" {...fadeInUp}>
          <div>
            <img src={principal} alt="School life" className="h-112 w-full rounded-3xl object-cover shadow-lg" />
          </div>
          <div>
            <div className="inline-flex items-center rounded-full border border-[#1f5a78]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#1f5a78] shadow-sm">
              Frequently Asked Questions
            </div>
            <h2 className="mt-4 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Questions about Admission</h2>
            <div className="space-y-3">
              {faqItems.map((question) => (
                <div key={question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-slate-800">{question}</p>
                    <span className="text-xl text-[#1f5a78]">+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        
      </main>
    </div>
  );
};

export default Home;
