import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutmeSection from "../components/Sections/AboutmeSection";
import ContactSection from "../components/Sections/ContactSection";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import SkillsSection from "../components/Sections/SkillsSection";
import WorkSection from "../components/Sections/WorkSection";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

interface HomePageProps {
  className?: string;
  setSelectedPage: (page: string) => void;
  setSelectedProject: (project: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({className, setSelectedProject}) => {
    const location = useLocation();

    // Handle hash navigation when landing on the page with a hash
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className={"home-page min-h-screen text-white " + className}>
            <HeroSection />
            <AboutmeSection />
            <section id="work">
                <WorkSection className="sm:hidden p-1 mb-20" />
                <div className="hidden sm:grid grid-cols-2 sm:max-w-[1000px] mx-auto mb-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className=""
                        >
                            <SectionTitle title="Experience" className=""/>
                        </motion.div>
                        <WorkSection className="" title={false}/>
                    </div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className=""
                        >
                            <SectionTitle title="Skills" className=""/>
                        </motion.div>
                        <SkillsSection title={false} className="pt-8"/>
                    </div>
                </div>
            </section>
            <section id="skills" className="sm:hidden">
                <SkillsSection className="mb-20" />
            </section>
            <ProjectsSection setSelectedProject={setSelectedProject}/>
            <ContactSection />
        </div>
    );
};

export default HomePage;