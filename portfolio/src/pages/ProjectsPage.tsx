import ProjectThumbnail from "../components/Cards/ProjectThumbnail";
import SectionTitle from "../components/SectionTitle";

interface ProjectPageProps {
  className?: string;
  setSelectedProject: (project: string) => void;
  selectedProject: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({className, setSelectedProject, selectedProject}) => {
    return (
        <div className={"mt-10 project-page min-h-screen text-white bg-[var(--dominant-colour)] " + className}>
            <SectionTitle title="Projects" className=""/>
            <div className="mb-8 shadow-lg m-2 rounded-lg p-2">
                <img 
                    src="/ProjectImages/Caillougarage.png" 
                    alt="Project Image" 
                    className="mx-auto mb-4 rounded-lg p-2"
                />
                <div className="mx-4 text-colour">
                    <h2 className="font-semibold text-3xl mb-2 text-left text-gray-800">Knitting Page</h2>
                    <p className="text-left text-gray-600">This is a description of the Knitting Page project. It showcases various knitting patterns and tutorials for enthusiasts of all levels.</p>
                    <p className="text-left text-gray-600">Technologies</p>
                    <p className="text-left text-gray-600">Link</p>
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
                    onclick={() => setSelectedProject("Knitting Page")}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/wator.png"
                    title="Wa-Tor Simulation"
                    className=""
                    onclick={() => setSelectedProject("Wa-Tor Simulation")}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/MLPortfolio.png"
                    title="Machine Learning Portfolio"
                    className=""
                    onclick={() => setSelectedProject("Machine Learning Portfolio")}
                />
                </div>
                <div>
                <ProjectThumbnail
                    imgSrc="/ProjectImages/AssemblyGame.png"
                    title="Assembly Game"
                    className=""
                    onclick={() => setSelectedProject("Assembly Game")}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Bytecode.png"
                    title="Java Bytecode Interpreter"
                    className=""
                    onclick={() => setSelectedProject("Java Bytecode Interpreter")}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/RedditSentiment.png"
                    title="Reddit Sentiment Analyser"
                    className=""
                    onclick={() => setSelectedProject("Reddit Sentiment Analyser")}
                />
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;