import AboutmeSection from "../components/Sections/AboutmeSection";
import ContactSection from "../components/Sections/ContactSection";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import SkillsSection from "../components/Sections/SkillsSection";

interface HomePageProps {
  className?: string;
  setSelectedPage: (page: string) => void;
  setSelectedProject: (project: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({className, setSelectedProject}) => {
    return (
        <div className={"home-page min-h-screen text-white " + className}>
            <HeroSection />
            <AboutmeSection />
            <SkillsSection />
            <ProjectsSection setSelectedProject={setSelectedProject}/>
            <ContactSection />
        </div>
    );
};

export default HomePage;