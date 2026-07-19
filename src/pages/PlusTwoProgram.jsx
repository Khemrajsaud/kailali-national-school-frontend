import React from "react";
import siteText from "../content/siteText";
import AcademicProgramPage from "../components/ui/AcademicProgramPage";

const PlusTwoProgram = () => {
  const t = siteText;
  
  const highlights = t.academics.levels.senior.features.map((item) => ({
    badge: "+2 Program",
    title: item.title,
    text: item.description,
  }));

  return (
    <AcademicProgramPage
      title={t.academics.levels.senior.title}
      subtitle={t.academics.levels.senior.subtitle}
      overview={t.academics.levels.senior.overview}
      heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
      heroAlt="Modern school learning environment infrastructure"
      highlights={highlights}
      curriculum={t.academics.levels.senior.curriculum}
      accentColor="blue" // Can be switched seamlessly to "emerald"
    />
  );
};

export default PlusTwoProgram;