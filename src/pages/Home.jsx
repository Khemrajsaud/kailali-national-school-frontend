import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Dumbbell,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Loader2,
  Monitor,
  Quote,
  Shield,
  Star,
  Trophy,
  Users,
  Zap,
  Music,
  Globe,
  Plus,
  Minus,
  PlayCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import home from "../assets/images/kailali-home.png";
import school from "../assets/images/kailali4.jpeg";
import gallary1 from "../assets/images/kailali1.jpeg";
import gallary2 from "../assets/images/kailali2.jpeg";
import gallary3 from "../assets/images/kailali3.jpeg";
import gallary4 from "../assets/images/kailali4.jpeg";
import principal from "../assets/images/dummyimage.png";
import library from "../assets/images/library.jpg";
import sports from "../assets/images/sport.jpg";
import music from '../assets/images/music.jpg';

import siteText from "../content/siteText";
import { apiUrl } from "../config/api";
import smartclassroom from "../assets/images/smartclassroom.jpg";
import computerlab from "../assets/images/computerlab.jpg";
import scienceLab from "../assets/images/sciencelab.jpg";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import SectionHeader from "../components/ui/SectionHeader";

const API_URL = apiUrl("/api/news");

// Animation presets
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

// ── FAQ Accordion ──────────────────────────────────────────
const faqs = [
  {
    q: "What academic programs are available at Kailali National School?",
    a: "We offer comprehensive programs from Pre-Primary (Play Group) through Grade 10 (Secondary), along with Plus Two (+2) in Science, Management, and Law streams, affiliated with the National Examination Board (NEB).",
  },
  {
    q: "How can I apply for admission?",
    a: "You can apply by visiting our Admissions page, filling out the online application form, or visiting our campus directly. Our admissions team is available to guide you through the process.",
  },
  {
    q: "What documents are required for enrollment?",
    a: "Required documents include: birth certificate, previous school's transfer certificate (TC), mark sheets of the last grade attended, passport-size photos, and parents' citizenship copies.",
  },
  {
    q: "Are scholarships available for deserving students?",
    a: "Yes, we offer merit-based and need-based scholarships to deserving students. Please contact our admissions office for detailed eligibility criteria and application procedures.",
  },
  {
    q: "What facilities are available for students?",
    a: "Our campus features modern classrooms with smart boards, fully-equipped science and computer labs, a library, sports facilities, cafeteria, transportation service, and 24/7 CCTV security.",
  },
  {
    q: "Where is Kailali National School located?",
    a: "We are located at Lamkichuha-1, Lamki, Kailali, Sudurpaschim Province, Nepal. Our campus is easily accessible from the main road and well-connected by transport routes.",
  },
];

// ── Testimonials ───────────────────────────────────────────
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent — Grade 8",
    quote:
      "The school environment is disciplined, caring, and focused on overall growth. My daughter has flourished both academically and personally. The teachers genuinely care about each child.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Ramesh Bista",
    role: "SEE Graduate, 2024",
    quote:
      "The teachers guided us closely and made learning feel practical and motivating. I scored a GPA of 3.95 in my SEE exams, and this school's support was instrumental in that achievement.",
    rating: 5,
    avatar: "RB",
  },
  {
    name: "Anjali Thapa",
    role: "Alumni — Batch 2022",
    quote:
      "Kailali National School gave me confidence, strong fundamentals, and a clear path forward. The extracurricular activities shaped me into a well-rounded individual ready for the world.",
    rating: 5,
    avatar: "AT",
  },
  {
    name: "Krishna Kumar",
    role: "Parent — Grade 11",
    quote:
      "I am impressed by the modern teaching methods and excellent faculty. The +2 program is rigorous and well-structured, preparing students for higher education with confidence.",
    rating: 5,
    avatar: "KK",
  },
];

