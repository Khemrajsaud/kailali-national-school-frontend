import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Headphones
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import siteText from "../content/siteText";
import SectionHeader from "../components/ui/SectionHeader";
import homepage from "../assets/images/kailali-home.png";

const Contact = () => {
  const t = siteText;
  const form = useRef();
  const [sending, setSending] = useState(false);

  const contactItems = [
    {
      title: "Call Admissions Office",
      value: "+977-91-540488",
      desc: "For general inquiries, admissions, and program info.",
      icon: <Phone size={20} />,
      color: "blue",
    },
    {
      title: "Email Support Desk",
      value: "contact@kailalinational.edu.np",
      desc: "Send your reports, documents, or query details.",
      icon: <Mail size={20} />,
      color: "emerald",
    },
    {
      title: "Visit Our Campus",
      value: "Lamkichuha-1, Lamki, Kailali, Nepal",
      desc: "Sudurpaschim Province. Plan a campus tour.",
      icon: <MapPin size={20} />,
      color: "blue",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_bxn6vp7",
        "template_zbljdaf",
        form.current,
        "FwPS4VoM8FHoWx0pO"
      )
      .then(
        () => {
          toast.success(t.contact.form.success || "Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
          });
          e.target.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          toast.error(t.contact.form.error || "Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      )
      .finally(() => setSending(false));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      <ToastContainer />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center">
        <img
          src={homepage}
          alt="Contact Kailali National School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,31,51,0.85) 0%, rgba(16,42,67,0.7) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
           
            <h1
              className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Contact Us
            </h1>
           

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-xs text-white/50 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info panel left */}
          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
            <div>
              
              <h2 className="text-h1 text-[--text] mt-2 mb-4">
                Let’s Connect &{" "}
                <span style={{ color: "var(--blue)" }}>Build the Future</span>
              </h2>
              <p className="text-[--text-sec] leading-relaxed text-[15px]">
                Whether you want to apply for enrollment, arrange a physical school tour, or ask about curriculum plans, our office team is standing by to help.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="card p-5 border border-[--border] hover-lift flex gap-4 items-start"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      item.color === "blue" ? "icon-box--blue" : "icon-box--emerald"
                    } mb-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[--text] text-sm mb-0.5"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "var(--blue)" }}
                    >
                      {item.value}
                    </p>
                    <p className="text-xs text-[--text-sec] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office timing card */}
            <div
              className="p-5 rounded-2xl border flex gap-3 text-sm text-[--text-sec]"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.04) 0%, rgba(10,31,51,0.02) 100%)",
                borderColor: "rgba(37,99,235,0.12)",
              }}
            >
              <Clock size={18} className="text-[--blue] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[--navy] mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Office Working Hours
                </span>
                <span>Sunday – Friday: 9:00 AM – 4:00 PM (Closed on Saturdays and public holidays).</span>
              </div>
            </div>
          </motion.div>

          {/* Contact form right */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 card p-6 sm:p-10 border border-[--border] shadow-lg"
          >
            <div className="text-center mb-8">
              <h3
                className="font-extrabold text-xl sm:text-2xl text-[--text]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Send a Message
              </h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-[--text-sec] block mb-2">
                    {t.contact.form.name || "Your Name"} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.form.placeholderName || "e.g. John Doe"}
                    className="w-full px-4 py-3 rounded-xl border border-[--border] bg-[--bg-alt] text-sm text-[--text] focus:outline-none focus:border-[--blue] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[--text-sec] block mb-2">
                    {t.contact.form.email || "Email Address"} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.form.placeholderEmail || "e.g. name@domain.com"}
                    className="w-full px-4 py-3 rounded-xl border border-[--border] bg-[--bg-alt] text-sm text-[--text] focus:outline-none focus:border-[--blue] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[--text-sec] block mb-2">
                  {t.contact.form.subject || "Subject"} *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder={t.contact.form.placeholderSubject || "How can we help?"}
                  className="w-full px-4 py-3 rounded-xl border border-[--border] bg-[--bg-alt] text-sm text-[--text] focus:outline-none focus:border-[--blue] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[--text-sec] block mb-2">
                  {t.contact.form.message || "Message"} *
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder={t.contact.form.placeholderMessage || "Write your message details..."}
                  className="w-full px-4 py-3 rounded-xl border border-[--border] bg-[--bg-alt] text-sm text-[--text] focus:outline-none focus:border-[--blue] focus:ring-2 focus:ring-blue-100 transition-all duration-200 resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-primary w-full justify-center btn-lg disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <span>{t.contact.form.sending || "Sending..."}</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </section>

        {/* Embedded Google Map */}
        <section className="rounded-3xl overflow-hidden shadow-xl border border-[--border] animate-fadeInUp">
          <div className="relative h-96 w-full sm:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448135.2249129021!2d80.56742510982367!3d28.658028542874764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a2133dadf31a3f%3A0xe1ad6e8ca9f00426!2sKailali%20National%20Academy!5e0!3m2!1sen!2snp!4v1776084561266!5m2!1sen!2snp"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kailali National School Map Location"
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;
