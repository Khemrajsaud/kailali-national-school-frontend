import { useEffect, useRef, useState } from "react";
import logo from "../../assets/icons/school.png";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail, GraduationCap, ArrowRight, FolderOpen, Image, Bell, Newspaper } from "lucide-react";

const academicItems = [
  { label: "Pre-Primary", to: "/academic/primary", desc: "Play-based early learning" },
  { label: "Primary School", to: "/academic/primary", desc: "Grades 1–5 foundation" },
  { label: "Secondary School", to: "/academic/secondary", desc: "Grades 6–10 excellence" },
  { label: "+2 Program", to: "/academic/plus-two", desc: "Science, Management & Law" },
];

const resourceItems = [
  { label: "Gallery", to: "/resources/gallery", desc: "Campus life in photos", icon: <Image size={16} /> },
  { label: "Notice Board", to: "/resources/notices", desc: "Important school announcements", icon: <Bell size={16} /> },
  { label: "News", to: "/resources/news", desc: "Latest events & updates", icon: <Newspaper size={16} /> },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Admissions", to: "/admission" },
  { label: "Facilities", to: "/facilities" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  
  const academicDropdownRef = useRef(null);
  const resourceDropdownRef = useRef(null);
  const location = useLocation();

  // Reset states on route changes
  useEffect(() => {
    setMobileOpen(false);
    setAcademicsOpen(false);
    setResourcesOpen(false);
    setMobileAcademicsOpen(false);
    setMobileResourcesOpen(false);
  }, [location.pathname]);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    const handler = (e) => {
      if (academicDropdownRef.current && !academicDropdownRef.current.contains(e.target)) {
        setAcademicsOpen(false);
      }
      if (resourceDropdownRef.current && !resourceDropdownRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll on mobile overlay
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (to) => location.pathname === to;
  const isAcademicActive = academicItems.some((i) => location.pathname === i.to);
  const isResourceActive = resourceItems.some((i) => location.pathname === i.to);

  return (
    <>
      {/* ── DESKTOP MAIN NAVIGATION BAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm h-[65px] sm:h-[75px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between gap-4">

            {/* Brand Logo Info */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
              />
              <div className="leading-tight">
                <span className="block font-black text-[15px] sm:text-[17px] text-slate-950">
                  Kailali National School
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-slate-500">
                  Excellence in Education
                </span>
              </div>
            </Link>

            {/* Main Links Container */}
            <div className="hidden xl:flex items-center gap-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 rounded-lg text-[15px] font-bold transition-colors ${
                    isActive(item.to) ? "text-blue-600" : "text-slate-950 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Academics Desktop Dropdown */}
              <div className="relative" ref={academicDropdownRef}>
                <button
                  type="button"
                  onClick={() => { setAcademicsOpen(!academicsOpen); setResourcesOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-bold transition-colors ${
                    isAcademicActive || academicsOpen ? "text-blue-600" : "text-slate-950 hover:text-blue-600"
                  }`}
                >
                  Academics
                  <ChevronDown size={15} className={`transition-transform duration-200 ${academicsOpen ? "rotate-180" : ""}`} />
                </button>

                {academicsOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-white shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {academicItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
                          isActive(item.to) ? "bg-blue-50 text-blue-600" : "text-slate-950 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                      >
                        <GraduationCap size={18} className="mt-0.5 text-blue-500 shrink-0" />
                        <div>
                          <div className="font-bold">{item.label}</div>
                          <div className="text-[11px] text-slate-400 font-medium mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Desktop Dropdown */}
              <div className="relative" ref={resourceDropdownRef}>
                <button
                  type="button"
                  onClick={() => { setResourcesOpen(!resourcesOpen); setAcademicsOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-bold transition-colors ${
                    isResourceActive || resourcesOpen ? "text-blue-600" : "text-slate-950 hover:text-blue-600"
                  }`}
                >
                  Resources
                  <ChevronDown size={15} className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>

                {resourcesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-white shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
                          isActive(item.to) ? "bg-blue-50 text-blue-600" : "text-slate-950 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                      >
                        <div className="mt-0.5 text-blue-500 shrink-0">{item.icon}</div>
                        <div>
                          <div className="font-bold">{item.label}</div>
                          <div className="text-[11px] text-slate-400 font-medium mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Action CTA Button */}
            <div className="hidden xl:flex items-center">
              <Link to="/admission" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold flex items-center gap-1.5 shadow-sm shadow-blue-600/10 transition-colors">
                Apply Now <ArrowRight size={15} />
              </Link>
            </div>

            {/* Mobile View Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-50 text-slate-950 hover:bg-slate-100 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── RESPONSIVE COMPACT MOBILE DRAWER ── */}
      {mobileOpen && (
        <div className="fixed inset-0 w-screen h-screen xl:hidden" style={{ zIndex: 99999 }}>
          <div onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" />

          <div className="absolute top-0 right-0 h-full w-full max-w-[320px] bg-white flex flex-col shadow-2xl overflow-hidden">
            
            {/* Dark Mobile Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-slate-950 text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                <div className="leading-none">
                  <div className="font-black text-sm">Kailali National School</div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Excellence in Education</div>
                </div>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Quick Contact Strip */}
            <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 flex flex-col gap-1.5 shrink-0">
              <a href="mailto:contact@kailalinational.edu.np" className="flex items-center gap-2 text-xs font-medium text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap">
                <Mail size={13} className="text-blue-600 shrink-0" />
                <span>contact@kailalinational.edu.np</span>
              </a>
              <a href="tel:+97791540488" className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <Phone size={13} className="text-blue-600 shrink-0" />
                <span>+977-91-540488</span>
              </a>
            </div>

            {/* Scrolling Dynamic Links Body */}
            <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1 scrollbar-thin">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-bold transition-colors ${
                    isActive(item.to) ? "bg-blue-50 text-blue-600" : "text-slate-950 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Accordion: Academics Dropdown */}
              <div className="rounded-xl border border-slate-100 overflow-hidden mt-1">
                <button
                  type="button"
                  onClick={() => { setMobileAcademicsOpen(!mobileAcademicsOpen); setMobileResourcesOpen(false); }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-[15px] font-bold transition-colors ${
                    isAcademicActive ? "bg-blue-50 text-blue-600" : "text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-blue-600" /> Academics
                  </span>
                  <ChevronDown size={15} className={`transition-transform text-slate-500 ${mobileAcademicsOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileAcademicsOpen && (
                  <div className="bg-slate-50/70 border-t border-slate-100 max-h-[200px] overflow-y-auto scrollbar-thin">
                    {academicItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-start gap-2.5 px-6 py-3 text-[13px] transition-colors ${
                          isActive(item.to) ? "text-blue-600 font-extrabold" : "text-slate-950 hover:bg-slate-100"
                        }`}
                      >
                        <div className="mt-0.5 text-blue-500 font-bold">•</div>
                        <div>
                          <div className="font-bold text-slate-950">{item.label}</div>
                          <div className="text-[10px] text-slate-400 font-medium mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Accordion: Resources Dropdown */}
              <div className="rounded-xl border border-slate-100 overflow-hidden mt-1">
                <button
                  type="button"
                  onClick={() => { setMobileResourcesOpen(!mobileResourcesOpen); setMobileAcademicsOpen(false); }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-[15px] font-bold transition-colors ${
                    isResourceActive ? "bg-blue-50 text-blue-600" : "text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <FolderOpen size={18} className="text-blue-600" /> Resources
                  </span>
                  <ChevronDown size={15} className={`transition-transform text-slate-500 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileResourcesOpen && (
                  <div className="bg-slate-50/70 border-t border-slate-100 max-h-[200px] overflow-y-auto scrollbar-thin">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-start gap-2.5 px-6 py-3 text-[13px] transition-colors ${
                          isActive(item.to) ? "text-blue-600 font-extrabold" : "text-slate-950 hover:bg-slate-100"
                        }`}
                      >
                        <div className="mt-0.5 text-blue-500 font-bold">•</div>
                        <div>
                          <div className="font-bold text-slate-950">{item.label}</div>
                          <div className="text-[10px] text-slate-400 font-medium mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Fixed Mobile Bottom Apply Action CTA */}
            <div className="p-4 border-t border-slate-100 shrink-0 bg-white">
              <Link
                to="/admission"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-[14px] flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-600/10"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;