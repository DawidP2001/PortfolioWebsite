import AboutmeSection from "../components/Sections/AboutmeSection";
import ContactSection from "../components/Sections/ContactSection";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import SkillsSection from "../components/Sections/SkillsSection";
import WorkSection from "../components/Sections/WorkSection";

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
            <SkillsSection className="sm:hidden"/>
            <div className="grid grid-cols-2 sm:max-w-[1000px] mx-auto mb-20">
            <WorkSection className="hidden sm:block " />
            <SkillsSection />
            </div>
            <ProjectsSection setSelectedProject={setSelectedProject}/>
            <ContactSection />
        </div>
    );
};

export default HomePage;