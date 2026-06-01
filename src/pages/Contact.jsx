import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import contactImg from "../assets/images/dummyimage.png";
import siteText from "../content/siteText";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const t = siteText;
  const form = useRef();
  const [sending, setSending] = useState(false);

  const contactItems = [
    { title: "Call Us", value: "+977-91-540290", icon: Phone },
    { title: "Email Us", value: "info@kailalinationalschool.edu.np", icon: Mail },
    { title: "Address", value: "Lamki, Lamkichuha-2, Kailali, Nepal", icon: MapPin },
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
          toast.success(t.contact.form.success, { position: "top-right", autoClose: 5000 });
          e.target.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          toast.error(t.contact.form.error, { position: "top-right", autoClose: 5000 });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <ToastContainer />

      <div className="relative overflow-hidden border-b bg-linear-to-b from-slate-50 via-white to-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <h1 className="mt-5 text-4xl font-black tracking-tight text-(--text) sm:text-5xl lg:text-6xl">Get in touch with us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-(--muted) sm:text-base">Home / Contact Us</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 sm:py-16 sm:space-y-14">
        <section className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden bg-(--card) shadow-lg">
            <img src={contactImg} alt="Contact team" className="h-full w-full object-cover" />
          </div>

          <div className="bg-(--card) p-6 shadow-lg sm:p-8">
            <div className="inline-flex items-center rounded-full border border-(--primary)/20 bg-(--primary)/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-(--primary)">Contact Us</div>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-(--text) sm:text-3xl">Get in touch with us</h2>
            <p className="mt-3 max-w-xl text-sm text-(--muted) sm:text-base">Have a question or need more information? Send us a message and we will get back to you shortly.</p>

            <div className="mt-8">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 border-b border-(--border) py-5 last:border-b-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--primary)/10 text-(--primary)">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-(--text)">{item.title}</p>
                      <p className="mt-1 break-all text-sm text-(--muted)">{item.value}</p>
                    </div>
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--primary) text-white"><ArrowRight size={14} /></span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 items-start gap-8 bg-[#eef5fb] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="pt-2">
            <h3 className="text-2xl font-black tracking-tight text-(--text) sm:text-3xl">Let’s Connect and Build Your Future Together</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-(--muted) sm:text-base">Have a question or need more information? Send us a message and we will get back to you shortly.</p>
          </div>

          <div className="bg-white p-6 shadow-lg sm:p-8">
            <h3 className="text-center text-2xl font-black text-(--text) sm:text-3xl">Send a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="mt-8 grid grid-cols-1 gap-5">
              <div>
                <label className="text-xs font-bold text-(--text)">{t.contact.form.name} *</label>
                <input type="text" name="name" placeholder={t.contact.form.placeholderName} className="mt-2 w-full rounded-none border border-slate-300 bg-white px-4 py-3 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-(--primary)" required />
              </div>

              <div>
                <label className="text-xs font-bold text-(--text)">{t.contact.form.email} *</label>
                <input type="email" name="email" placeholder={t.contact.form.placeholderEmail} className="mt-2 w-full rounded-none border border-slate-300 bg-white px-4 py-3 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-(--primary)" required />
              </div>

              <div>
                <label className="text-xs font-bold text-(--text)">{t.contact.form.subject} *</label>
                <input type="text" name="subject" placeholder={t.contact.form.placeholderSubject} className="mt-2 w-full rounded-none border border-slate-300 bg-white px-4 py-3 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-(--primary)" required />
              </div>

              <div>
                <label className="text-xs font-bold text-(--text)">{t.contact.form.message} *</label>
                <textarea rows="6" name="message" placeholder={t.contact.form.placeholderMessage} className="mt-2 w-full resize-none rounded-none border border-slate-300 bg-white px-4 py-3 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-(--primary)" required />
              </div>

              <div>
                <button type="submit" disabled={sending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
                  <Send size={18} className={sending ? "animate-pulse" : ""} />
                  {sending ? t.contact.form.sending : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <section className="px-4 pb-8 sm:px-6 sm:pb-16 animate-fadeInUp">
        <div className="overflow-hidden">
          <div className="relative h-90 w-full sm:h-115 lg:h-140">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448135.2249129021!2d80.56742510982367!3d28.658028542874764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a2133dadf31a3f%3A0xe1ad6e8ca9f00426!2sKailali%20National%20Academy!5e0!3m2!1sen!2snp!4v1776084561266!5m2!1sen!2snp"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kailali National Academy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
