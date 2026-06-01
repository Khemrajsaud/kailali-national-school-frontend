import { Link } from "react-router-dom";
import siteText from "../../content/siteText";

const AcademicProgramPage = ({
  title,
  subtitle,
  overview,
  highlights,
  curriculum,
  heroImage,
  heroAlt,
  accentClass = "bg-[#1f5a78]",
}) => {
  const t = siteText;

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <section className={`relative overflow-hidden ${accentClass} text-white`}>
        <div className="absolute inset-0 bg-black/15" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="relative z-10">
            <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em]">
              {subtitle}
            </div>
            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              {overview}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#b30731]"
              >
                Contact Us
              </Link>
              <Link
                to="/academic"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white"
              >
                Back to Academics
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <img
              src={heroImage}
              alt={heroAlt}
              className="h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-80 lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:py-16">
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-(--border) bg-(--card) p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-full bg-(--primary)/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-(--primary)">
                {item.badge}
              </div>
              <h2 className="mt-4 text-xl font-bold text-(--text)">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-(--muted)">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl bg-[#eef5fb] p-6 sm:p-8">
            <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-(--primary)">
              Program Focus
            </div>
            <h3 className="mt-4 text-2xl font-black text-(--text)">{subtitle}</h3>
            <p className="mt-4 text-sm leading-relaxed text-(--muted)">{overview}</p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--card) p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-black text-(--text)">Curriculum Highlights</h3>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {curriculum.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-(--bg-alt) px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--primary) text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-(--text)">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AcademicProgramPage;