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
import music from "../assets/images/music.jpg";
import schoolImg from "../assets/images/school.jpg";
import siteText from "../content/siteText";
import { apiUrl } from "../config/api";
import smartclassroom from "../assets/images/smartclassroom.jpg";
import computerlab from "../assets/images/computerlab.jpg";
import scienceLab from "../assets/images/sciencelab.jpg";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import SectionHeader from "../components/ui/SectionHeader";
import sport from "../assets/images/sport.jpg";
import teacher from "../assets/images/teacher.jpg";
import modernClass from "../assets/images/modern-class.jpg";
import qualityEducation from "../assets/images/quality-education.jpg";
import safety from "../assets/images/safety.png";
import computerLab from "../assets/images/computer-lab.jpg";
import sSport from "../assets/images/s-sport.jpg";
import principle from "../assets/images/principle.jpg";
import priPrimary from "../assets/images/pri-primary.jpg";
import primary from "../assets/images/primary.jpg";
import secondary from "../assets/images/secondary.jpg";
import plusTwo from "../assets/images/plustwo.jpg";

const API_URL = apiUrl("/api/news");

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

  const whyCards = [
    {
      icon: <BookOpen size={22} />,
      title: "Quality Education",
      desc: "NEB-affiliated curriculum with modern pedagogical approaches and a focus on deep conceptual understanding.",
      color: "blue",
      image: qualityEducation,
    },
    {
      icon: <Users size={22} />,
      title: "Experienced Teachers",
      desc: "Our dedicated faculty bring decades of expertise, passion, and mentorship to every classroom experience.",
      color: "emerald",
      image: teacher,
    },
    {
      icon: <Monitor size={22} />,
      title: "Modern Classrooms",
      desc: "Smart boards, digital tools, and interactive learning environments that inspire curiosity and innovation.",
      color: "blue",
      image: modernClass,
    },
    {
      icon: <Dumbbell size={22} />,
      title: "Sports & Activities",
      desc: "A rich co-curricular program including sports, music, dance, debate, and leadership development activities.",
      color: "emerald",
      image: sSport,
    },
    {
      icon: <FlaskConical size={22} />,
      title: "Computer & Science Labs",
      desc: "Fully-equipped laboratories for hands-on experimentation, coding, and scientific discovery.",
      color: "blue",
      image: scienceLab,
    },
    {
      icon: <Shield size={22} />,
      title: "Student Safety",
      desc: "24/7 CCTV surveillance, trained security staff, and a safe, inclusive, supportive campus environment.",
      color: "emerald",
      image: safety,
    },
  ];

  const programs = [
    {
      level: "Pre-Primary",
      tag: "Play Group",
      img: priPrimary,
      desc: "Play-based, Montessori-inspired early childhood development in a nurturing, colorful environment.",
      to: "/academic/primary",
      color: "#2563EB",
    },
    {
      level: "Primary School",
      tag: "Grades 1–5",
      img: primary,
      desc: "Strong foundational literacy and numeracy with interactive, activity-based modern learning approaches.",
      to: "/academic/primary",
      color: "#10B981",
    },
    {
      level: "Secondary School",
      tag: "Grades 6–10",
      img: secondary,
      desc: "Rigorous SEE preparation with practical labs, critical thinking, and comprehensive academic support.",
      to: "/academic/secondary",
      color: "#2563EB",
    },
    {
      level: "+2 Program",
      tag: "Grades 11–12",
      img: plusTwo,
      desc: "Specialized Science, Management & Law streams designed to prepare students for higher education.",
      to: "/academic/plus-two",
      color: "#10B981",
    },
  ];

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
     
