// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "motion/react";
// import {
//   Building2, BookOpen, Bus, Coffee, Dumbbell, FlaskConical, Monitor, Shield, Trophy,
//   Music, Users, Brain, Wifi, Presentation, Award, Sparkles, ChevronRight, CheckCircle2,
//   Lock, Eye, Accessibility
// } from "lucide-react";
// import homepage from "../assets/images/kailali-home.png";
// import siteText from "../content/siteText";
// import SectionHeader from "../components/ui/SectionHeader";

// const Facilities = () => {
//   const t = siteText;

//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, amount: 0.1 },
//     transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
//   };

//   const facilities = [
//     {
//       title: t.facilities.list.classroom.title,
//       description: t.facilities.list.classroom.description,
//       icon: <Building2 size={22} />,
//       color: "blue",
//     },
//     {
//       title: t.facilities.list.science.title,
//       description: t.facilities.list.science.description,
//       icon: <FlaskConical size={22} />,
//       color: "emerald",
//     },
//     {
//       title: t.facilities.list.computer.title,
//       description: t.facilities.list.computer.description,
//       icon: <Monitor size={22} />,
//       color: "blue",
//     },
//     {
//       title: t.facilities.list.library.title,
//       description: t.facilities.list.library.description,
//       icon: <BookOpen size={22} />,
//       color: "emerald",
//     },
//     {
//       title: t.facilities.list.sports.title,
//       description: t.facilities.list.sports.description,
//       icon: <Dumbbell size={22} />,
//       color: "blue",
//     },
//     {
//       title: t.facilities.list.cafeteria.title,
//       description: t.facilities.list.cafeteria.description,
//       icon: <Coffee size={22} />,
//       color: "emerald",
//     },
//     {
//       title: t.facilities.list.transport.title,
//       description: t.facilities.list.transport.description,
//       icon: <Bus size={22} />,
//       color: "blue",
//     },
//     {
//       title: t.facilities.list.music.title,
//       description: t.facilities.list.music.description,
//       icon: <Music size={22} />,
//       color: "emerald",
//     },
//     {
//       title: t.facilities.list.dance.title,
//       description: t.facilities.list.dance.description,
//       icon: <Trophy size={22} />,
//       color: "blue",
//     },
//     {
//       title: t.facilities.list.multimedia.title,
//       description: t.facilities.list.multimedia.description,
//       icon: <Presentation size={22} />,
//       color: "emerald",
//     },
//     {
//       title: t.facilities.list.counselling.title,
//       description: t.facilities.list.counselling.description,
//       icon: <Brain size={22} />,
//       color: "blue",
//     },
//     {
//       title: t.facilities.list.auditorium.title,
//       description: t.facilities.list.auditorium.description,
//       icon: <Presentation size={22} />,
//       color: "emerald",
//     },
//     {
//       title: t.facilities.list.wifi.title,
//       description: t.facilities.list.wifi.description,
//       icon: <Wifi size={22} />,
//       color: "blue",
//     },
//     {
//       title: t.facilities.list.eca.title,
//       description: t.facilities.list.eca.description,
//       icon: <Award size={22} />,
//       color: "emerald",
//     },
//     {
//       title: t.facilities.list.infrastructure.title,
//       description: t.facilities.list.infrastructure.description,
//       icon: <Building2 size={22} />,
//       color: "blue",
//     },
//     {
//       title: t.facilities.list.scholarships.title,
//       description: t.facilities.list.scholarships.description,
//       icon: <Award size={22} />,
//       color: "emerald",
//     },
//   ];

//   const highlights = [
//     t.facilities.highlights.wifi,
//     t.facilities.highlights.playground,
//     t.facilities.highlights.medical,
//     t.facilities.highlights.parking,
//     t.facilities.highlights.accessibility,
//     t.facilities.highlights.purified,
//     t.facilities.highlights.cctv,
//     t.facilities.highlights.emergency,
//   ];

//   return (
//     <div style={{ background: "var(--bg)", color: "var(--text)" }}>
//       {/* Hero Section */}
//       <section className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center">
//         <img
//           src={homepage}
//           alt="Facilities at Kailali National School"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: "linear-gradient(135deg, rgba(10,31,51,0.85) 0%, rgba(16,42,67,0.7) 100%)",
//           }}
//         />
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
//             backgroundSize: "32px 32px",
//           }}
//         />

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="max-w-2xl">
            
