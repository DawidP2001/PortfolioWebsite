interface ProjectPageProps {
  className?: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({className}) => {
    return (
        <div className={"project-page min-h-screen text-white " + className}>
            <h1 className="font-extrabold text-5xl drop-shadow-lg mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">Projects</h1>
        </div>
    );
};

export default ProjectPage;