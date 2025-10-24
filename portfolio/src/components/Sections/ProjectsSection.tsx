import ProjectCard from "../ProjectCard";

interface ProjectsSectionProps {
    className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({className}) => {
    return (
        <section className={"projects-section min-h-screen " + className}>
            <h1>My Projects</h1>
            <h2>Here are some of the projects I've worked on:</h2>
            <div className="grid grid-cols-2 p-1 gap-2">
                <div>
                    <ProjectCard
                        imgSrc="/ProjectImages/wator.png"
                        title="Wa-Tor Simulation"
                        description="This is a description of Project One."
                    />
                    <ProjectCard
                        imgSrc="/ProjectImages/Caillougarage.png"
                        title="Knitting Page"
                        description="This is a description of Project One."
                    />
                    <ProjectCard
                        imgSrc="/ProjectImages/AssemblyGame.png"
                        title="Assembly Space Shooter"
                        description="This is a description of Project One."
                    />
                </div>
                <div>
                    <ProjectCard
                        imgSrc="/ProjectImages/Bytecode.png"
                        title="Java Bytecode Interpreter"
                        description="This is a description of Project One."
                    />
                    <ProjectCard
                        imgSrc="/ProjectImages/RedditSentiment.png"
                        title="Reddit Setntiment Analysis"
                        description="This is a description of Project One."
                    />
                    <ProjectCard
                        imgSrc="/ProjectImages/MLPortfolio.png"
                        title="Machine Learning Portfolio"
                        description="This is a description of Project One."
                    />
                </div>
            </div>
        </section>
    );
};
export default ProjectsSection;