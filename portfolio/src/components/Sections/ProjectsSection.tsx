import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../Cards/ProjectCard";
import SectionTitle from "../SectionTitle";

interface ProjectsSectionProps {
    className?: string;
    setSelectedProject: (project: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({className, setSelectedProject}) => {
    const navigate = useNavigate();
    return (
        <section 
            className={"projects-section min-h-screen mb-10 " + className}
        >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }} // 'once' means animate only the first time, 'amount' is how much should be visible
            >
            <SectionTitle title="Projects" className=""/>
            <h2 className="text-black mb-2 mx-2">Here are some of the projects I've worked on:</h2>
            <div className="px-5 mb-5">
                <ProjectCard
                    imgSrc="/ProjectImages/Caillougarage.png"
                    title="Knitting Page"
                    description="This is a description of Project One."
                    className=""
                    onClick={() => { setSelectedProject("Knitting Page"); navigate("/projects"); }}
                />
                <ProjectCard
                    imgSrc="/ProjectImages/RedditSentiment.png"
                    title="Reddit Setntiment Analysis"
                    description="This is a description of Project One."
                    className=""
                    onClick={() => { setSelectedProject("Reddit Sentiment Analysis"); navigate("/projects"); }}
                />
                <ProjectCard
                    imgSrc="/ProjectImages/AssemblyGame.png"
                    title="Assembly Space Shooter"
                    description="This is a description of Project One."
                    className=""
                    onClick={() => { setSelectedProject("Assembly Space Shooter"); navigate("/projects"); }}
                />
                <ProjectCard
                    imgSrc="/ProjectImages/MLPortfolio.png"
                    title="Machine Learning Portfolio"
                    description="This is a description of Project One."
                    className=""
                    onClick={() => { setSelectedProject("Machine Learning Portfolio"); navigate("/projects"); }}
                />
            </div>
            <div className="flex items-center justify-center space-x-2 cursor-pointer hover:underline">
                <button onClick={() => { navigate("/projects"); }} className="text-red-600 font-medium" style={{}} >
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