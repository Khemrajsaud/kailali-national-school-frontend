// import { useEffect, useRef, useState } from "react";
// import logo from "../../assets/icons/school.png";
// import { Link, useLocation } from "react-router-dom";
// import { ChevronDown, Menu, X, Phone, Mail, GraduationCap, ArrowRight } from "lucide-react";
// import siteText from "../../content/siteText";

// const academicItems = [
//   { label: "Pre-Primary", to: "/academic/primary", desc: "Play-based early learning" },
//   { label: "Primary School", to: "/academic/primary", desc: "Grades 1–5 foundation" },
//   { label: "Secondary School", to: "/academic/secondary", desc: "Grades 6–10 excellence" },
//   { label: "+2 Program", to: "/academic/plus-two", desc: "Science, Management & Law" },
// ];

// const navItems = [
//   { label: "Home", to: "/" },
//   { label: "About", to: "/about" },
//   { label: "Admissions", to: "/admission" },
//   { label: "Facilities", to: "/facilities" },
//   { label: "Gallery", to: "/resources/gallery" },
//   { label: "Notice Board", to: "/resources/notices" },
//   { label: "News", to: "/resources/news" },
//   { label: "Contact", to: "/contact" },
// ];

// const Navbar = () => {
//   const t = siteText;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [academicsOpen, setAcademicsOpen] = useState(false);
//   const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   // Close menus on route change
//   useEffect(() => {
//     setMobileOpen(false);
//     setAcademicsOpen(false);
//     setMobileAcademicsOpen(false);
//   }, [location.pathname]);

//   // Scroll detection
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Click outside dropdown
//   useEffect(() => {
//     const handler = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setAcademicsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [mobileOpen]);

//   const isActive = (to) => location.pathname === to;
//   const isAcademicActive = academicItems.some((i) => location.pathname === i.to);

//   // Determine if we're on the homepage (transparent nav)
//   const isHome = location.pathname === "/";

//   return (
//     <>
//       {/* ── MAIN NAV ── */}
//       <nav
//         className={`sticky top-0 z-50 transition-all duration-300 nav-scrolled`}
//         role="navigation"
//         aria-label="Main navigation"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-[60px] sm:h-[70px] items-center justify-between gap-3 sm:gap-4">

//             {/* ── Logo ── */}
//             <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group min-w-0">
//               <div className="relative shrink-0">
//                 <div
//                   className={`absolute inset-0 rounded-full blur-sm transition-opacity duration-300 group-hover:opacity-100 opacity-0`}
//                   style={{ background: "rgba(37,99,235,0.3)" }}
//                 />
//                 <img
//                   src={logo}
//                   alt="Kailali National School Logo"
//                   className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               <div className="leading-tight min-w-0">
//                 <span
//                   className={`block font-bold text-[13px] sm:text-[15px] md:text-[16px] tracking-tight transition-colors duration-300 text-[--navy] truncate`}
//                   style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//                 >
//                   Kailali National School
//                 </span>
//                 <span
//                   className={`block text-[9px] sm:text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 text-[--text-sec]`}
//                 >
//                   Excellence in Education
//                 </span>
//               </div>
//             </Link>

//             {/* ── Desktop Nav ── */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.to}
//                   to={item.to}
//                   className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all duration-200 group ${
//                     isActive(item.to)
//                       ? "text-[--blue]"
//                       : "text-[--text-sec] hover:text-[--navy]"
//                   }`}
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {item.label}
//                   {/* Active indicator */}
//                   <span
//                     className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-200 ${
//                       isActive(item.to) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
//                     }`}
//                     style={{ background: "var(--blue)" }}
//                   />
//                 </Link>
//               ))}

//               {/* Academics dropdown */}
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   type="button"
//                   onClick={() => setAcademicsOpen((v) => !v)}
//                   className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all duration-200 ${
//                     isAcademicActive || academicsOpen
//                       ? "text-[--blue]"
//                       : "text-[--text-sec] hover:text-[--navy]"
//                   }`}
//                   aria-expanded={academicsOpen}
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   Academics
//                   <ChevronDown
//                     size={14}
//                     className={`transition-transform duration-300 ${academicsOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>

