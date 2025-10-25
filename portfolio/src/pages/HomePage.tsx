import AboutmeSection from "../components/Sections/AboutmeSection";
import ContactSection from "../components/Sections/ContactSection";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import SkillsSection from "../components/Sections/SkillsSection";

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({className}) => {
    return (
        <div className={"home-page min-h-screen text-white " + className}>
            <HeroSection />
            <AboutmeSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

export default HomePage;