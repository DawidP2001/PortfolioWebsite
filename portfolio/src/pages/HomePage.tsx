import AboutmeSection from "../components/Sections/AboutmeSection";
import ContactSection from "../components/Sections/ContactSection";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({className}) => {
    return (
        <div className={"home-page " + className}>
            <HeroSection />
            <AboutmeSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

export default HomePage;