//                 {/* Dropdown panel */}
//                 {academicsOpen && (
//                   <div
//                     className="absolute left-0 top-full mt-3 w-64 rounded-2xl bg-white shadow-xl border border-[--border] overflow-hidden z-50"
//                     style={{ boxShadow: "var(--shadow-xl)" }}
//                   >
//                     <div className="p-2">
//                       {academicItems.map((item) => (
//                         <Link
//                           key={item.to}
//                           to={item.to}
//                           className={`flex items-start gap-3 px-3 py-3 rounded-xl text-sm transition-all duration-200 group ${
//                             isActive(item.to)
//                               ? "bg-blue-50 text-[--blue]"
//                               : "text-[--text] hover:bg-[--bg-alt] hover:text-[--navy]"
//                           }`}
//                         >
//                           <div className="icon-box icon-box--blue w-9 h-9 rounded-lg mt-0.5">
//                             <GraduationCap size={15} />
//                           </div>
//                           <div>
//                             <div className="font-semibold text-[13.5px]">{item.label}</div>
//                             <div className="text-[11px] text-[--text-sec] mt-0.5">{item.desc}</div>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                     <div className="border-t border-[--border] p-3">
//                       <Link
//                         to="/academic"
//                         className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[--blue] text-white text-sm font-semibold transition-all duration-200 hover:bg-[--blue-dark]"
//                       >
//                         View All Programs <ArrowRight size={14} />
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* ── Apply Now CTA ── */}
//             <div className="hidden lg:flex items-center gap-3">
//               <Link
//                 to="/admission"
//                 className="btn btn-primary btn-sm"
//               >
//                 Apply Now <ArrowRight size={14} />
//               </Link>
//             </div>

//             {/* ── Mobile Hamburger ── */}
//             <button
//               onClick={() => setMobileOpen((v) => !v)}
//               className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 bg-[--bg-alt] text-[--navy] hover:bg-[--border]`}
//               aria-label="Toggle menu"
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile Menu Overlay ── */}
//         {mobileOpen && (
//           <div
//             className="lg:hidden"
//             style={{
//               position: "fixed",
//               inset: 0,
//               zIndex: 9999,
//             }}
//           >
//             {/* Backdrop */}
//             <div
//               onClick={() => setMobileOpen(false)}
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: "rgba(10, 31, 51, 0.6)",
//                 backdropFilter: "blur(4px)",
//                 WebkitBackdropFilter: "blur(4px)",
//               }}
//             />

//             {/* Drawer */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 right: 0,
//                 height: "100%",
//                 width: "100%",
//                 maxWidth: "340px",
//                 background: "#fff",
//                 boxShadow: "var(--shadow-xl)",
//                 display: "flex",
//                 flexDirection: "column",
//                 overflowY: "auto",
//               }}
//             >
//               {/* Drawer header */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "16px 20px",
//                   background: "var(--navy)",
//                   flexShrink: 0,
//                 }}
//               >
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                   <img src={logo} alt="Logo" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
//                   <div>
//                     <div style={{ color: "#fff", fontWeight: 700, fontSize: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
//                       Kailali National School
//                     </div>
//                     <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
//                       Excellence in Education
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setMobileOpen(false)}
//                   style={{
//                     padding: "6px",
//                     borderRadius: "8px",
//                     background: "rgba(255,255,255,0.1)",
//                     color: "#fff",
//                     border: "none",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               {/* Contact strip */}
//               <div
//                 style={{
//                   padding: "12px 20px",
//                   background: "var(--bg-alt)",
//                   borderBottom: "1px solid var(--border)",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "6px",
//                   flexShrink: 0,
//                 }}
//               >
//                 <a href="mailto:contact@kailalinational.edu.np" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--text-sec)", textDecoration: "none" }}>
//                   <Mail size={12} style={{ color: "var(--blue)", flexShrink: 0 }} />
//                   <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>contact@kailalinational.edu.np</span>
//                 </a>
//                 <a href="tel:+97791540488" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--text-sec)", textDecoration: "none" }}>
//                   <Phone size={12} style={{ color: "var(--blue)", flexShrink: 0 }} />
//                   <span>+977-91-540488</span>
//                 </a>
//               </div>

