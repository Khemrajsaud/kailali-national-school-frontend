import { Link } from "react-router-dom";
import logo from "../../assets/logo/school.png";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, ArrowRight, Heart, Clock } from 'lucide-react';
import siteText from "../../content/siteText";

const Footer = () => {
  const t = siteText;
  const year = 2026; // Dynamic calendar matching current application time frame

  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Admissions", to: "/admission" },
    { label: "Facilities", to: "/facilities" },
    { label: "Notice Board", to: "/resources/notices" },
    { label: "School Rules", to: "/rules" },
    { label: "Contact Us", to: "/contact" },
  ];

  const programs = [
    { label: "Pre-Primary School", to: "/academic/primary" },
    { label: "Primary School", to: "/academic/primary" },
    { label: "Secondary School", to: "/academic/secondary" },
    { label: "+2 Science / Mgmt", to: "/academic/plus-two" },
    { label: "News & Articles", to: "/resources/news" },
    { label: "Gallery Media", to: "/resources/gallery" },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 mt-0 overflow-hidden">
      
      {/* Dynamic Blue Accent Top Border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600" />

      {/* Modern Background Radial Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-16">

          {/* School Brand Column */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img
                src={logo}
                alt="Kailali National School"
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="leading-tight">
                <div className="text-white font-black text-[16px] tracking-tight">
                  Kailali National School
                </div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                  Excellence in Education
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6 max-w-xs">
              {t.footer.intro}
            </p>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2">
              {[
                { href: "#", icon: <Facebook size={16} />, label: "Facebook" },
                { href: "#", icon: <Instagram size={16} />, label: "Instagram" },
                { href: "#", icon: <Youtube size={16} />, label: "YouTube" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 shadow-sm transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-blue-500 transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-500 shrink-0"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs Links Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-blue-500 transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-500 shrink-0"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
                Contact Info
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <MapPin size={14} />
                    </div>
                    <span>Lamkichuha-1, Lamki, Kailali,<br />Sudurpaschim Province, Nepal</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+97791540488"
                    className="flex items-center gap-3 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Phone size={14} />
                    </div>
                    +977-91-540488
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@kailalinational.edu.np"
                    className="flex items-center gap-3 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Mail size={14} />
                    </div>
                    <span className="truncate">contact@kailalinational.edu.np</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* School Office Hours Panel */}
            <div className="p-4 bg-slate-900/40 border border-slate-900 rounded-xl flex items-start gap-3">
              <Clock size={16} className="text-blue-500 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-bold text-[11px] uppercase tracking-wider mb-1">
                  Office Hours
                </div>
                <div className="text-slate-400 text-xs font-semibold leading-relaxed">
                  Sun – Fri: 9:00 AM – 4:00 PM<br />
                  Saturday: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Split Line */}
        <div className="h-px w-full bg-slate-900 mb-8" />

        {/* Bottom Rights & Attribution Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold text-slate-500">
            &copy; {year} Kailali National School. All rights reserved.
          </p>
          <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            Designed with <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse mx-0.5" /> by{" "}
            <a
              href="https://www.niijotech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 underline underline-offset-4 decoration-slate-700 hover:decoration-blue-500 font-bold transition-all"
            >
              Niijo Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;