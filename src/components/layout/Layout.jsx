import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowUp, X, GraduationCap } from "lucide-react";

function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Admissions Announcement Bar ── */}
      

      <Navbar />

      <main className="flex-1">
        {children || <Outlet />}
      </main>

      <Footer />

      {/* ── Scroll To Top Button ── */}
      <button
        type="button"
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full text-white shadow-lg transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, var(--blue) 0%, var(--navy) 100%)",
          boxShadow: "var(--shadow-blue)"
        }}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

export default Layout;