//               {/* Nav links */}
//               <div
//                 style={{
//                   flex: 1,
//                   overflowY: "auto",
//                   padding: "16px 12px",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "4px",
//                 }}
//               >
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.to}
//                     to={item.to}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       padding: "12px 16px",
//                       borderRadius: "12px",
//                       fontSize: "14px",
//                       fontWeight: 600,
//                       textDecoration: "none",
//                       color: isActive(item.to) ? "var(--blue)" : "var(--text)",
//                       background: isActive(item.to) ? "rgba(37,99,235,0.06)" : "transparent",
//                     }}
//                   >
//                     {item.label}
//                     {isActive(item.to) && (
//                       <span style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)" }} />
//                     )}
//                   </Link>
//                 ))}

//                 {/* Mobile Academics Accordion */}
//                 <div style={{ borderRadius: "12px", border: "1px solid var(--border)", overflow: "hidden", marginTop: "4px" }}>
//                   <button
//                     type="button"
//                     onClick={() => setMobileAcademicsOpen((v) => !v)}
//                     style={{
//                       width: "100%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                       padding: "12px 16px",
//                       fontSize: "14px",
//                       fontWeight: 600,
//                       color: isAcademicActive ? "var(--blue)" : "var(--text)",
//                       background: isAcademicActive ? "rgba(37,99,235,0.06)" : "transparent",
//                       border: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                       <GraduationCap size={16} />
//                       Academics
//                     </span>
//                     <ChevronDown
//                       size={15}
//                       style={{
//                         transition: "transform 0.3s",
//                         transform: mobileAcademicsOpen ? "rotate(180deg)" : "rotate(0deg)",
//                       }}
//                     />
//                   </button>

//                   {mobileAcademicsOpen && (
//                     <div style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
//                       {academicItems.map((item, idx) => (
//                         <Link
//                           key={item.to}
//                           to={item.to}
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                             padding: "12px 20px",
//                             fontSize: "14px",
//                             textDecoration: "none",
//                             borderBottom: idx < academicItems.length - 1 ? "1px solid var(--border)" : "none",
//                             color: isActive(item.to) ? "var(--blue)" : "var(--text-sec)",
//                             fontWeight: isActive(item.to) ? 600 : 500,
//                             background: isActive(item.to) ? "rgba(37,99,235,0.06)" : "transparent",
//                           }}
//                         >
//                           <GraduationCap size={14} style={{ color: "var(--blue)", flexShrink: 0 }} />
//                           <div>
//                             <div>{item.label}</div>
//                             <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>{item.desc}</div>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Apply Now CTA */}
//               <div style={{ padding: "16px", borderTop: "1px solid var(--border)", flexShrink: 0 }}>
//                 <Link
//                   to="/admission"
//                   className="btn btn-primary"
//                   onClick={() => setMobileOpen(false)}
//                   style={{ width: "100%", justifyContent: "center" }}
//                 >
//                   Apply Now <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;



import { useEffect, useRef, useState } from "react";
import logo from "../../assets/icons/school.png";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail, GraduationCap, ArrowRight } from "lucide-react";
import siteText from "../../content/siteText";

