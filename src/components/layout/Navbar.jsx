import { useEffect, useRef, useState } from "react";
import logo from "../../assets/icons/school.png";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail, GraduationCap } from "lucide-react";
import siteText from "../../content/siteText";

const academicItems = [
  { label: "Primary School", to: "/academic/primary" },
  { label: "Secondary School", to: "/academic/secondary" },
  { label: "+2 Program", to: "/academic/plus-two" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Admissions", to: "/admission" },
  { label: "Gallery", to: "/resources/gallery" },
  { label: "Notice Board", to: "/resources/notices" },
  { label: "Contact", to: "/contact" },
  { label: "News & Article", to: "/resources/news" },
];

const Navbar = () => {
  const t = siteText;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setAcademicsOpen(false);
    setMobileAcademicsOpen(false);
  }, [location.pathname]);

  // Close desktop dropdown on outside click
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

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden sm:flex items-center justify-center gap-6 bg-white py-2.5 text-sm text-slate-700">
        <span className="flex items-center gap-1.5">
          <Mail size={14} className="text-red-900" />
          national@kailalinational.edu.np
        </span>
        <span className="w-px h-4 bg-slate-200" />
        <span className="flex items-center gap-1.5">
          <Phone size={14} className="text-red-900" />
          +977-91-540488
        </span>
      </div>

      <nav className="sticky top-0 z-50 bg-[#b0173b] shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">

          {/* Logo + School Name */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0">
            <img src={logo} alt="Logo" className="w-11 sm:w-13" />
            <span className="text-white font-bold text-[15px] sm:text-[16px] leading-tight max-w-[160px] sm:max-w-none">
              {t.nav.brandTitle}
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-lg text-[14px] xl:text-[15px] font-semibold transition-colors ${
                  isActive(item.to)
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Academics dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setAcademicsOpen((v) => !v)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[14px] xl:text-[15px] font-semibold transition-colors ${
                  isAcademicActive || academicsOpen
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Academics
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${academicsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {academicsOpen && (
                <div className="absolute left-0 top-full mt-2 w-52 rounded-2xl border border-white/10 bg-white shadow-2xl overflow-hidden z-50">
                  {academicItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-center gap-2.5 px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive(item.to)
                          ? "bg-red-50 text-[#b0173b]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#b0173b]"
                      }`}
                    >
                      <GraduationCap size={15} className="text-[#b0173b] shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl bg-white/15 text-white hover:bg-white/25 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ${
            mobileOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#b0173b]">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-9" />
                <span className="text-white font-bold text-sm leading-tight">
                  {t.nav.brandTitle}
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg bg-white/15 text-white hover:bg-white/25 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Contact info (mobile only) */}
            <div className="px-5 py-3 bg-red-50 border-b border-red-100 flex flex-col gap-1.5 text-xs text-slate-600">
              <span className="flex items-center gap-2">
                <Mail size={12} className="text-[#b0173b]" />
                national@kailalinational.edu.np
              </span>
              <span className="flex items-center gap-2">
                <Phone size={12} className="text-[#b0173b]" />
                +977-91-540488
              </span>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(item.to)
                      ? "bg-[#b0173b] text-white"
                      : "text-slate-700 hover:bg-red-50 hover:text-[#b0173b]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile academics accordion */}
              <div className="rounded-xl border border-slate-100 overflow-hidden mt-1">
                <button
                  type="button"
                  onClick={() => setMobileAcademicsOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors ${
                    isAcademicActive
                      ? "bg-[#b0173b] text-white"
                      : "text-slate-700 hover:bg-red-50 hover:text-[#b0173b]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    Academics
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileAcademicsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileAcademicsOpen && (
                  <div className="bg-slate-50 border-t border-slate-100">
                    {academicItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-center gap-3 px-5 py-3 text-sm font-medium border-b border-slate-100 last:border-0 transition-colors ${
                          isActive(item.to)
                            ? "bg-red-50 text-[#b0173b] font-semibold"
                            : "text-slate-600 hover:bg-red-50 hover:text-[#b0173b]"
                        }`}
                      >
                        <GraduationCap size={14} className="text-[#b0173b] shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
