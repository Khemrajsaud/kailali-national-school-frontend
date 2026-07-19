import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  Download,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  User
} from "lucide-react";
import siteText from "../content/siteText";
import { apiUrl } from "../config/api";

const API_URL = apiUrl("/api/notice");

const ResourcesNotice = () => {
  const t = siteText;

  // React Component States
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedNoticeId, setExpandedNoticeId] = useState(null);

  // Load notices records from the data layer on mount
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_URL);
        setNotices(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error catching bulletin logs:", err);
        setError(t.notices.error || "Failed to load board notices.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, [t.notices.error]);

  // UI Date formatter
  const formatDate = (dateString) => {
    if (!dateString) return "Recent Notice";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // String preview utility for collapsed rows
  const truncateText = (text, maxLength = 180) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Dynamic profile badge letters builder
  const getInitials = (name) => {
    if (!name) return 'AD';
    const fragments = name.trim().split(' ');
    if (fragments.length >= 2) {
      return (fragments[0][0] + fragments[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Motion setup definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── TOP BANNER HERO SECTION ── */}
      <section className="relative bg-white border-b border-slate-100 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <h1 className="text-slate-900 text-3xl sm:text-5xl font-black tracking-tight mb-3">
            {t.notices.hero || "Official Notices"}
          </h1>
         
        </div>
      </section>

      {/* ── CENTRAL DATA GRID LISTING AREA ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        {/* Loading Framework View */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-80 gap-4">
            <Loader2 className="animate-spin text-blue-600 stroke-[2.5]" size={40} />
            <p className="text-xs sm:text-sm text-slate-500 font-medium animate-pulse">
              {t.notices.loading || "Accessing notification logs..."}
            </p>
          </div>
        )}

        {/* System Error Response Banner */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto rounded-2xl p-5 bg-red-50 border border-red-100 flex items-start gap-3.5 text-red-700 shadow-sm"
          >
            <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
            <div>
              <h4 className="font-bold text-sm tracking-tight mb-0.5">System Error</h4>
              <p className="text-xs font-normal leading-relaxed text-red-600">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Dashboard Empty Records Display */}
        {!loading && notices.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-md mx-auto text-center py-16 px-6 border border-slate-200 bg-slate-50/50 rounded-2xl"
          >
            <div className="w-12 h-12 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <FileText size={20} />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 tracking-tight mb-1">
              {t.notices.noNotices || "No Current Notices"}
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              {t.notices.noNoticesDetail || "The electronic board registry is clear. Active institutional notices will appear here."}
            </p>
          </motion.div>
        )}

        {/* Notices Dynamic Column Layout */}
        {!loading && notices.length > 0 && (
          <motion.div
            className="columns-1 md:columns-2 gap-8 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {notices.map((notice) => {
              const isExpanded = expandedNoticeId === notice.id;
              const hasExtendedContent = notice.description && notice.description.length > 180;

              return (
                <motion.article
                  key={notice.id}
                  variants={cardVariants}
                  className="break-inside-avoid flex flex-col bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 flex flex-col grow">
                    
                    {/* Notice Card Heading */}
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug tracking-tight mb-4">
                      {notice.title}
                    </h3>

                    {/* Meta Section Block */}
                    <div className="flex items-center gap-3 mb-5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 shrink-0 select-none">
                        {notice.author ? getInitials(notice.author) : <User size={14} />}
                      </div>

                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-xs font-bold text-slate-700 truncate tracking-tight">
                          {notice.author || t.notices.pa || "Academic Registry"}
                        </span>
                        <div className="flex items-center gap-1.5 text-[11px] text-blue-600 font-bold uppercase tracking-wider mt-0.5">
                          <Calendar size={11} className="stroke-[2.5]" />
                          <span>{formatDate(notice.notice_date)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Notice Central Text Content */}
                    <div className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal mb-6 whitespace-pre-line">
                      {isExpanded || !hasExtendedContent
                        ? notice.description
                        : truncateText(notice.description, 180)
                      }
                    </div>

                    {/* Bottom Utility Action Row */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      
                      {/* Read Control Switch */}
                      {hasExtendedContent ? (
                        <button
                          onClick={() => setExpandedNoticeId(isExpanded ? null : notice.id)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 active:scale-98 transition-all p-1 -ml-1"
                        >
                          {isExpanded ? (
                            <>
                              {t.notices.readLess || "Show Less"}
                              <ChevronUp size={13} className="stroke-[2.5]" />
                            </>
                          ) : (
                            <>
                              {t.notices.readMore || "Expand Notice"}
                              <ChevronDown size={13} className="stroke-[2.5]" />
                            </>
                          )}
                        </button>
                      ) : (
                        <div />
                      )}

                      {/* Download Attachments Anchor */}
                      {notice.document_url && (
                        <a
                          href={notice.document_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors ml-auto active:scale-98"
                        >
                          <Download size={12} className="stroke-[2.5]" />
                          {t.notices.download || "View PDF"}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </main>

    </div>
  );
};

export default ResourcesNotice;