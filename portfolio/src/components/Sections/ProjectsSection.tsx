interface ProjectsSectionProps {
    className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({className}) => {
    return (
        <section className={"projects-section " + className}>
            <h2>My Projects</h2>
            <p>Here are some of the projects I've worked on:</p>
        </section>
    );
};
export default ProjectsSection;