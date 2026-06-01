import AcademicProgramPage from "../components/ui/AcademicProgramPage";
import homeImage from "../assets/images/kailali-home.png";
import siteText from "../content/siteText";

const PrimaryProgram = () => {
  const t = siteText;

  return (
    <AcademicProgramPage
      title={t.academics.levels.primary.title}
      subtitle={t.academics.levels.primary.subtitle}
      overview={t.academics.levels.primary.overview}
      heroImage={homeImage}
      heroAlt="Primary program"
      highlights={t.academics.levels.primary.features.map((item) => ({
        badge: "Primary",
        title: item.title,
        text: item.description,
      }))}
      curriculum={t.academics.levels.primary.curriculum}
      accentClass="bg-[#1f5a78]"
    />
  );
};

export default PrimaryProgram;