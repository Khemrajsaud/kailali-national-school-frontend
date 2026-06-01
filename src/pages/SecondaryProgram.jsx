import AcademicProgramPage from "../components/ui/AcademicProgramPage";
import homeImage from "../assets/images/kailali4.jpeg";
import siteText from "../content/siteText";

const SecondaryProgram = () => {
  const t = siteText;

  return (
    <AcademicProgramPage
      title={t.academics.levels.secondary.title}
      subtitle={t.academics.levels.secondary.subtitle}
      overview={t.academics.levels.secondary.overview}
      heroImage={homeImage}
      heroAlt="Secondary program"
      highlights={t.academics.levels.secondary.features.map((item) => ({
        badge: "Secondary",
        title: item.title,
        text: item.description,
      }))}
      curriculum={t.academics.levels.secondary.curriculum}
      accentClass="bg-[#b30731]"
    />
  );
};

export default SecondaryProgram;