import ProjectThumbnail from "../components/Cards/ProjectThumbnail";

interface ProjectPageProps {
  className?: string;
  setPage?: (page: string) => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({className}) => {
    return (
        <div className={"project-page min-h-screen text-white bg-[var(--dominant-colour)] " + className}>
            <h1 className="font-extrabold text-5xl drop-shadow-lg mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mt-10">Projects</h1>
            <div className="mb-8">
                <img 
                    src="/ProjectImages/Caillougarage.png" 
                    alt="Project Image" 
                    className="w-9/10 mx-auto border-4 mb-4 rounded-lg"
                    style={{ borderColor: 'var(--secondary-colour)' }}
                />
                <div className="mx-4">
                    <h2 className="font-bold text-3xl mb-2 text-left">Knitting Page</h2>
                    <p className="text-left">This is a description of the Knitting Page project. It showcases various knitting patterns and tutorials for enthusiasts of all levels.</p>
                    <p className="text-left">Technologies</p>
                    <p className="text-left">Link</p>
                </div>
            </div>
            <div className="flex flex-row sm:flex-row gap-4 mx-2 mb-8 items-center justify-center">
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="px-4 py-2 rounded-lg text-gray-500 bg-white h-10 w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <select
                    className="text-xs px-4 py-3 rounded-lg text-gray-500 bg-white h-10 h-full w-3/8 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    defaultValue="default"
                >
                    <option value="default" disabled>Sort by</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                    <option value="tech">Technology</option>
                </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 mb-10">
                <div>
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Caillougarage.png"
                    title="Knitting Page"
                    className=""
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/wator.png"
                    title="Wa-Tor Simulation"
                    className=""
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/MLPortfolio.png"
                    title="Machine Learning Portfolio"
                    className=""
                />
                </div>
                <div>
                <ProjectThumbnail
                    imgSrc="/ProjectImages/AssemblyGame.png"
                    title="Assembly Game"
                    className=""
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Bytecode.png"
                    title="Java Bytecode Interpreter"
                    className=""
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/RedditSentiment.png"
                    title="Reddit Sentiment Analyser"
                    className=""
                />
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;