//             <h1
//               className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight"
//               style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//             >
//               Our Facilities
//             </h1>
          

//             {/* Breadcrumb */}
//             <div className="flex items-center gap-2 mt-6 text-xs text-white/50 font-medium">
//               <Link to="/" className="hover:text-white transition-colors">Home</Link>
//               <ChevronRight size={12} />
//               <span className="text-white/80">Facilities</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Facilities Core Grid */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        
//         <section>
//           <SectionHeader
//             badge="Explore"
//             title="School Facilities"
//             subtitle="Providing a robust learning framework inside highly equipped and secure laboratories, studios, and play fields."
//             className="mb-14"
//           />

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {facilities.map((facility, idx) => (
//               <motion.div
//                 key={idx}
//                 className="card p-6 border border-[--border] hover-lift group"
//                 {...fadeInUp}
//                 transition={{ delay: idx * 0.04 }}
//               >
//                 <div
//                   className={`icon-box ${
//                     facility.color === "blue" ? "icon-box--blue" : "icon-box--emerald"
//                   } mb-5 group-hover:scale-105 transition-transform duration-300`}
//                 >
//                   {facility.icon}
//                 </div>
//                 <h3
//                   className="font-bold text-[--text] mb-2 text-base"
//                   style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//                 >
//                   {facility.title}
//                 </h3>
//                 <p className="text-sm text-[--text-sec] leading-relaxed">
//                   {facility.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Highlights Bar */}
//         <section className="card p-6 sm:p-10 border border-[--border] shadow-lg">
//           <SectionHeader
//             badge={t.facilities.highlights.title}
//             title="Secondary Highlights"
//             subtitle="Subtle details and campus amenities that ensure daily hygiene, safety, and general comfort."
//             center={false}
//             className="mb-8"
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//             {highlights.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center gap-3 p-4 rounded-xl bg-[--bg-alt] border border-[--border] hover:bg-white hover:shadow-sm transition-all duration-200"
//               >
//                 <CheckCircle2 size={16} className="text-[--emerald] shrink-0" />
//                 <span className="text-xs sm:text-sm text-[--text-sec] font-semibold">{item}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Safety, Inclusivity & Recognition Cards */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <motion.div
//             className="card p-6 sm:p-8 text-center hover-lift border border-[--border]"
//             {...fadeInUp}
//           >
//             <div
//               className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
//               style={{ background: "rgba(37,99,235,0.08)", color: "var(--blue)" }}
//             >
//               <Trophy size={22} />
//             </div>
//             <h4
//               className="font-extrabold text-[--text] text-base mb-2"
//               style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//             >
//               {t.facilities.extra.awardTitle}
//             </h4>
//             <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
//               {t.facilities.extra.awardDesc}
//             </p>
//           </motion.div>

//           <motion.div
//             className="card p-6 sm:p-8 text-center hover-lift border border-[--border]"
//             {...fadeInUp}
//             transition={{ delay: 0.1 }}
//           >
//             <div
//               className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
//               style={{ background: "rgba(16,185,129,0.08)", color: "var(--emerald)" }}
//             >
//               <Lock size={22} />
//             </div>
//             <h4
//               className="font-extrabold text-[--text] text-base mb-2"
//               style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//             >
//               {t.facilities.extra.securityTitle}
//             </h4>
//             <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
//               {t.facilities.extra.securityDesc}
//             </p>
//           </motion.div>

//           <motion.div
//             className="card p-6 sm:p-8 text-center hover-lift border border-[--border]"
//             {...fadeInUp}
//             transition={{ delay: 0.2 }}
//           >
//             <div
//               className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
//               style={{ background: "rgba(37,99,235,0.08)", color: "var(--blue)" }}
//             >
//               <Accessibility size={22} />
//             </div>
//             <h4
//               className="font-extrabold text-[--text] text-base mb-2"
//               style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//             >
//               {t.facilities.extra.inclusiveTitle}
//             </h4>
//             <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">
//               {t.facilities.extra.inclusiveDesc}
//             </p>
//           </motion.div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default Facilities;




import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ChevronRight, CheckCircle2, Trophy, Lock, Accessibility,
  Building2, FlaskConical, Monitor, BookOpen, Dumbbell, Coffee,
  Bus, Music, Presentation, Brain, Wifi, Award
} from "lucide-react";
import homepage from "../assets/images/kailali-home.png";
import siteText from "../content/siteText";
import SectionHeader from "../components/ui/SectionHeader";

const Facilities = () => {
  const t = siteText;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  };

  // Image-enhanced facilities list
  const facilities = [
    {
      title: t.facilities.list.classroom.title,
      description: t.facilities.list.classroom.description,
      icon: <Building2 size={20} />,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.science.title,
      description: t.facilities.list.science.description,
      icon: <FlaskConical size={20} />,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.computer.title,
      description: t.facilities.list.computer.description,
      icon: <Monitor size={20} />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.library.title,
      description: t.facilities.list.library.description,
      icon: <BookOpen size={20} />,
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.sports.title,
      description: t.facilities.list.sports.description,
      icon: <Dumbbell size={20} />,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.cafeteria.title,
      description: t.facilities.list.cafeteria.description,
      icon: <Coffee size={20} />,
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.transport.title,
      description: t.facilities.list.transport.description,
      icon: <Bus size={20} />,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.music.title,
      description: t.facilities.list.music.description,
      icon: <Music size={20} />,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.multimedia.title,
      description: t.facilities.list.multimedia.description,
      icon: <Presentation size={20} />,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.counselling.title,
      description: t.facilities.list.counselling.description,
      icon: <Brain size={20} />,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.wifi.title,
      description: t.facilities.list.wifi.description,
      icon: <Wifi size={20} />,
      image: "https://images.unsplash.com/photo-1520869578617-557561d7b114?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.facilities.list.scholarships.title,
      description: t.facilities.list.scholarships.description,
      icon: <Award size={20} />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const highlights = [
    t.facilities.highlights.wifi,
    t.facilities.highlights.playground,
    t.facilities.highlights.medical,
    t.facilities.highlights.parking,
    t.facilities.highlights.accessibility,
    t.facilities.highlights.purified,
    t.facilities.highlights.cctv,
    t.facilities.highlights.emergency,
  ];

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center">
        <img
          src={homepage}
          alt="Facilities at Kailali National School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,31,51,0.85) 0%, rgba(16,42,67,0.7) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1
              className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Facilities
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-xs text-white/50 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">Facilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Core Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        <section>
          <SectionHeader
            badge="Explore"
            title="School Facilities"
            subtitle="Providing a robust learning environment with modern campus infrastructure."
            className="mb-10"
          />

          {/* Visual Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                className="img-card group relative h-72 rounded-2xl overflow-hidden border border-[--border] shadow-md hover:shadow-xl transition-all duration-300"
                {...fadeInUp}
                transition={{ delay: idx * 0.04 }}
              >
                {/* Background Image */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent transition-opacity duration-300" />

                {/* Top Badge Icon */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white shadow-lg">
                    {facility.icon}
                  </div>
                </div>

                {/* Card Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white transform transition-transform duration-300">
                  <h3
                    className="font-bold text-lg mb-1 tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed opacity-90">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        

        {/* Key Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div className="card p-6 text-center hover-lift border border-[--border]" {...fadeInUp}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-500/10 text-[--blue]">
              <Trophy size={22} />
            </div>
            <h4 className="font-extrabold text-[--text] text-base mb-2">{t.facilities.extra.awardTitle}</h4>
            <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">{t.facilities.extra.awardDesc}</p>
          </motion.div>

          <motion.div className="card p-6 text-center hover-lift border border-[--border]" {...fadeInUp} transition={{ delay: 0.1 }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-emerald-500/10 text-[--emerald]">
              <Lock size={22} />
            </div>
            <h4 className="font-extrabold text-[--text] text-base mb-2">{t.facilities.extra.securityTitle}</h4>
            <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">{t.facilities.extra.securityDesc}</p>
          </motion.div>

          <motion.div className="card p-6 text-center hover-lift border border-[--border]" {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-500/10 text-[--blue]">
              <Accessibility size={22} />
            </div>
            <h4 className="font-extrabold text-[--text] text-base mb-2">{t.facilities.extra.inclusiveTitle}</h4>
            <p className="text-xs sm:text-sm text-[--text-sec] leading-relaxed">{t.facilities.extra.inclusiveDesc}</p>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default Facilities;
