import React from "react";
import siteText from "../content/siteText";
import AcademicProgramPage from "../components/ui/AcademicProgramPage";

const SecondaryProgram = () => {
  const t = siteText;

  // Map data structure seamlessly into the page highlights layout
  const highlights = t.academics.levels.secondary.features.map((item) => ({
    badge: "Secondary",
    title: item.title,
    text: item.description,
  }));

  return (
    <AcademicProgramPage
      title={t.academics.levels.secondary.title}
      subtitle={t.academics.levels.secondary.subtitle}
      overview={t.academics.levels.secondary.overview}
      heroImage="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80"
      heroAlt="Secondary education classroom setup"
      highlights={highlights}
      curriculum={t.academics.levels.secondary.curriculum}
      accentColor="emerald" // Pairs beautifully with a secondary school theme
    />
  );
};

export default SecondaryProgram;