{/* ── HERO SECTION ── */}
<section className="relative min-h-screen flex flex-col overflow-hidden group bg-slate-950">
  {/* Background Image with Lower Base Opacity */}
  <img
    src={schoolImg}
    alt="Kailali National School Campus"
    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[10s] ease-out group-hover:scale-105"
  />

  {/* Smooth Gradient Scrim for Readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />

  {/* Hero Content Container */}
  <div className="relative z-10 flex-1 flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
      <div className="max-w-3xl">
        
        {/* Responsive Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6"
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
            className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block"
          >
            Building Bright Futures.
          </span>
        </motion.h1>

        {/* High Contrast Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-xl mb-10 font-medium"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          We provide quality education that nurtures creativity, leadership, 
          innovation, and lifelong learning in a safe and supportive environment. 
          <span className="block mt-2 text-sm uppercase tracking-wider text-blue-400 font-bold">
            Established 1999 AD.
          </span>
        </motion.p>

        {/* Accessible Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to="/admission" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 text-center"
          >
            Enroll Now <ArrowRight size={18} />
          </Link>
          <Link 
            to="/academic" 
            className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 transition-colors duration-200 text-center"
          >
            Explore Programs
          </Link>
        </motion.div>
        
      </div>
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
            <div>
              <img
                src={schoolImg}
                alt="Students"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
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

            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn btn-primary">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
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
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...stagger(i * 0.08)}
                className="card p-6 hover-lift group cursor-default"
              >
             
                
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3
                  className="font-bold text-[--text] mb-2.5"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  {card.title}
                </h3>
              
              </motion.div>
            ))}
          </div>
        </div>

       
      </section>

      {/* ACADEMIC PROGRAMS */}

      <section className="section-wrapper">
        <SectionHeader
          badge="Academic Excellence"
          title="Our Academic Programs"
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



