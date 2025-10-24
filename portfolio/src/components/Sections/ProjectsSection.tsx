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
                <ProjectCard
                    imgSrc="/ProjectImages/wator.png"
                    title="Project One"
                    description="This is a description of Project One."
                />
                <ProjectCard
                    title="Project One"
                    description="This is a description of Project One."
                />
                <ProjectCard
                    title="Project One"
                    description="This is a description of Project One."
                />
                <ProjectCard
                    title="Project One"
                    description="This is a description of Project One."
                />
            </div>
        </section>
    );
};
export default ProjectsSection;