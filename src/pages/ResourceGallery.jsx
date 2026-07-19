import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  Loader2,
  X,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  ServerOff,
} from "lucide-react";
import siteText from "../content/siteText";
import { apiUrl } from "../config/api";

const API_URL = apiUrl("/api/gallery");

function ResourceGallery() {
  const t = siteText;
  
  // Component States
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch gallery datasets directly from administrative endpoint
  const fetchGallery = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(API_URL);
      setGallery(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching gallery logs:", err);
      setError(err?.response?.data?.message || t.gallery.errorTitle);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Lightbox Interactivity Handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(gallery[index]);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    const nextIdx = (currentImageIndex + 1) % gallery.length;
    setCurrentImageIndex(nextIdx);
    setSelectedImage(gallery[nextIdx]);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    const prevIdx = (currentImageIndex - 1 + gallery.length) % gallery.length;
    setCurrentImageIndex(prevIdx);
    setSelectedImage(gallery[prevIdx]);
  };

  // Keyboard navigation listener hooks
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentImageIndex, gallery.length]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── TOP HERO SECTION HEADER ── */}
      <section className="relative bg-white border-b border-slate-100 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-4">
            Campus Life
          </span>
          <h1 className="text-slate-900 text-3xl sm:text-5xl font-black tracking-tight">
            {t.gallery.hero || "Media Gallery"}
          </h1>
         
        </div>
      </section>

      {/* ── GALLERY RENDER CONTENT AREA ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Loading Layout Overlay */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-80 gap-4">
            <Loader2 size={40} className="text-blue-600 animate-spin stroke-[2.5]" />
            <p className="text-xs sm:text-sm text-slate-500 font-medium animate-pulse tracking-wide">
              {t.gallery.loading || "Retrieving media files..."}
            </p>
          </div>
        )}

        {/* API Error Layout Display */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center py-12 px-6 border border-slate-200 rounded-2xl bg-white shadow-sm"
          >
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-100">
              <ServerOff size={22} className="text-red-500" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2">
              {t.gallery.errorTitle || "Connection Timeout"}
            </h2>
            <p className="text-xs text-slate-500 mb-6 font-normal leading-relaxed">
              {error}
            </p>
            <button
              onClick={fetchGallery}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-md shadow-blue-600/10 active:scale-98"
            >
              <RefreshCw size={13} /> {t.gallery.tryAgain || "Retry Fetch"}
            </button>
          </motion.div>
        )}

        {/* Empty Collection Placeholder Box */}
        {!loading && gallery.length === 0 && !error && (
          <div className="max-w-md mx-auto text-center py-16 px-6 border border-slate-200 bg-slate-50/50 rounded-2xl">
            <div className="w-12 h-12 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center mx-auto mb-4">
              <ImageIcon size={20} className="text-slate-400" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 tracking-tight mb-1">
              {t.gallery.noImages || "No Media Found"}
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              {t.gallery.noImagesDetail || "The campus archive directory is currently unfilled. Please check back later."}
            </p>
          </div>
        )}

        {/* Clean Standard Fixed Height Image Grid */}
        {!loading && gallery.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {gallery.map((item, index) => (
              <motion.div
                key={item.id || index}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                onClick={() => openLightbox(index)}
                className="group relative bg-white border border-slate-200 p-2.5 rounded-2xl shadow-sm hover:border-slate-300 hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Fixed Aspect Image Wrapper Box */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 relative">
                  <img
                    src={item.image_url}
                    alt={item.title || "Gallery Item"}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-550 ease-out"
                    loading="lazy"
                  />
                  {/* Clean pure white minimal inner border hover action */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-xl transition-colors pointer-events-none" />
                </div>
                
                {/* Clean Bottom Text Card Alignment */}
                <div className="pt-3 px-1">
                  <h3 className="font-bold text-slate-900 text-sm truncate tracking-tight">
                    {item.title || "Untitled Release"}
                  </h3>
                  {item.category && (
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mt-0.5">
                      {item.category}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>

      {/* ── PREMIUM MODAL OVERLAY LIGHTBOX ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/98 backdrop-blur-md"
          >
            {/* Top Close Controller */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all z-50"
            >
              <X size={20} />
            </button>

            {/* Main Interactive High Res Image */}
            <div className="relative max-w-[90%] max-h-[80vh] flex flex-col items-center select-none" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedImage.image_url}
                src={selectedImage.image_url}
                alt={selectedImage.title}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Bottom Label Bar */}
              <div className="mt-4 text-center">
                <h4 className="text-white font-bold text-base tracking-tight">
                  {selectedImage.title}
                </h4>
              </div>
            </div>

            {/* Pagination Controls Wrapper Grid */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 sm:left-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 sm:right-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ResourceGallery;