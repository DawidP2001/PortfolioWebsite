import ProjectThumbnail from "../components/Cards/ProjectThumbnail";

interface ProjectPageProps {
  className?: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({className}) => {
    return (
        <div className={"project-page min-h-screen text-white " + className}>
            <h1 className="font-extrabold text-5xl drop-shadow-lg mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mt-10">Projects</h1>
            <div>
                <img src="/ProjectImages/Caillougarage.png" alt="Project Image" className="w-96 h-64 mb-4"/>
                <h2 className="font-bold text-3xl mb-2">Knitting Page</h2>
                <p className="mb-4">This is a description of the Knitting Page project. It showcases various knitting patterns and tutorials for enthusiasts of all levels.</p>
                <p>Technologies</p>
                <p>Link</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="px-4 py-2 rounded-lg text-white w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <select
                    className="px-4 py-2 rounded-lg text-white w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    defaultValue="default"
                >
                    <option value="default" disabled>Sort by</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                    <option value="tech">Technology</option>
                </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 mb-10">
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Caillougarage.png"
                    title="Knitting Page"
                    className=""
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Caillougarage.png"
                    title="Knitting Page"
                    className=""
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Caillougarage.png"
                    title="Knitting Page"
                    className=""
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Caillougarage.png"
                    title="Knitting Page"
                    className=""
                />
            </div>
        </div>
    );
};

export default ProjectPage;