const academicItems = [
  { label: "Pre-Primary", to: "/academic/primary", desc: "Play-based early learning" },
  { label: "Primary School", to: "/academic/primary", desc: "Grades 1–5 foundation" },
  { label: "Secondary School", to: "/academic/secondary", desc: "Grades 6–10 excellence" },
  { label: "+2 Program", to: "/academic/plus-two", desc: "Science, Management & Law" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Admissions", to: "/admission" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/resources/gallery" },
  { label: "Notice Board", to: "/resources/notices" },
  { label: "News", to: "/resources/news" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const t = siteText;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setAcademicsOpen(false);
    setMobileAcademicsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAcademicsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (to) => location.pathname === to;
  const isAcademicActive = academicItems.some((i) => location.pathname === i.to);

  return (
    <>
      {/* ── FIXED DESKTOP HEADER BAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white border-b border-gray-100 shadow-sm h-[60px] sm:h-[70px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between gap-4">

            {/* Logo Links */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
              <img
                src={logo}
                alt="Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform group-hover:scale-105"
              />
              <div className="leading-tight">
                <span className="block font-bold text-[14px] sm:text-[16px] text-slate-900">
                  Kailali National School
                </span>
                <span className="block text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-slate-500">
                  Excellence in Education
                </span>
              </div>
            </Link>

            {/* Desktop Center Links */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive(item.to) ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Academics Dropdown Element */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setAcademicsOpen(!academicsOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isAcademicActive || academicsOpen ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Academics
                  <ChevronDown size={14} className={`transition-transform duration-200 ${academicsOpen ? "rotate-180" : ""}`} />
                </button>

                {academicsOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-xl bg-white shadow-xl border border-slate-100 p-2 z-50">
                    {academicItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive(item.to) ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
                          }`}
                      >
                        <GraduationCap size={16} className="mt-0.5 text-blue-500" />
                        <div>
                          <div className="font-semibold">{item.label}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden xl:flex items-center">
              <Link to="/admission" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors">
                Apply Now <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile View Toggle Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-50 text-slate-900 hover:bg-slate-100"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── ISOLATED MOBILE OVERLAY DRAWER ── */}
      {mobileOpen && (
        <div className="fixed inset-0 w-screen h-screen xl:hidden" style={{ zIndex: 99999 }}>
          {/* Backdrop Blur Layer */}
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Slider Drawer Panel */}
          <div className="absolute top-0 right-0 h-full w-full max-w-[320px] bg-white flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-200">
            {/* Dark Colored Header Block */}
            <div className="flex items-center justify-between px-5 py-4 shrink-0 bg-[#0F172A] text-white">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                <div className="leading-none">
                  <div className="font-bold text-sm">Kailali National School</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Excellence in Education</div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Direct Contact Links Strip */}
            <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 flex flex-col gap-1.5 shrink-0">
              <a href="mailto:contact@kailalinational.edu.np" className="flex items-center gap-2 text-xs text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap">
                <Mail size={12} className="text-blue-500 shrink-0" />
                <span>contact@kailalinational.edu.np</span>
              </a>
              <a href="tel:+97791540488" className="flex items-center gap-2 text-xs text-slate-600">
                <Phone size={12} className="text-blue-500 shrink-0" />
                <span>+977-91-540488</span>
              </a>
            </div>

            {/* Dynamic Scrolling Body Links */}
            <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive(item.to) ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Program Accordion Expansion */}
              <div className="rounded-lg border border-slate-100 overflow-hidden mt-1">
                <button
                  type="button"
                  onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold transition-colors ${isAcademicActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} /> Academics
                  </span>
                  <ChevronDown size={14} className={`transition-transform ${mobileAcademicsOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileAcademicsOpen && (
                  <div className="bg-slate-50 border-t border-slate-100">
                    {academicItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-start gap-2.5 px-6 py-2.5 text-xs transition-colors ${isActive(item.to) ? "text-blue-600 font-bold" : "text-slate-600 hover:bg-slate-100"
                          }`}
                      >
                        <div className="mt-0.5">•</div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Panel Drawer CTA Action */}
            <div className="p-4 border-t border-slate-100 shrink-0 bg-white">
              <Link
                to="/admission"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;