{/* ── PRINCIPAL'S MESSAGE SECTION ── */}
<section className="py-16 sm:py-24 bg-slate-50/50 overflow-hidden border-y border-slate-100/80">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* Visual Image Column (Scaled down and perfectly proportioned) */}
      <motion.div {...stagger(0)} className="relative order-2 lg:order-1 lg:col-span-4 flex justify-center">
        {/* Soft elegant background shape offset */}
        <div className="absolute top-8 bottom-0 -left-3 right-10 rounded-2xl bg-blue-600/5 -rotate-1 hidden lg:block" />
        
        <div className="relative w-full max-w-xs bg-white p-2.5 rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100">
          <img
            src={principle} 
            alt="Principal Profile Photo"
            className="w-full aspect-[4/5] sm:h-[380px] object-cover rounded-xl bg-slate-100"
          />
        </div>
      </motion.div>

      {/* Message Content Column (Clean, highly legible layout) */}
      <motion.div {...stagger(0.2)} className="order-1 lg:order-2 lg:col-span-8 flex flex-col justify-center">
        <div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100/60">
            Leadership Insights
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-6 leading-tight">
          A Message of <span className="text-blue-600">Inspiration</span>
        </h2>

        {/* Clean Modern Quote Layout */}
        <div className="relative border-l-4 border-blue-600 pl-5 my-6">
          <Quote
            size={36}
            className="absolute -top-4 left-4 text-slate-100/80 -z-10 pointer-events-none select-none scale-y-[-1]"
          />
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic">
            "It is with great pride and joy that I welcome you to Kailali National School. 
            We stand committed to nurturing not just academic brilliance, but also strong 
            character, critical thinking, and compassionate citizenship. Every child is unique, 
            and our mission is to create an environment where individual strengths can flourish."
          </p>
        </div>

        {/* Supporting Context Paragraph */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          Our experienced faculty work tirelessly to provide learning that goes beyond standard 
          textbooks through hands-on developmental projects, real-world analytical applications, 
          and a supportive culture of raw curiosity. We firmly believe true educational success is not just 
          measured by grade points, but about becoming the absolute best version of yourself.
        </p>
      </motion.div>

    </div>
  </div>
</section>

      {/* 
          CAMPUS FACILITIES
           */}
      <section className="section-wrapper">
        <SectionHeader
          badge="Campus Facilities"
          title="World Class Facilities for Every Learner"
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

      


      {/* ── SCHOOL GALLERY SECTION ── */}
<section className="py-16 sm:py-24 bg-white border-b border-slate-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <SectionHeader
      badge="School Gallery"
      title="A Glimpse of Life at Kailali National School"
      className="mb-12 text-center"
    />

    {/* Elegant Bento Grid Setup */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
      
      {/* Card 1: Large Featured Block */}
      <motion.div
        {...stagger(0)}
        className="relative group overflow-hidden rounded-2xl border border-slate-100 md:row-span-2 min-h-[280px] md:min-h-auto shadow-sm"
      >
        <img src={gallary1} alt="Students learning in class" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Campus Experience</span>
          <p className="text-sm font-semibold mt-0.5">Students & Learning</p>
        </div>
      </motion.div>

      {/* Card 2: Standard Block */}
      <motion.div
        {...stagger(0.05)}
        className="relative group overflow-hidden rounded-2xl border border-slate-100 min-h-[180px] md:min-h-auto shadow-sm"
      >
        <img src={gallary2} alt="Science Laboratories" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold">Practical Labs</p>
        </div>
      </motion.div>

      {/* Card 3: Large Featured Block */}
      <motion.div
        {...stagger(0.1)}
        className="relative group overflow-hidden rounded-2xl border border-slate-100 md:row-span-2 min-h-[280px] md:min-h-auto shadow-sm"
      >
        <img src={schoolImg || principal} alt="School Main Campus View" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Infrastructure</span>
          <p className="text-sm font-semibold mt-0.5">Our Campus Grounds</p>
        </div>
      </motion.div>

      {/* Card 4: Standard Block */}
      <motion.div
        {...stagger(0.15)}
        className="relative group overflow-hidden rounded-2xl border border-slate-100 min-h-[180px] md:min-h-auto shadow-sm"
      >
        <img src={gallary3} alt="Sports Activities" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold">Sports & Athletics</p>
        </div>
      </motion.div>

      {/* Card 5: Standard Block */}
      <motion.div
        {...stagger(0.2)}
        className="relative group overflow-hidden rounded-2xl border border-slate-100 min-h-[180px] md:min-h-auto shadow-sm"
      >
        <img src={smartclassroom} alt="Interactive Smart Classroom" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold">Smart Classrooms</p>
        </div>
      </motion.div>

      {/* Card 6: Standard Block */}
      <motion.div
        {...stagger(0.25)}
        className="relative group overflow-hidden rounded-2xl border border-slate-100 min-h-[180px] md:min-h-auto shadow-sm"
      >
        <img src={gallary4} alt="Annual Events and Celebrations" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold">Events & Culture</p>
        </div>
      </motion.div>

      

    </div>

    {/* Clean CTA Button Area */}
    <div className="text-center mt-12">
      <button
        onClick={() => navigate("/resources/gallery")}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-colors duration-200"
      >
        View Full Gallery 
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </div>

  </div>
</section>

      {/* ════════════════════════════════════════════════════════
          LATEST NEWS
          ════════════════════════════════════════════════════════ */}
      <section className="section-wrapper">
        <div className="flex items-end justify-between mb-5 gap-6 flex-wrap">
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
                  {news.image_url || news.image ? (
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
                      <BookOpen
                        size={48}
                        style={{ color: "var(--text-muted)", opacity: 0.3 }}
                      />
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
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)",
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
    TESTIMONIALS SECTION
    ════════════════════════════════════════════════════════ */}
<section className="relative py-20 sm:py-24 bg-slate-950 overflow-hidden">
  
  {/* Ambient Background Glows */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Clean Section Heading */}
    <SectionHeader
      title={
        <span className="text-white font-black">
          What Our <span className="text-blue-500">Community Says</span>
        </span>
      }
      
      className="mb-16"
    />

    {/* Testimonial Slider Wrapper */}
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="relative bg-slate-900/40 border border-slate-900 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-center shadow-xl"
        >
          {/* Decorative Quote Mark Icon */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 text-blue-500">
              <Quote size={18} className="fill-blue-500/10" />
            </div>
          </div>

          {/* Dynamic Review Quote */}
          <p className="text-slate-300 text-[15px] sm:text-[17px] font-medium leading-relaxed mb-6 italic">
            "{testimonials[activeTestimonial].quote}"
          </p>

          {/* Star Rating Layout */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-amber-400 fill-amber-400"
              />
            ))}
          </div>

          {/* Reviewer Profile Meta Details */}
          <div className="flex items-center justify-center gap-3.5 pt-4 border-t border-slate-900/60 max-w-xs mx-auto">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md flex items-center justify-center text-white font-bold text-sm tracking-wide shrink-0">
              {testimonials[activeTestimonial].avatar}
            </div>
            <div className="text-left leading-tight">
              <div className="font-bold text-white text-sm tracking-tight">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-slate-500 text-xs font-semibold mt-0.5">
                {testimonials[activeTestimonial].role}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-10">
        
        {/* Left Arrow Button */}
        <button
          onClick={() =>
            setActiveTestimonial(
              (p) => (p - 1 + testimonials.length) % testimonials.length,
            )
          }
          className="w-9 h-9 rounded-xl border border-slate-900 bg-slate-950 text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-800 transition-all active:scale-95"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dynamic Pagination Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeTestimonial
                  ? "w-6 bg-blue-500"
                  : "w-1.5 bg-slate-800 hover:bg-slate-700"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() =>
            setActiveTestimonial((p) => (p + 1) % testimonials.length)
          }
          className="w-9 h-9 rounded-xl border border-slate-900 bg-slate-950 text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-800 transition-all active:scale-95"
          aria-label="Next testimonial"
        >
          <ChevronRight size={16} />
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
