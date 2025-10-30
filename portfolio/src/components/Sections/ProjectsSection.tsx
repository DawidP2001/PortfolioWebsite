import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../Cards/ProjectCard";
import SectionTitle from "../SectionTitle";
import { allProjects } from "../../data/constants";

interface ProjectsSectionProps {
    className?: string;
    setSelectedProject: (project: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({className, setSelectedProject}) => {
    const navigate = useNavigate();
    
    // Define which projects to show on mobile (first 4)
    const mobileProjectNames = ["Knitting Page", "Reddit Sentiment Analyser", "Assembly Game", "Machine Learning Portfolio"];
    
    return (
        <section 
            className={"projects-section min-h-screen mb-10 flex justify-center " + className}
        >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
                className="max-w-[400px] sm:max-w-[1280px]"
            >
            <SectionTitle title="Projects" className="sm:mb-12"/>
            <h2 className="text-black mb-2 mx-2 sm:hidden">Here are some of the projects I've worked on:</h2>
            <div className="px-5 mb-5 sm:grid sm:grid-cols-3 sm:gap-4">
                {allProjects.map((project, index) => {
                    const isVisibleOnMobile = mobileProjectNames.includes(project.name);
                    return (
                        
                            <ProjectCard
                                key={project.id}
                                imgSrc={project.imgSrc}
                                title={project.name}
                                description={project.description}
                                technologies={project.technologies}
                                links={project.links}
                                className={isVisibleOnMobile ? "" : "hidden sm:block"}
                                onClick={() => { 
                                    if (window.innerWidth < 640) { 
                                        setSelectedProject(project.name); 
                                        navigate("/projects"); 
                                    }
                                }}
                            />
                        
                    );
                })}
            </div>
            <div className="flex items-center justify-center space-x-2 cursor-pointer hover:underline sm:hidden">
                <button onClick={() => { navigate("/projects"); }} className="text-red-600 font-medium">
                    View All Projects
                    <img
                        src="/Icons/arrow.png"
                        alt="Arrow Right"
                        className="inline-block w-4 h-4 ml-1"
                        style={{
                            filter:
                                "invert(20%) sepia(97%) saturate(7492%) hue-rotate(357deg) brightness(90%) contrast(110%)",
                        }}
                    />
                </button>
            </div>
            </motion.div>
        </section>
    );
};
export default ProjectsSection;