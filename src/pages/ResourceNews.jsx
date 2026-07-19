import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Newspaper, 
  Loader2, 
  CalendarDays, 
  UserRound, 
  AlertCircle, 
  Eye, 
  ArrowRight 
} from "lucide-react";
import siteText from "../content/siteText";
import { apiUrl } from "../config/api";

const API_URL = apiUrl("/api/news");

const ResourceNews = () => {
  const navigate = useNavigate();
  const t = siteText;

  // Primary Component States
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [viewedNewsIds, setViewedNewsIds] = useState(new Set());

  // Fetching news repository directly from data source
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(API_URL);
        setNews(res.data || []);
      } catch (fetchError) {
        console.error("Error loading updates:", fetchError);
        setError(t.news.error || "Unable to load announcements.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [t.news.error]);

  // Handle article view incremental actions safely
  const handleArticleEngagement = async (newsId) => {
    if (viewedNewsIds.has(newsId)) return;

    try {
      setViewedNewsIds(prev => new Set([...prev, newsId]));
      await axios.patch(`${API_URL}/${newsId}/view`);

      // Optimistic update for local array count tracking
      setNews(prevNews =>
        prevNews.map(item =>
          item.id === newsId ? { ...item, view_count: (item.view_count || 0) + 1 } : item
        )
      );
    } catch (err) {
      console.error("View update logging bypassed:", err);
    }
  };

  // Human localized date rendering formatting block
  const formatDate = (dateString) => {
    if (!dateString) return t.news.dateNotAvailable || "Recent";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // HTML tag stripping script layer for narrative fallback values
  const getPreviewText = (html = "") => {
    const plainText = html
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (plainText.length <= 130) return plainText;
    return `${plainText.slice(0, 130)}...`;
  };

  // Stagger animation container properties
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const articleItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── CLEAN TOP HEADER HERO SECTION ── */}
      <section className="relative bg-white border-b border-slate-100 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-slate-900 text-3xl sm:text-5xl font-black tracking-tight mb-3">
            {t.news.hero || "News & Events"}
          </h1>
         
        </div>
      </section>

      {/* ── MAIN CONTENT RENDERING STAGE ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        {/* State Validation: Loading Core Components */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-80 gap-4">
            <Loader2 className="animate-spin text-blue-600 stroke-[2.5]" size={40} />
            <p className="text-xs sm:text-sm text-slate-500 font-medium animate-pulse">
              {t.news.loading || "Fetching school bulletins..."}
            </p>
          </div>
        )}

        {/* State Validation: Absolute Fetch Errors */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto rounded-2xl p-5 bg-red-50 border border-red-100 flex items-start gap-3.5 text-red-700 shadow-sm"
          >
            <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
            <div>
              <h4 className="font-bold text-sm tracking-tight mb-0.5">System Exception</h4>
              <p className="text-xs font-normal leading-relaxed text-red-600">{error}</p>
            </div>
          </motion.div>
        )}

        {/* State Validation: Absolute Empty Repository Output */}
        {!loading && !error && news.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-md mx-auto text-center py-16 px-6 border border-slate-200 bg-slate-50/50 rounded-2xl"
          >
            <div className="w-12 h-12 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Newspaper size={20} />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 tracking-tight mb-1">
              {t.news.noNews || "No Articles Listed"}
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              {t.news.noNewsDetail || "There are currently no circulars or active articles recorded in our dashboard registry."}
            </p>
          </motion.div>
        )}

        {/* Core Layout Grid: Active News Articles */}
        {!loading && !error && news.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {news.map((item) => (
              <motion.article
                key={item.id}
                variants={articleItemVariants}
                onMouseEnter={() => handleArticleEngagement(item.id)}
                onClick={() => navigate(`/news/${item.id}`)}
                className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Fixed Top Media Anchor Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-b border-slate-100 shrink-0">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title || "News Media"}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
                      <Newspaper size={44} className="stroke-[1.25]" />
                    </div>
                  )}

                  {/* Top Floating Category Badge Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-white text-slate-900 shadow-sm border border-slate-200">
                      {item.category || t.news.general || "General"}
                    </span>
                  </div>
                </div>

                {/* Main Text Content Wrapper Block */}
                <div className="flex flex-col grow p-5 sm:p-6 justify-between">
                  <div>
                    {/* Upper Metadata Information Line */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-3">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={13} className="text-blue-600" />
                        <span>{formatDate(item.published_date)}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md text-slate-500 normal-case font-medium">
                        <Eye size={11} className="text-slate-400" />
                        <span>{item.view_count || 0}</span>
                      </div>
                    </div>

                    <h2 className="text-lg font-extrabold leading-snug text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal mb-5 line-clamp-3">
                      {getPreviewText(item.description)}
                    </p>
                  </div>

                  {/* Card Footer Segment Row */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 truncate max-w-[65%] tracking-tight">
                      <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <UserRound size={11} className="text-blue-600" />
                      </div>
                      <span className="truncate">{item.published_by || t.news.admin || "Admin Office"}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:gap-2 transition-all shrink-0">
                      {t.news.readMore || "Read Details"}
                      <ArrowRight size={13} className="stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </main>

    </div>
  );
};

export default ResourceNews;