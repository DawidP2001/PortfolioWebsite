import { motion } from "framer-motion";
import ProjectCard from "../Cards/ProjectCard";

interface ProjectsSectionProps {
    className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({className}) => {
    return (
        <section className={"projects-section min-h-screen " + className}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }} // 'once' means animate only the first time, 'amount' is how much should be visible
            >
            <h1>Featured Projects</h1>
            <h2>Here are some of the projects I've worked on:</h2>
            <div className="p-5">
                <ProjectCard
                    imgSrc="/ProjectImages/Caillougarage.png"
                    title="Knitting Page"
                    description="This is a description of Project One."
                    className=""
                />
                <ProjectCard
                    imgSrc="/ProjectImages/RedditSentiment.png"
                    title="Reddit Setntiment Analysis"
                    description="This is a description of Project One."
                />
                <ProjectCard
                    imgSrc="/ProjectImages/AssemblyGame.png"
                    title="Assembly Space Shooter"
                    description="This is a description of Project One."
                />
                <ProjectCard
                    imgSrc="/ProjectImages/MLPortfolio.png"
                    title="Machine Learning Portfolio"
                    description="This is a description of Project One."
                />
            </div>
            <div className="flex items-center justify-center space-x-2 mb-5 cursor-pointer hover:underline">
                <p>View all projects</p>
                <img src="/Icons/right.png" alt="Arrow Right Icon" className="w-5 mt-[5px] [filter:invert(90%)]"/>
            </div>
            </motion.div>
        </section>
    );
};
export default ProjectsSection;