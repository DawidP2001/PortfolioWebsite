import { motion } from "framer-motion";
import ProjectCard from "../Cards/ProjectCard";
import Button from "../Button";

interface ProjectsSectionProps {
    className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({className}) => {
    return (
        <section className={"projects-section min-h-screen mb-20 " + className}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }} // 'once' means animate only the first time, 'amount' is how much should be visible
            >
            <h1 className="font-extrabold text-5xl drop-shadow-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">Featured Projects</h1>
            <h2>Here are some of the projects I've worked on:</h2>
            <div className="px-5 mb-5">
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
            <div className="flex items-center justify-center space-x-2 cursor-pointer hover:underline">
                <Button label="View All Projects" onClick={() => {}} className="bg-blue-800"></Button>
            </div>
            </motion.div>
        </section>
    );
};
export default ProjectsSection;