import { useEffect, useRef, useState } from "react";
import logo from "../../assets/icons/school.png";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import siteText from "../../content/siteText";
import { Phone } from 'lucide-react';
import { Mails } from 'lucide-react';


const Navbar = () => {

  const t = siteText;
  const [isOpen, setIsOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Admissions", to: "/admission" },
    { label: "Gallery", to: "/resources/gallery" },
    { label: "Notice Board", to: "/resources/notices" },
    { label: "Contact", to: "/contact" },
    { label: "News & Artical", to: "/resources/news" },
  ];

  const academicItems = [
    { label: "Primary School", to: "/academic/primary" },
    { label: "Secondary School", to: "/academic/secondary" },
    { label: "+2 Program", to: "/academic/plus-two" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setAcademicsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
    setAcademicsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAcademicsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
     
      <div className="flex items-center gap-9 justify-center bg-white py-4 text-center text-black">
       
       <Mails className="text-sm text-red-900" />

        <p className="text-sm">national@kailalinational.edu.np</p>
         <Phone className="text-sm text-red-900" />
        <p className="text-sm">+977-91-540488</p>
       
      </div>

    <nav className="sticky top-0 z-50 border-b border-(--border) bg-[#b0173b] backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-2 py-3">

          {/* BRANDING (Logo & School Name) */}
          <div className="flex items-center gap-3">
            <Link to="/" onClick={handleLinkClick} className="hover:opacity-80 transition-opacity duration-300">
              <img className="w-12 sm:w-14" src={logo} alt="Logo" />
            </Link>
            <div>
              <h1 className="text-[16px] lg:text-[17px] text-white tracking-tight">
                {t.nav.brandTitle}
              </h1>
            
            </div>
          </div>

          {/* DESKTOP LINKS (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[16px] lg:text-[17px] font-semibold ">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="px-3 py-2 text-[16px] lg:text-[17px] text-white font-semibold "
              >
                {item.label}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setAcademicsOpen((value) => !value)}
                className="px-3 py-2 text-[16px] lg:text-[17px] text-white font-semibold inline-flex items-center gap-1"
              >
                Academics
                <ChevronDown size={16} className={`transition-transform ${academicsOpen ? "rotate-180" : ""}`} />
              </button>

              {academicsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-white/15 bg-white text-(--text) shadow-2xl">
                  {academicItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-sm font-semibold hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Actions Container */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg bg-(--primary) text-white shadow-lg shadow-blue-500/20">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-full w-full border-b border-(--border) bg-(--bg) text-(--text) p-4 shadow-2xl animate-slideInDown flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleLinkClick}
                className="p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm"
              >
                {item.label}
              </Link>
            ))}

            <div className="rounded-xl border border-(--border) bg-(--card) p-2">
              <button
                type="button"
                onClick={() => setAcademicsOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-lg p-3 font-bold text-sm hover:bg-(--bg-alt)"
              >
                Academics
                <ChevronDown size={16} className={`transition-transform ${academicsOpen ? "rotate-180" : ""}`} />
              </button>
              {academicsOpen && (
                <div className="mt-1 flex flex-col gap-1 pl-2">
                  {academicItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-(--bg-alt)"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
