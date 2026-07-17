import { Link } from "react-router-dom";
import logo from "../../assets/logo/school.png";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import siteText from "../../content/siteText";

const Footer = () => {
  const t = siteText;
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Admissions", to: "/admission" },
    { label: "Facilities", to: "/facilities" },
    { label: "Notice Board", to: "/resources/notices" },
    { label: "School Rules", to: "/rules" },
    { label: "Contact Us", to: "/contact" },
  ];

  const programs = [
    { label: "Pre-Primary", to: "/academic/primary" },
    { label: "Primary School", to: "/academic/primary" },
    { label: "Secondary School", to: "/academic/secondary" },
    { label: "+2 Program", to: "/academic/plus-two" },
    { label: "News & Articles", to: "/resources/news" },
    { label: "Gallery", to: "/resources/gallery" },
  ];

  return (
    <footer className="relative mt-0 overflow-hidden" style={{ background: "#0A1F33" }}>
      {/* Decorative top border */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--emerald), var(--blue))" }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, var(--blue), transparent)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, var(--emerald), transparent)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 pt-14 pb-8">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img
                src={logo}
                alt="Kailali National School"
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <div
                  className="text-white font-bold text-[15px] leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Kailali National School
                </div>
                <div className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">
                  Excellence in Education
                </div>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              {t.footer.intro}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {[
                { href: "#", icon: <Facebook size={16} />, label: "Facebook" },
                { href: "#", icon: <Instagram size={16} />, label: "Instagram" },
                { href: "#", icon: <Youtube size={16} />, label: "YouTube" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.6)"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--blue)";
                    e.currentTarget.style.borderColor = "var(--blue)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[--emerald]"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Programs
            </h4>
            <ul className="space-y-2.5">
              {programs.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[--emerald]"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white/90 transition-colors duration-200"
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5"
                    style={{ background: "rgba(37,99,235,0.15)" }}
                  >
                    <MapPin size={14} className="text-[--blue-light]" />
                  </div>
                  <span>Lamkichuha-1, Lamki, Kailali,<br />Sudurpaschim Province, Nepal</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+97791540488"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors duration-200"
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                    style={{ background: "rgba(16,185,129,0.15)" }}
                  >
                    <Phone size={14} className="text-[--emerald]" />
                  </div>
                  +977-91-540488
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@kailalinational.edu.np"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors duration-200"
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                    style={{ background: "rgba(37,99,235,0.15)" }}
                  >
                    <Mail size={14} className="text-[--blue-light]" />
                  </div>
                  contact@kailalinational.edu.np
                </a>
              </li>
            </ul>

            {/* Working hours */}
            <div
              className="mt-5 p-3 rounded-xl text-xs"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1.5 font-semibold">
                Working Hours
              </div>
              <div className="text-white/65 leading-relaxed">
                Sun – Fri: 9:00 AM – 4:00 PM<br />
                Saturday: Closed
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="h-px mb-6"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
        />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {year} Kailali National School. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1.5">
            Designed with <Heart size={11} className="text-red-400 fill-red-400" /> by{" "}
            <a
              href="https://www.niijotech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors"
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
