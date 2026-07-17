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
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setAcademicsOpen(false);
    setMobileAcademicsOpen(false);
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside dropdown
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAcademicsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (to) => location.pathname === to;
  const isAcademicActive = academicItems.some((i) => location.pathname === i.to);

  // Determine if we're on the homepage (transparent nav)
  const isHome = location.pathname === "/";

  return (
    <>
      {/* ── MAIN NAV ── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 nav-scrolled`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[70px] items-center justify-between gap-4">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full blur-sm transition-opacity duration-300 group-hover:opacity-100 opacity-0`}
                  style={{ background: "rgba(37,99,235,0.3)" }}
                />
                <img
                  src={logo}
                  alt="Kailali National School Logo"
                  className="relative w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="leading-tight">
                <span
                  className={`block font-bold text-[15px] sm:text-[16px] tracking-tight transition-colors duration-300 text-[--navy]`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Kailali National School
                </span>
                <span
                  className={`block text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 text-[--text-sec]`}
                >
                  Excellence in Education
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all duration-200 group ${
                    isActive(item.to)
                      ? "text-[--blue]"
                      : "text-[--text-sec] hover:text-[--navy]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-200 ${
                      isActive(item.to) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                    }`}
                    style={{ background: "var(--blue)" }}
                  />
                </Link>
              ))}

              {/* Academics dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setAcademicsOpen((v) => !v)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all duration-200 ${
                    isAcademicActive || academicsOpen
                      ? "text-[--blue]"
                      : "text-[--text-sec] hover:text-[--navy]"
                  }`}
                  aria-expanded={academicsOpen}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Academics
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${academicsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown panel */}
                {academicsOpen && (
                  <div
                    className="absolute left-0 top-full mt-3 w-64 rounded-2xl bg-white shadow-xl border border-[--border] overflow-hidden z-50"
                    style={{ boxShadow: "var(--shadow-xl)" }}
                  >
                    <div className="p-2">
                      {academicItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`flex items-start gap-3 px-3 py-3 rounded-xl text-sm transition-all duration-200 group ${
                            isActive(item.to)
                              ? "bg-blue-50 text-[--blue]"
                              : "text-[--text] hover:bg-[--bg-alt] hover:text-[--navy]"
                          }`}
                        >
                          <div className="icon-box icon-box--blue w-9 h-9 rounded-lg mt-0.5">
                            <GraduationCap size={15} />
                          </div>
                          <div>
                            <div className="font-semibold text-[13.5px]">{item.label}</div>
                            <div className="text-[11px] text-[--text-sec] mt-0.5">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-[--border] p-3">
                      <Link
                        to="/academic"
                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[--blue] text-white text-sm font-semibold transition-all duration-200 hover:bg-[--blue-dark]"
                      >
                        View All Programs <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Apply Now CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/admission"
                className="btn btn-primary btn-sm"
              >
                Apply Now <ArrowRight size={14} />
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 bg-[--bg-alt] text-[--navy] hover:bg-[--border]`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Overlay ── */}
        <div
          className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ${
            mobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[--navy]/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`absolute top-0 right-0 h-full w-[300px] sm:w-[340px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ background: "var(--navy)" }}
            >
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
                <div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Kailali National School
                  </div>
                  <div className="text-white/60 text-[10px] uppercase tracking-wider">Excellence in Education</div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Contact strip */}
            <div className="px-5 py-3 bg-[--bg-alt] border-b border-[--border] flex flex-col gap-1.5">
              <a href="mailto:contact@kailalinational.edu.np" className="flex items-center gap-2 text-xs text-[--text-sec] hover:text-[--blue] transition-colors">
                <Mail size={12} className="text-[--blue]" />
                contact@kailalinational.edu.np
              </a>
              <a href="tel:+97791540488" className="flex items-center gap-2 text-xs text-[--text-sec] hover:text-[--blue] transition-colors">
                <Phone size={12} className="text-[--blue]" />
                +977-91-540488
              </a>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive(item.to)
                      ? "bg-blue-50 text-[--blue]"
                      : "text-[--text] hover:bg-[--bg-alt] hover:text-[--navy]"
                  }`}
                >
                  {item.label}
                  {isActive(item.to) && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[--blue]" />
                  )}
                </Link>
              ))}

              {/* Mobile Academics Accordion */}
              <div className="rounded-xl border border-[--border] overflow-hidden mt-1">
                <button
                  type="button"
                  onClick={() => setMobileAcademicsOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    isAcademicActive
                      ? "bg-blue-50 text-[--blue]"
                      : "text-[--text] hover:bg-[--bg-alt] hover:text-[--navy]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    Academics
                  </span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${mobileAcademicsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileAcademicsOpen && (
                  <div className="bg-[--bg-alt] border-t border-[--border]">
                    {academicItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-center gap-3 px-5 py-3 text-sm border-b border-[--border] last:border-0 transition-all duration-200 ${
                          isActive(item.to)
                            ? "bg-blue-50 text-[--blue] font-semibold"
                            : "text-[--text-sec] hover:bg-white hover:text-[--navy]"
                        }`}
                      >
                        <GraduationCap size={14} className="text-[--blue] shrink-0" />
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-[11px] text-[--text-muted]">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Apply Now CTA */}
            <div className="p-4 border-t border-[--border]">
              <Link
                to="/admission"
                className="btn btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
