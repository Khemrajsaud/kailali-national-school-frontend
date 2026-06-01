import AcademicProgramPage from "../components/ui/AcademicProgramPage";
import homeImage from "../assets/images/kailali3.jpeg";
import siteText from "../content/siteText";

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
      heroImage={homeImage}
      heroAlt="Plus two program"
      highlights={highlights}
      curriculum={t.academics.levels.senior.curriculum}
      accentClass="bg-[#1f5a78]"
    />
  );
};

export default PlusTwoProgram;