const Home = () => {
  const t = siteText;
  const navigate = useNavigate();
  const [homeNews, setHomeNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const carouselRef = useRef(null);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Fetch news
  useEffect(() => {
    const fetchHomeNews = async () => {
      try {
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
    const plain = html
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return plain.length <= 130 ? plain : `${plain.slice(0, 130)}...`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // ── Why Choose Us cards ────────────────────────────────
  const whyCards = [
    {
      icon: <BookOpen size={22} />,
      title: "Quality Education",
      desc: "NEB-affiliated curriculum with modern pedagogical approaches and a focus on deep conceptual understanding.",
      color: "blue",
    },
    {
      icon: <Users size={22} />,
      title: "Experienced Teachers",
      desc: "Our dedicated faculty bring decades of expertise, passion, and mentorship to every classroom experience.",
      color: "emerald",
    },
    {
      icon: <Monitor size={22} />,
      title: "Modern Classrooms",
      desc: "Smart boards, digital tools, and interactive learning environments that inspire curiosity and innovation.",
      color: "blue",
    },
    {
      icon: <Dumbbell size={22} />,
      title: "Sports & Activities",
      desc: "A rich co-curricular program including sports, music, dance, debate, and leadership development activities.",
      color: "emerald",
    },
    {
      icon: <FlaskConical size={22} />,
      title: "Computer & Science Labs",
      desc: "Fully-equipped laboratories for hands-on experimentation, coding, and scientific discovery.",
      color: "blue",
    },
    {
      icon: <Shield size={22} />,
      title: "Student Safety",
      desc: "24/7 CCTV surveillance, trained security staff, and a safe, inclusive, supportive campus environment.",
      color: "emerald",
    },
  ];

  // ── Academic programs ──────────────────────────────────
  const programs = [
    {
      level: "Pre-Primary",
      tag: "Play Group",
      img: gallary1,
      desc: "Play-based, Montessori-inspired early childhood development in a nurturing, colorful environment.",
      to: "/academic/primary",
      color: "#2563EB",
    },
    {
      level: "Primary School",
      tag: "Grades 1–5",
      img: gallary2,
      desc: "Strong foundational literacy and numeracy with interactive, activity-based modern learning approaches.",
      to: "/academic/primary",
      color: "#10B981",
    },
    {
      level: "Secondary School",
      tag: "Grades 6–10",
      img: gallary3,
      desc: "Rigorous SEE preparation with practical labs, critical thinking, and comprehensive academic support.",
      to: "/academic/secondary",
      color: "#2563EB",
    },
    {
      level: "+2 Program",
      tag: "Grades 11–12",
      img: gallary4,
      desc: "Specialized Science, Management & Law streams designed to prepare students for higher education.",
      to: "/academic/plus-two",
      color: "#10B981",
    },
  ];

  // ── Facilities ────────────────────────────────────────
  const facilities = [
    {
      title: "Smart Classrooms",
      img: smartclassroom,
      icon: <Monitor size={18} />,
    },
    {
      title: "Science Labs",
      img: scienceLab,
      icon: <FlaskConical size={18} />,
    },
    { title: "Computer Lab", img: computerlab, icon: <Monitor size={18} /> },
    {
      title: "Library & Resources",
      img: library,
      icon: <BookOpen size={18} />,
    },
    { title: "Sports Complex", img: sports, icon: <Dumbbell size={18} /> },
    { title: "Music Room", img: music, icon: <Music size={18} /> },
  ];

  // ── Admission steps ───────────────────────────────────
  const admissionSteps = [
    {
      num: "01",
      title: "Apply Online",
      desc: "Fill out our online application form with student and parent details.",
      icon: <BookOpen size={22} />,
    },
    {
      num: "02",
      title: "Entrance Test",
      desc: "Appear for the written entrance assessment as per the scheduled date.",
      icon: <Award size={22} />,
    },
    {
      num: "03",
      title: "Interview",
      desc: "Meet with our academic coordinators for a personal interaction session.",
      icon: <Users size={22} />,
    },
    {
      num: "04",
      title: "Confirmation",
      desc: "Receive your admission letter and complete enrollment formalities.",
      icon: <CheckCircle2 size={22} />,
    },
  ];

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* ════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden group">
        {/* Background image */}
        <img
          src={home}
          alt="Kailali National School Campus"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,31,51,0.88) 0%, rgba(16,42,67,0.75) 50%, rgba(16,42,67,0.55) 100%)",
          }}
        />

        {/* Decorative floating shapes */}
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
            <div className="max-w-3xl">
              <motion.h1
                className="text-display text-white mb-6"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
              >
                Inspiring Young Minds.{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #34D399, #10B981)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Building Bright Futures.
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-white/75 leading-relaxed max-w-xl mb-10"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                We provide quality education that nurtures creativity,
                leadership, innovation, and lifelong learning in a safe and
                supportive environment. Established 1999 AD.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/admission" className="btn btn-emerald btn-lg">
                  Enroll Now <ArrowRight size={18} />
                </Link>
                <Link to="/academic" className="btn btn-ghost-white btn-lg">
                  Explore Programs
                </Link>
              </motion.div>


            </div>
          </div>
        </div>


      </section>


      <section
        className="relative overflow-hidden py-6"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {[
              { end: 25, suffix: "+", label: "Years of Excellence" },
              { end: 150, suffix: "+", label: "Expert Teachers" },
              { end: 3500, suffix: "+", label: "Students Enrolled" },
              { end: 100, suffix: "%", label: "Board Exam Success" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={{ background: "var(--navy)" }}
              >
                <div className="stat-number">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-white/55 text-xs font-semibold uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
          ABOUT / INTRO SECTION
         */}
      <section className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <motion.div {...stagger(0)} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={gallary1}
                alt="Students"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src={gallary2}
                alt="Classroom"
                className="h-56 w-full rounded-2xl object-cover shadow-lg mt-8"
              />
              <img
                src={gallary3}
                alt="Activities"
                className="h-56 w-full rounded-2xl object-cover shadow-lg -mt-4"
              />
              <img
                src={school}
                alt="Campus"
                className="h-56 w-full rounded-2xl object-cover shadow-lg mt-4"
              />
            </div>

          </motion.div>

          {/* Text */}
          <motion.div {...stagger(0.15)}>
            <span className="pill-badge pill-badge--navy mb-4 inline-flex">
              About Our School
            </span>
            <h2 className="text-h1 text-[--text] mt-3 mb-5">
              Where Education Meets{" "}
              <span style={{ color: "var(--blue)" }}>Excellence</span>
            </h2>
            <p className="text-[--text-sec] leading-relaxed mb-6 text-[15px]">
              Established in 1999 AD (2056 BS), Kailali National School is a
              reputed private educational institution located in Lamkichuha-1,
              Lamki, Kailali, Sudurpaschim Province, Nepal. Affiliated with the
              National Examination Board (NEB) and approved by the Ministry of
              Education.
            </p>
            <p className="text-[--text-sec] leading-relaxed mb-8 text-[15px]">
              We offer comprehensive programs from Play Group to Grade 12, in
              Science, Management, and Law streams. With a commitment to
              academic excellence and holistic development, we provide quality
              education with scholarship opportunities for deserving students.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "NEB Affiliated & Ministry Approved",
                "Scholarship Opportunities Available",
                "Play Group to +2 (Grade 12)",
                "Science, Management & Law Streams",
                "Experienced & Dedicated Faculty",
                "Modern Infrastructure & Smart Labs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--emerald)" }}
                  />
                  <span className="text-sm text-[--text-sec] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn btn-primary">
                Learn More <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WHY CHOOSE US
          ════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-24"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Choose Us"
            title={
              <>
                What Makes Kailali National{" "}
                <span style={{ color: "var(--blue)" }}>the Best Choice</span>
              </>
            }
            subtitle="Our school blends academic excellence, character building, and modern learning spaces to help every student grow with confidence and purpose."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...stagger(i * 0.08)}
                className="card p-6 hover-lift group cursor-default"
              >
                <div
                  className={`icon-box ${card.color === "blue" ? "icon-box--blue" : "icon-box--emerald"} mb-5 transition-all duration-300 group-hover:scale-110`}
                >
                  {card.icon}
                </div>
                <h3
                  className="font-bold text-[--text] mb-2.5"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-[--text-sec] leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          ACADEMIC PROGRAMS
          ════════════════════════════════════════════════════════ */}
      <section className="section-wrapper">
        <SectionHeader
          badge="Academic Excellence"
          title="Our Academic Programs"
          subtitle="A strong foundation from early childhood through higher secondary education, designed for every learner's journey."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.article
              key={prog.level}
              {...stagger(i * 0.1)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift"
              onClick={() => navigate(prog.to)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={prog.img}
                  alt={prog.level}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,31,51,0.92) 0%, rgba(10,31,51,0.4) 60%, transparent 100%)",
                  }}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span
                  className="inline-flex w-fit items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-2"
                  style={{ background: prog.color }}
                >
                  {prog.tag}
                </span>
                <h3
                  className="text-white font-bold text-lg mb-1.5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {prog.level}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-3">
                  {prog.desc}
                </p>
                <div className="flex items-center gap-1.5 text-white/80 text-xs font-semibold group-hover:text-white transition-colors">
                  Learn More{" "}
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/academic" className="btn btn-secondary">
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PRINCIPAL'S MESSAGE
          ════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-24 overflow-hidden"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div {...stagger(0)} className="relative order-2 lg:order-1">
              <div
                className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4 opacity-20"
                style={{ background: "var(--blue)" }}
              />
              <img
                src={principal}
                alt="Principal"
                className="relative w-full max-h-[480px] rounded-3xl object-cover shadow-xl"
              />
              {/* Name card */}
              <div className="absolute -bottom-5 left-6 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-[--border]">
                <div
                  className="font-bold text-[--text]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  School Principal
                </div>
                <div className="text-[--text-sec] text-xs mt-0.5">
                  Kailali National School
                </div>

              </div>
            </motion.div>

            {/* Message */}
            <motion.div {...stagger(0.2)} className="order-1 lg:order-2">
              <span className="pill-badge pill-badge--navy mb-4 inline-flex">
                Principal's Message
              </span>
              <h2 className="text-h1 text-[--text] mt-3 mb-6">
                A Message of{" "}
                <span style={{ color: "var(--blue)" }}>Inspiration</span>
              </h2>

              <div
                className="relative p-6 rounded-2xl mb-6"
                style={{
                  background: "rgba(37,99,235,0.04)",
                  border: "1px solid rgba(37,99,235,0.12)",
                }}
              >
                <Quote
                  size={32}
                  className="absolute -top-4 -left-2 opacity-20"
                  style={{ color: "var(--blue)" }}
                />
                <p className="text-[--text-sec] text-[15px] leading-relaxed italic">
                  "It is with great pride and joy that I welcome you to Kailali
                  National School. We stand committed to nurturing not just
                  academic brilliance, but also strong character, critical
                  thinking, and compassionate citizenship. Every child is
                  unique, and our mission is to create an environment where
                  individual strengths can flourish."
                </p>
              </div>

              <p className="text-[--text-sec] text-[15px] leading-relaxed mb-6">
                Our experienced faculty work tirelessly to provide learning that
                goes beyond textbooks — hands-on projects, real-world
                applications, and a culture of curiosity. We believe success is
                not just about grades, but about becoming the best version of
                yourself.
              </p>

              <div
                className="font-bold text-[--navy] text-lg"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontStyle: "italic",
                }}
              >
                — Principal, Kailali National School
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CAMPUS FACILITIES
          ════════════════════════════════════════════════════════ */}
      <section className="section-wrapper">
        <SectionHeader
          badge="Campus Facilities"
          title="World-Class Facilities for Every Learner"
          subtitle="Our state-of-the-art infrastructure is thoughtfully designed to support academic, creative, and physical development."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              {...stagger(i * 0.08)}
              className="img-card h-64 cursor-pointer group"
              onClick={() => navigate("/facilities")}
            >
              <img src={facility.img} alt={facility.title} />
              <div className="img-card-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2.5 text-white">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: "rgba(37,99,235,0.6)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {facility.icon}
                  </div>
                  <span
                    className="font-bold text-[15px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {facility.title}
                  </span>
                </div>
                <p className="text-white/70 text-xs mt-1.5 ml-0.5">
                  Modern spaces for better learning experiences.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/facilities" className="btn btn-secondary">
            Explore All Facilities <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SCHOOL GALLERY
          ════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-24"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="School Gallery"
            title="A Glimpse of Life at Kailali National School"
            subtitle="Explore vibrant campus moments  classrooms, labs, sports, events, and everything in between."
            className="mb-14"
          />

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
            <motion.div
              {...stagger(0)}
              className="img-card lg:row-span-2"
              style={{ height: "320px" }}
            >
              <img src={gallary1} alt="Students" className="!h-full" />
              <div className="img-card-overlay" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold">
                Students & Learning
              </div>
            </motion.div>
            <motion.div
              {...stagger(0.1)}
              className="img-card"
              style={{ height: "152px" }}
            >
              <img src={gallary2} alt="Labs" className="!h-full" />
              <div className="img-card-overlay" />
            </motion.div>
            <motion.div
              {...stagger(0.15)}
              className="img-card lg:row-span-2"
              style={{ height: "320px" }}
            >
              <img src={principal} alt="Campus" className="!h-full" />
              <div className="img-card-overlay" />
            </motion.div>
            <motion.div
              {...stagger(0.2)}
              className="img-card"
              style={{ height: "152px" }}
            >
              <img src={gallary3} alt="Sports" className="!h-full" />
              <div className="img-card-overlay" />
            </motion.div>
            <motion.div
              {...stagger(0.1)}
              className="img-card"
              style={{ height: "152px" }}
            >
              <img src={smartclassroom} alt="Smart Class" className="!h-full" />
              <div className="img-card-overlay" />
            </motion.div>
            <motion.div
              {...stagger(0.2)}
              className="img-card"
              style={{ height: "152px" }}
            >
              <img src={gallary4} alt="Events" className="!h-full" />
              <div className="img-card-overlay" />
            </motion.div>
            <motion.div
              {...stagger(0.25)}
              className="img-card"
              style={{ height: "152px" }}
            >
              <img src={computerlab} alt="Computer Lab" className="!h-full" />
              <div className="img-card-overlay" />
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/resources/gallery")}
              className="btn btn-primary"
            >
              View Full Gallery <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          LATEST NEWS
          ════════════════════════════════════════════════════════ */}
      <section className="section-wrapper">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <SectionHeader
            badge="Latest Updates"
            title={
              <>
                News & <span style={{ color: "var(--blue)" }}>Articles</span>
              </>
            }
            subtitle="Stay informed with the latest school news, announcements, and stories from our community."
            center={false}
          />
          <Link to="/resources/news" className="btn btn-secondary shrink-0">
            View All News <ArrowRight size={15} />
          </Link>
        </div>

        {newsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <div className="skeleton h-48 w-full" />
                <div className="p-5 space-y-3">
                  <div className="skeleton h-4 w-1/3 rounded" />
                  <div className="skeleton h-5 w-full rounded" />
                  <div className="skeleton h-4 w-4/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : homeNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeNews.map((news, i) => (
              <motion.article
                key={news._id || news.id || i}
                {...stagger(i * 0.1)}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/news/${news._id || news.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  {(news.image_url || news.image) ? (
                    <img
                      src={news.image_url || news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: "var(--bg-alt)" }}
                    >
                      <BookOpen size={48} style={{ color: "var(--text-muted)", opacity: 0.3 }} />
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "var(--blue)" }}
                    >
                      {news.category || "News"}
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)",
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[--text-muted] text-xs mb-3">
                    <CalendarDays size={12} />
                    {formatDate(news.createdAt || news.date)}
                  </div>
                  <h3
                    className="font-bold text-[--text] mb-2 group-hover:text-[--blue] transition-colors leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {news.title}
                  </h3>
                  <p className="text-sm text-[--text-sec] leading-relaxed mb-4">
                    {getPreviewText(news.content || news.body || "")}
                  </p>
                  <div className="flex items-center gap-1.5 text-[--blue] text-sm font-semibold">
                    Read Full Story{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[--text-sec]">
            <BookOpen size={40} className="mx-auto mb-4 opacity-30" />
            <p>No news available yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════════════
          TESTIMONIALS
          ════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-24 overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader

            title={
              <>
                What Our{" "}
                <span style={{ color: "var(--emerald)" }}>Community Says</span>
              </>
            }
            subtitle="Hear from the parents, students, and alumni who are part of the Kailali National School family."
            light
            className="mb-14"
          />

          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="testimonial-card text-center"
              >
                <div className="quote-mark">"</div>
                <p className="text-[--text-sec] text-[15px] sm:text-[17px] leading-relaxed mb-8 italic">
                  {testimonials[activeTestimonial].quote}
                </p>

                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ),
                  )}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--blue), var(--navy))",
                    }}
                  >
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div
                      className="font-bold text-[--text]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-[--text-sec] text-sm">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (p) => (p - 1 + testimonials.length) % testimonials.length,
                  )
                }
                className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial
                      ? "w-8 bg-[--emerald]"
                      : "w-2 bg-white/25"
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setActiveTestimonial((p) => (p + 1) % testimonials.length)
                }
                className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* ════════════════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-24"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: text */}
            <motion.div {...stagger(0)} className="lg:sticky lg:top-32">
              <span className="pill-badge pill-badge--navy mb-4 inline-flex">
                FAQ
              </span>
              <h2 className="text-h1 text-[--text] mt-3 mb-5">
                Frequently Asked{" "}
                <span style={{ color: "var(--blue)" }}>Questions</span>
              </h2>
              <p className="text-[--text-sec] text-[15px] leading-relaxed mb-8">
                Can't find an answer here? Our admissions team is happy to help
                you with any questions about enrollment, programs, or campus
                life.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Contact Admissions <ArrowRight size={16} />
              </Link>

            </motion.div>

            {/* Right: accordion */}
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  {...stagger(i * 0.06)}
                  className={`accordion-item ${openFaq === i ? "open" : ""}`}
                >
                  <button
                    className="accordion-trigger"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <span className="accordion-icon">
                      {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="accordion-content">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
